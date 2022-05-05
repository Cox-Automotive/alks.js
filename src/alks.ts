import * as packageJson from '../package.json';
import { Buffer } from 'buffer';
import nodeFetch, { Response } from 'node-fetch';

declare const window: any;

// Let it be known that it is incredibly stupid that we still have to do this - Ben W 5/12/21
// @ts-ignore
const fetch: typeof nodeFetch = process.browser
  ? window.fetch.bind(window)
  : nodeFetch;

namespace ALKS {
  interface BaseConfig {
    baseUrl: string;
    _fetch?: typeof fetch;
    userAgent?: string;
  }

  function isStsAuth(a: Auth): a is StsAuth {
    return (a as StsAuth).accessKey !== undefined;
  }

  interface StsAuth {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
  }

  function isPasswordAuth(a: Auth): a is PasswordAuth {
    return (a as PasswordAuth).userid !== undefined;
  }

  interface PasswordAuth {
    userid: string;
    password: string;
  }

  function isTokenAuth(a: Auth): a is TokenAuth {
    return (a as TokenAuth).accessToken !== undefined;
  }

  interface TokenAuth {
    accessToken: string;
  }

  type Auth = StsAuth | PasswordAuth | TokenAuth;

  export type AlksProps = BaseConfig & Auth;

  /**
   * AWS Account
   * @property account - The name of the account
   * @property role - The user's role in this account
   * @property iamKeyActive - Whether credentials with IAM permissions can be provisioned from this account
   * @property maxKeyDuration - The maximum key duration for this account
   * @property skypieaAccount - extra information about the account from Skypiea
   */
  export interface Account {
    account: string;
    role: string;
    iamKeyActive: boolean;
    maxKeyDuration: number;
    skypieaAccount: SkypieaAccount | null;
  }

  /**
   * Skypiea Account
   * @property label - the friendly name of the account
   * @property accountOwners - the samAccountNames of the account owners
   * @property cloudsploitTrend - the cloudsploit trends
   */
  export interface SkypieaAccount {
    label: string;
    accountOwners: AccountUserDetails[];
    cloudsploitTrend: CloudsploitReport[];
  }

  /**
   * CloudsploitReport
   * @property year - the year of the scan
   * @property month - the month of the scan
   * @property day - the day of the scan
   * @property href - the link to the skypiea resource
   * @property awsAccountId - the AWS account Id
   * @property scanId - the id of the scan
   * @property scanDate - the date of the scan
   * @property newRisks - the amount of new risks
   * @property passing - the amount of pass
   * @property warning - the amount of warnings
   * @property failing - the amount of fails
   * @property unknown - the amount of unknowns
   */
  export interface CloudsploitReport {
    year: number;
    month: number;
    day: number;
    href: string;
    awsAccountId: string;
    scanId: number;
    scanDate: string;
    newRisks: number;
    passing: number;
    warning: number;
    failing: number;
    unknown: number;
  }

  /**
   * AccountUserDetails
   * @property samAccountName - the samAccountName of the user
   * @property email - the email of the user
   * @property href - the href self link
   */
  export interface AccountUserDetails {
    samAccountName: string;
    email: string;
    href: string;
  }

  /**
   * AWS STS Credentials
   * @property accessKey - AWS access key
   * @property secretKey - AWS secret key
   * @property sessionToken - AWS STS session token
   * @property consoleURL - a URL to the AWS console using these keys
   */
  export interface Key {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
    consoleURL: string;
  }

  /**
   * Response containing access keys.
   * @property iamUserArn - the arn of the IAM user owning the long term access keys
   * @property accessKey - the long term access key
   * @property secretKey - the secret key for the long term access key
   * @property addedIAMUserToGroup - whether the user was successfuly added to the deny policy group
   */
  export interface LongTermKey {
    iamUserArn: string;
    accessKey: string;
    secretKey: string;
    addedIAMUserToGroup: boolean;
  }

  /**
   * Custom AWS IAM account role
   * @property roleArn - The Amazon Resource Name (ARN) associated with the new role
   * @property denyArns - The ARNs for the deny policies associated with this role
   * @property instanceProfileArn - The Instance Profile ARN associated with this role
   * @property addedRoleToInstanceProfile - Whether this role was added to an Instance Profile
   * @property tags - Resource tags associated with the IAM account role
   */
  export interface Role {
    roleArn: string;
    instanceProfileArn: string;
    addedRoleToInstanceProfile?: boolean;
    isMachineIdentity?: boolean;
    denyArns?: string;
    tags?: Tag[];
  }

  export interface AccessToken {
    accessToken: string;
    expiresIn: string;
  }

  export interface RefreshToken {
    clientId: string;
    id: string;
    userId: string;
    value: string;
  }

  /**
   * AWS account role type
   * @property roleArn - The AWS Role ARN
   * @property isMachineIdentity - true|false value of if this role is a machine identity
   * @property assumeRolePolicyDocument - The AWS assume role policy document associated with this role
   */
  export interface AwsAccountRole {
    roleArn: string;
    isMachineIdentity: boolean;
    assumeRolePolicyDocument: object;
  }

  /**
   * AWS IAM role type
   * @property roleTypeName - The AWS IAM role type name
   * @property defaultArns - The default ARNs (default policies) associated with this role
   * @property trustRelationship - The AWS trust policy document associated with this role
   * @property instanceProfile - Whether this role is an instance profile
   * @property templateVariables - A list of template variables that exist within the role type's trust policy document
   */
  export interface AwsRoleType {
    roleTypeName: string;
    defaultArns: string[];
    trustRelationship: object;
    instanceProfile: boolean;
    templateVariables?: string[];
  }

  export interface MachineIdentity {
    machineIdentityArn: string;
  }

  /**
   * Alks role tags
   * @property key - The AWS role tag key
   * @property value - The AWS role tag value
   */
  export interface Tag {
    key: string;
    value: string;
  }

  /**
   * ALKS User representation
   * @property sAMAccountName - The network id
   * @property displayName - The display nme
   * @property email - The user email
   * @property title - The user title
   * @property department - The user department
   */
  export interface User {
    sAMAccountName: string;
    displayName: string;
    email: string;
    title: string;
    department: string;
  }

  export interface CostTotal {
    awsAccountId: string;
    yyyy: string;
    mm: string;
    dd: string;
    daily: string;
    weekly: string;
    monthly: string;
    yearly: string;
    dailyCostsByService: Record<string, string>;
    monthlyCostsByService: Record<string, string>;
  }

  export enum TrustType {
    CrossAccount = 'Cross Account',
    InnerAccount = 'Inner Account',
  }

  export enum PseudoBoolean {
    True = 1,
    False = 0,
  }

  export type AwsAccountRolesProps = Partial<AlksProps> & {
    account: string;
  };

  export type GetAccountsProps = Partial<AlksProps> & {};

  export type GetKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    sessionTime: number;
  };

  export type GetIAMKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    sessionTime: number;
  };

  export type GetAWSRoleTypesProps = Partial<AlksProps> & {};

  export type GetNonServiceAWSRoleTypesProps = Partial<AlksProps> & {};

  export type CreateRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
    roleType: string;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    templateFields?: Record<string, string>;
    tags?: Tag[];
  };

  export type CreateNonServiceRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
    roleType: TrustType;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    trustArn: string;
    externalId?: string;
    tags?: Tag[];
  };

  export type ListAWSAccountRolesProps = Partial<AlksProps> & {
    account: string;
    role: string;
  };

  export type GetAccountRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
  };

  export type DeleteRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
  };

  export type CreateAccessKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    iamUserName: string;
  };

  export type DeleteIAMUserProps = Partial<AlksProps> & {
    account: string;
    role: string;
    iamUserName: string;
  };

  export type VersionProps = Partial<AlksProps> & {};

  export type GetLoginRoleProps = Partial<AlksProps> & {
    accountId: string;
    role: string;
  };

  export type GetAccessTokenProps = Partial<AlksProps> & {
    refreshToken: string;
  };

  export type GetRefreshTokensProps = Partial<AlksProps> & {};

  export type RevokeByIdProps = Partial<AlksProps> & {
    tokenId: string;
  };

  export type RevokeByValueProps = Partial<AlksProps> & {
    token: string;
  };

  export type RevokeProps = RevokeByIdProps | RevokeByValueProps;

  export type GetAllAWSRoleTypesProps = Partial<AlksProps> & {
    getDynamicValues?: boolean;
  };

  export type AddRoleMachineIdentityProps = Partial<AlksProps> & {
    roleARN: string;
  };

  export type DeleteRoleMachineIdentityProps = Partial<AlksProps> & {
    roleARN: string;
  };

  export type GetUserAccessProps = Partial<AlksProps> & {
    accountId: string;
  };

  export type GetUserRoleAccessProps = Partial<AlksProps> & {
    accountId: string;
    sAMAccountName: string;
  };

  export type GetUserAccessByRoleProps = Partial<AlksProps> & {
    accountId: string;
  };

  export type GetAccountOwnersProps = Partial<AlksProps> & {
    accountId: string;
  };

  export type GetCostTotalsProps = Partial<AlksProps> & {
    accountId: string;
  };

  /**
   * ALKS JavaScript API
   */
  export class Alks {
    private config: AlksProps;

    private constructor(config: AlksProps) {
      this.config = config;
    }

    /**
     * Returns a new instance of alks with pre-defined properties (which don't need to be supplied to every method).
     *
     * Any of the properties required by other methods can be specified here.
     *
     * Properties present on the current object are carried through to the newly created one.
     *
     * @param {Object} props - An object containing settings for the new ALKS object
     * @returns {alks}
     * @example
     * var myAlks = alks.create({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     * })
     *
     * myAlks.getKeys({
     *   account: 'anAccount',
     *   role: 'PowerUser',
     *   sessionTime: 2
     * }).then((creds) => {
     *   // creds.accessKey, creds.secretKey, creds.sessionToken
     * })
     */
    create(props: AlksProps): Alks {
      const config = {
        ...this.config,
        ...props,
      };

      return new Alks(config);
    }

    /**
     * Returns a Promise for an array of AWS accounts (and roles) accessible by the user
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @returns {Promise<account[]>}
     * @example
     * alks.getAccounts({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     * }).then((accounts) => {
     *   // accounts[0].account, accounts[0].role, accounts[0].iamKeyActive, accounts[0].maxKeyDuration, accounts[0].skypieaAccount
     * })
     */
    async getAccounts(props?: GetAccountsProps): Promise<Account[]> {
      const results = await this.internalFetch('getAccounts', props);
      return Object.keys(results.accountListRole).map((key) => ({
        account: key,
        role: results.accountListRole[key][0].role,
        iamKeyActive: results.accountListRole[key][0].iamKeyActive,
        maxKeyDuration: results.accountListRole[key][0].maxKeyDuration,
        skypieaAccount: results.accountListRole[key][0].skypieaAccount,
      }));
    }

    /**
     * Returns a Promise for AWS STS credentials from ALKS.
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The AWS account to use when provisioning the credentials
     * @param {string} props.role - The ALKS role to use when provisioning the credentials
     * @param {string} props.sessionTime - The session length for the credentials
     * @returns {Promise<credentials>}
     * @example
     * alks.getKeys({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'PowerUser',
     *   sessionTime: 2
     * }).then((creds) => {
     *   // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
     * })
     */
    async getKeys(props: GetKeysProps): Promise<Key> {
      const results = await this.internalFetch('getKeys', props);
      return pick(results, [
        'accessKey',
        'secretKey',
        'sessionToken',
        'consoleURL',
      ]);
    }

    /**
     * Returns a Promise for AWS STS credentials with IAM permissions from ALKS.
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The AWS account to use when provisioning the credentials
     * @param {string} props.role - The ALKS role to use when provisioning the credentials
     * @param {number} props.sessionTime - The session length for the credentials
     * @returns {Promise<credentials>}
     * @example
     * alks.getIAMKeys({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   sessionTime: 1
     * }).then((creds) => {
     *   // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
     * })
     */
    async getIAMKeys(props: GetIAMKeysProps): Promise<Key> {
      const results = await this.internalFetch('getIAMKeys', props);
      return pick(results, [
        'accessKey',
        'secretKey',
        'sessionToken',
        'consoleURL',
      ]);
    }

    /**
     * Returns a Promise for an array of all available role types (AWS IAM role types, custom role types) and their details
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {boolean} [props.getDynamicValues] - Whether to include the names of any template variables in the response (defaults to false)
     * @returns {Promise<Array<awsRoleType>>}
     * @example
     * alks.getAllAWSRoleTypes({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     * }).then((roleTypes) {
     *   // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship
     * })
     *
     * @example
     * alks.getAllAWSRoleTypes({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   getDynamicValues: true,
     * }).then((roleTypes) {
     *   // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship, roleTypes[i].templateVariables[i]
     * })
     */
    async getAllAWSRoleTypes(
      props: GetAllAWSRoleTypesProps
    ): Promise<AwsRoleType[]> {
      const url = props.getDynamicValues
        ? 'allAwsRoleTypes?getDynamicValues=true'
        : 'allAwsRoleTypes';
      const results = await this.internalFetch(url, props, 'GET');
      return results.roleTypes;
    }

    /**
     * Returns a Promise for an array of available AWS IAM role types
     *
     * @deprecated Replaced by getAllAWSRoleTypes which includes all AWS role types and their details
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @returns {Promise<Array<string>>}
     * @example
     * alks.getAWSRoleTypes({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     * }).then((roleTypes) {
     *   // ['AWS Lambda', 'Amazon EC2', ... ]
     * })
     */
    async getAWSRoleTypes(props: GetAWSRoleTypesProps): Promise<string[]> {
      const results = await this.internalFetch('getAWSRoleTypes', props);
      return JSON.parse(results.roleTypes);
    }

    /**
     * Returns a Promise for an array of available custom role types
     *
     * @deprecated Replaced by getAllAWSRoleTypes which includes all AWS role types and their details
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @returns {Promise<Array<string>>}
     * @example
     * alks.getNonServiceAWSRoleTypes({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     * }).then((roleTypes) => {
     *   // ['AWS Lambda', 'Amazon EC2', ...]
     * })
     */
    async getNonServiceAWSRoleTypes(
      props: GetNonServiceAWSRoleTypesProps
    ): Promise<string[]> {
      const results = await this.internalFetch(
        'getNonServiceAWSRoleTypes',
        props
      );
      return JSON.parse(results.roleTypes);
    }

    /**
     * Returns a Promise for the results of creating a new custom AWS IAM account role
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.roleName - The name of the custom AWS IAM role to create
     * @param {string} props.roleType - The type of AWS role to use when creating the new role
     * @param {number} props.includeDefaultPolicy - Whether to include the default policy in the new role (1 = yes, 0 = no)
     * @param {boolean} props.enableAlksAccess - Whether the role has a machine identity
     * @param {Object} props.templateFields - An object whose keys are template variable names and values are the value to substitute for those template variables
     * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
     * @returns {Promise<customRole>}
     * @example
     * alks.createRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName',
     *   roleType: 'Amazon EC2',
     *   includeDefaultPolicy: 1,
     *   enableAlksAccess: true
     * }).then((role) => {
     *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
     * })
     *
     * @example
     * alks.createRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName',
     *   roleType: 'Amazon EKS IRSA',
     *   includeDefaultPolicy: 1,
     *   enableAlksAccess: false,
     *   templateFields: {
     *     OIDC_PROVIDER: 'oidc.eks.us-east-1.amazonaws.com/id/88G998884RBAD6687HBE3GETY67FQE04',
     *     K8S_NAMESPACE: 'myNamespace',
     *     K8S_SERVICE_ACCOUNT: 'myServiceAccount'
     *   }
     *   tags: [
     *      {
     *        key: "tagkey1",
     *        value: "tagValue1"
     *      },
     *      {
     *        key: "tagkey1",
     *        value: "tagvalue2"
     *      }
     *   ],
     * }).then((role) => {
     *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
     * })
     */
    async createRole(props: CreateRoleProps): Promise<Role> {
      const results = await this.internalFetch('createRole', props);
      results.denyArns = results.denyArns.split(',');
      return pick(results, [
        'roleArn',
        'denyArns',
        'instanceProfileArn',
        'addedRoleToInstanceProfile',
        'tags',
      ]);
    }

    /**
     * Returns a Promise for the results of creating a new custom AWS IAM trust role
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.roleName - The name of the custom AWS IAM role to create
     * @param {string} props.roleType - The type of AWS role to use when creating the new role
     * @param {number} props.includeDefaultPolicy - Whether to include the default policy in the new role (1 = yes, 0 = no)
     * @param {string} props.trustArn - The Arn of the existing role to trust
     * @param {string} props.trustType - Whether the trust is 'Cross Account' or 'Inner Account'
     * @param {boolean} props.enableAlksAccess - Whether the role has a machine identity
     * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
     * @returns {Promise<customRole>}
     * @example
     * alks.createNonServiceRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName',
     *   roleType: 'Amazon EC2',
     *   includeDefaultPolicy: 1,
     *   trustArn: 'anExistingRoleArn',
     *   trustType: 'Cross Account',
     *   enableAlksAccess: true
     * }).then((role) => {
     *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
     * })
     * @@example
     *      * alks.createNonServiceRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName',
     *   roleType: 'Amazon EC2',
     *   includeDefaultPolicy: 1,
     *   trustArn: 'anExistingRoleArn',
     *   trustType: 'Cross Account',
     *   enableAlksAccess: true,
     *   tags: [
     *      {
     *        key: "tagkey1",
     *        value: "tagValue1"
     *      },
     *      {
     *        key: "tagkey1",
     *        value: "tagvalue2"
     *      }
     *   ],
     * }).then((role) => {
     *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
     * })
     */
    async createNonServiceRole(
      props: CreateNonServiceRoleProps
    ): Promise<Role> {
      const results = await this.internalFetch('createNonServiceRole', props);
      results.denyArns = results.denyArns.split(',');
      return pick(results, [
        'roleArn',
        'denyArns',
        'instanceProfileArn',
        'addedRoleToInstanceProfile',
        'tags',
      ]);
    }

    /**
     * Returns a Promise for an array of AWS account roles
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The account number to get AWS roles for
     * @returns {Promise<awsAccountRole[]>}
     * @example
     * alks.awsAccountRoles({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: '1234567890',
     * }).then((roles) => {
     *   // roles[i].roleArn, roles[i].isMachineIdentity, roles[i].assumeRolePolicyDocument
     * })
     */
    async awsAccountRoles(
      props: AwsAccountRolesProps
    ): Promise<AwsAccountRole[]> {
      const results = await this.internalFetch(
        `awsAccountRoles?account=${props.account}`,
        props,
        'GET'
      );
      return results.awsRoleList;
    }

    /**
     * Returns a Promise for an array of AWS custom AWS IAM account roles
     *
     * @deprecated Replaced by awsAccountRoles which includes AWS account roles and their details
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @returns {Promise<string[]>}
     * @example
     * alks.listAWSAccountRoles({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     * }).then((roleNames) => {
     *   // ['customRole1', 'customRole2', ...]
     * })
     */
    async listAWSAccountRoles(
      props: ListAWSAccountRolesProps
    ): Promise<string[]> {
      const results = await this.internalFetch('listAWSAccountRoles', props);
      return JSON.parse(results.jsonAWSRoleList).map(
        (r: string) => r.split('/').slice(-1)[0]
      );
    }

    /**
     * Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.roleName - The name of the custom AWS IAM role
     * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
     * @returns {Promise<Role>}
     * @example
     * alks.getAccountRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName'
     * }).then((role) => {
     *    // role.roleArn, role.isMachineIdentity, role.instanceProfileArn, role.tags
     * })
     */
    async getAccountRole(props: GetAccountRoleProps): Promise<Role> {
      const results = await this.internalFetch('getAccountRole', props);
      if (!results.roleExists) {
        throw new Error(
          `Role ${props.roleName} does not exist in this account`
        );
      }
      return {
        ...pick(results, ['roleArn', 'isMachineIdentity', 'tags']),
        instanceProfileArn: results.instanceProfileARN,
      };
    }

    /**
     * Returns a Promise for a boolean "true" indicating the role was deleted
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.roleName - The name of the custom AWS IAM role
     * @returns {Promise<boolean>}
     * @example
     * alks.deleteRole({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   roleName: 'awsRoleName'
     * }).then(() => {
     *   // success!
     * })
     */
    async deleteRole(props: DeleteRoleProps): Promise<boolean> {
      await this.internalFetch('deleteRole', props);
      return true;
    }

    /**
     * Returns a Promise for a string arn indicating the role was enabled for machine identity
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.roleArn - The Amazon Resource Name (ARN) associated with the role
     * @returns {Promise<string>}
     * @example
     * alks.addRoleMachineIdentity({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
     * }).then((roleARN) => {
     *   // arn:aws:iam::123:role/acct-managed/awsRoleName
     * })
     */
    async addRoleMachineIdentity(
      props: AddRoleMachineIdentityProps
    ): Promise<MachineIdentity> {
      const results = await this.internalFetch('roleMachineIdentity', props);
      return pick(results, ['machineIdentityArn']);
    }

    /**
     * Returns a Promise for a string arn indicating the role was disabled for machine identity
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.roleArn - The Amazon Resource Name (ARN) associated with the role
     * @returns {Promise<string>}
     * @example
     * alks.deleteRoleMachineIdentity({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
     * }).then((roleARN) => {
     *   // arn:aws:iam::123:role/acct-managed/awsRoleName
     * })
     */
    async deleteRoleMachineIdentity(
      props: DeleteRoleMachineIdentityProps
    ): Promise<MachineIdentity> {
      const results = await this.internalFetch(
        'roleMachineIdentity',
        props,
        'DELETE'
      );
      return pick(results, ['machineIdentityArn']);
    }

    /**
     * Returns a Promise for a list of users who have access to the given account
     *
     * @param {Object} props  - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.accountId - The accountId used to find which users have access to the account
     * @returns {Promise<alksUser[]>}
     * @example
     * alks.getUserAccess({
     *    baseUrl: 'https://your.alks-host.com',
     *    accessToken: 'abc123',
     *    accountId: '012345678910',
     * }).then((users) => {
     *    // users[i].sAMAccountName, users[i].displayName, users[i].email, users[i].title, users[i].department
     * })
     */
    async getUserAccess(props: GetUserAccessProps): Promise<User[]> {
      const { accountId } = props;
      const results = await this.internalFetch(
        `userAccess/${accountId}`,
        props,
        'GET'
      );
      return results.users;
    }

    /**
     * Returns a Promise for a map of role names to the list of users with that role for a given account
     *
     * @param {Object} props  - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.accountId - The accountId used to find which users have access to the account
     * @returns {Promise<Object>}
     * @example
     * alks.getUserAccess({
     *    baseUrl: 'https://your.alks-host.com',
     *    accessToken: 'abc123',
     *    accountId: '012345678910',
     * }).then((users) => {
     *    // users['Admin'].sAMAccountName, users['Admin'].displayName, users['Admin'].email, users['Admin'].title, users['Admin'].department
     * })
     */
    async getUserAccessByRole(
      props: GetUserAccessByRoleProps
    ): Promise<Record<string, User[]>> {
      const { accountId } = props;
      const results = await this.internalFetch(
        `reports/users-by-role?accountId=${accountId}`,
        props,
        'GET'
      );
      return results.users;
    }

    /**
     * Returns a Promise for a list of roles a user has for a given account
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.accountId - The accountId used to find which users have access to the account
     * @param {string} props.sAMAccountName - The network id of the user to lookup
     * @returns {Promise<string[]>}
     * @example
     * alks.getUserRoleAccess({
     *    baseUrl: 'https://your.alks-host.com',
     *    accessToken: 'abc123',
     *    accountId: '012345678910',
     *    sAMAccountName: 'bob1',
     * }).then((roles) => {
     *    // ['Admin', 'LabAdmin', ...]
     * })
     */
    async getUserRoleAccess(props: GetUserRoleAccessProps): Promise<string[]> {
      const { accountId } = props;
      const results = await this.internalFetch(
        `userAccess/roles/${accountId}`,
        props
      );
      return results.roles;
    }

    /**
     * Returns a Promise containing a list of the account owners for an account
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.accountId - The accountId used to find which users have access to the account
     * @returns {Promise<Object[]>}
     * @example
     * alks.getAccountOwners({
     *    baseUrl: 'https://your.alks-host.com',
     *    accessToken: 'abc123',
     *    accountId: '012345678910',
     * }).then((owners) => {
     *    // owners[0].sAMAccountName, owners[0].displayName, owners[0].email, owners[0].title, owners[0].department
     * })
     */
    async getAccountOwners(props: GetAccountOwnersProps): Promise<User[]> {
      const { accountId } = props;
      const results = await this.internalFetch(
        `userAccess/owners/${accountId}`,
        props,
        'GET'
      );
      return results.accountOwners;
    }

    /**
     * Returns a Promise for the results of creating new IAM user and long-term access keys
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.iamUserName - The name of the IAM user to create
     * @returns {Promise<AccessKeys>}
     * @example
     * alks.createAccessKeys({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   iamUserName: 'iamUserName'
     * }).then((user) => {
     *   // user.iamUserArn, user.accessKey, user.secretKey, user.addedIAMUserToGroup
     * })
     */
    async createAccessKeys(props: CreateAccessKeysProps): Promise<LongTermKey> {
      const results = await this.internalFetch('accessKeys', props);
      return pick(results, [
        'iamUserArn',
        'accessKey',
        'secretKey',
        'addedIAMUserToGroup',
      ]);
    }

    /**
     * Returns a Promise for a boolean "true" indicating the IAM user and long-term access keys were deleted
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.baseUrl - The base URL of the ALKS service
     * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
     * @param {string} props.account - The user's account associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @param {string} props.iamUserName - The name of the IAM user to delete
     * @returns {Promise<boolean>}
     * @example
     * alks.deleteIAMUser({
     *   baseUrl: 'https://your.alks-host.com',
     *   accessToken: 'abc123',
     *   account: 'anAccount',
     *   role: 'IAMAdmin',
     *   iamUserName: 'iamUserName'
     * }).then(() => {
     *   // success!
     * })
     */
    async deleteIAMUser(props: DeleteIAMUserProps): Promise<boolean> {
      await this.internalFetch('IAMUser', props, 'DELETE');
      return true;
    }

    /**
     * Returns the version of the ALKS Rest API
     *
     * @param {Object} props - An object containing the following properties
     * @returns {Promise<Object>}
     * @example
     * alks.version({
     *   ...
     * }).then((data) => {
     *   // data.version
     * })
     */
    async version(props: VersionProps): Promise<{ version: string }> {
      const results = await this.internalFetch('version', props, 'GET');
      return pick(results, ['version']);
    }

    /**
     * Returns information about one of the roles used to generate keys
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.accountId - The 12-digit account ID associated with the custom role
     * @param {string} props.role - The user's role associated with the account
     * @returns {Promise<Object>}
     * @example
     * alks.getLoginRole({
     *   ...
     * }).then((loginRole) => {
     *   // loginRole.account, loginRole.role, loginRole.iamKeyActive, loginRole.maxKeyDuration
     * })
     */
    async getLoginRole(
      props: GetLoginRoleProps
    ): Promise<Omit<Account, 'skypieaAccount'>> {
      const { accountId, role } = props;
      const results = (await this.internalFetch(
        `loginRoles/id/${accountId}/${role}`,
        props,
        'GET'
      )) as { loginRole: Account };
      // TODO we should probably update this function to include skypieaAccount in the result since it's already being fetched - Ben W 5/10/21
      return pick(results.loginRole, [
        'account',
        'role',
        'iamKeyActive',
        'maxKeyDuration',
      ]);
    }

    /**
     * Exchanges a refresh token for an access token
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} props.refreshToken - the refresh token to exchange
     * @returns {Promise<Object>}
     * @example
     * alks.getAccessToken({
     *   ...
     * }).then((data) => {
     *   // data.accessToken, data.expiresIn
     * })
     */
    async getAccessToken(props: GetAccessTokenProps): Promise<AccessToken> {
      const results = await this.internalFetch('accessToken', props);
      return pick(results, ['accessToken', 'expiresIn']);
    }

    /**
     * Returns a list of a user's refresh tokens (Does not return the full token)
     *
     * @param {Object} props - An object containing the following properties
     * @returns {Array<Object>}
     * @example
     * alks.getRefreshTokens({
     *   ...
     * }).then((tokens) => {
     *   // token[i].clientId, token[i].id, token[i].userId, token[i].value
     * })
     */
    async getRefreshTokens(
      props: GetRefreshTokensProps
    ): Promise<RefreshToken[]> {
      const results = (await this.internalFetch(
        'refreshTokens',
        props,
        'GET'
      )) as {
        refreshTokens: RefreshToken[];
      };
      return results.refreshTokens.map((token) =>
        pick(token, ['clientId', 'id', 'userId', 'value'])
      );
    }

    /**
     * Revokes a refresh or access token
     *
     * @param {Object} props - An object containing the following properties
     * @param {string} [props.token] - the access or refresh token to revoke (Required if tokenId not specified)
     * @param {string} [props.tokenId] - the ID of the refresh token to revoke (Required if token not specified)
     * @returns {boolean}
     * @example
     * alks.revoke({
     *   token: '...',
     *   ...
     * }).then((success) => {
     *   // success == true
     * })
     *
     * // or
     *
     * alks.revoke({
     *   tokenId: '...',
     *   ...
     * }).then((success) => {
     *   // success == true
     * })
     */
    async revoke(props: RevokeProps): Promise<boolean> {
      const results = await this.internalFetch('revoke', props);
      return results.statusMessage == 'Success';
    }

    /**
     * Returns cost totals for the specified account for the day, week, month, year, and a breakdown of costs by service for the day and month
     *
     * @param {Object} props - An object containing the following properties
     * @param {String} props.accountId - the 12-digit AWS account ID to get cost data for
     * @returns {Object}
     * @example
     * alks.getCostTotals({
     *   accountId: '012345678910',
     * }).then((costTotals) => {
     *   // costTotals.awsAccountId, costTotals.daily, costTotals.weekly, etc.
     * })
     */
    async getCostTotals(props: GetCostTotalsProps): Promise<CostTotal> {
      const results = (await this.internalFetch(
        `costTotals/${props.accountId}`,
        props,
        'GET'
      )) as {
        costTotals: CostTotal;
      };
      return pick(results.costTotals, [
        'awsAccountId',
        'yyyy',
        'mm',
        'dd',
        'daily',
        'weekly',
        'monthly',
        'yearly',
        'dailyCostsByService',
        'monthlyCostsByService',
      ]);
    }

    private async internalFetch(
      path: string,
      args: Partial<AlksProps> = {},
      method: string = 'POST'
    ): Promise<any> {
      const opts = {
        ...this.config,
        ...args,
      } as AlksProps;

      const payload: any = {
        ...opts,
      };

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'User-Agent': `AlksJS/${packageJson.version}`,
      };

      if (isTokenAuth(opts)) {
        headers['Authorization'] = `Bearer ${opts.accessToken}`;
        delete payload.accessToken;
      } else if (isStsAuth(opts)) {
        headers['ALKS-STS-Access-Key'] = opts.accessKey;
        headers['ALKS-STS-Secret-Key'] = opts.secretKey;
        headers['ALKS-STS-Session-Token'] = opts.sessionToken;
        delete payload.accessKey;
        delete payload.secretKey;
        delete payload.sessionToken;
      } else if (isPasswordAuth(opts)) {
        console.error(
          'The userid and password properties are deprecated and should be replaced with an access token'
        );
        const credentials = base64Encode(`${opts.userid}:${opts.password}`);
        headers['Authorization'] = `Basic ${credentials}`;
        delete payload.userid;
        delete payload.password;
      } else {
        // No auth provided
        // TODO print some kind of error message if no auth was provided - Ben W 5/10/21
      }

      if (opts.userAgent) {
        headers['User-Agent'] += ` ${opts.userAgent}`;
        delete payload.userAgent;
      }

      const response = await (opts._fetch as typeof fetch)(
        `${opts.baseUrl}/${path}`,
        {
          method,
          headers,
          body: method == 'GET' ? undefined : JSON.stringify(payload),
        }
      );

      let json: any;
      try {
        json = await response.json();
      } catch (err) {
        json = {
          errors: [(err as Error).message],
        };
      }

      if (!response.ok) {
        throw new AlksError(response, json);
      }
      return json;
    }
  }

  export class AlksError extends Error {
    public status: number;
    [s: string]: any;

    constructor(response: Response, json: any) {
      const errors = Array.isArray(json?.errors) ? json.errors : [];
      if (response.statusText) {
        errors.unshift(response.statusText);
      }
      const message = errors.join('; ');
      super(message);
      this.status = response.status;
      this.message = message;
      Object.assign(this, json);
    }
  }

  /**
   * Encodes a string to base 64
   *
   * @param str - the string to encode
   * @private
   * @returns the base64 encoded string
   * @example
   * var input = 'password';
   * base64Encode(input);
   */
  function base64Encode(str = ''): string {
    return Buffer.from(str).toString('base64');
  }

  function pick<Obj, Prop extends keyof Obj>(
    obj: Obj,
    props: Prop[]
  ): Pick<Obj, Prop> {
    return props.reduce(
      (acc, prop) => ((acc[prop] = obj[prop]), acc),
      {} as Pick<Obj, Prop>
    );
  }

  const defaultConfig = {
    _fetch: fetch,
  } as AlksProps;
  const defaultAlks = Alks.prototype.create.call({} as Alks, defaultConfig);

  export const create = Alks.prototype.create.bind(defaultAlks);
  export const getAccounts = Alks.prototype.getAccounts.bind(defaultAlks);
  export const getKeys = Alks.prototype.getKeys.bind(defaultAlks);
  export const getIAMKeys = Alks.prototype.getIAMKeys.bind(defaultAlks);
  export const getAllAWSRoleTypes =
    Alks.prototype.getAllAWSRoleTypes.bind(defaultAlks);
  export const getAWSRoleTypes =
    Alks.prototype.getAWSRoleTypes.bind(defaultAlks);
  export const getNonServiceAWSRoleTypes =
    Alks.prototype.getNonServiceAWSRoleTypes.bind(defaultAlks);
  export const createRole = Alks.prototype.createRole.bind(defaultAlks);
  export const createNonServiceRole =
    Alks.prototype.createNonServiceRole.bind(defaultAlks);
  export const awsAccountRoles =
    Alks.prototype.awsAccountRoles.bind(defaultAlks);
  export const listAWSAccountRoles =
    Alks.prototype.listAWSAccountRoles.bind(defaultAlks);
  export const getAccountRole = Alks.prototype.getAccountRole.bind(defaultAlks);
  export const deleteRole = Alks.prototype.deleteRole.bind(defaultAlks);
  export const addRoleMachineIdentity =
    Alks.prototype.addRoleMachineIdentity.bind(defaultAlks);
  export const deleteRoleMachineIdentity =
    Alks.prototype.deleteRoleMachineIdentity.bind(defaultAlks);
  export const getUserAccess = Alks.prototype.getUserAccess.bind(defaultAlks);
  export const getUserAccessByRole =
    Alks.prototype.getUserAccessByRole.bind(defaultAlks);
  export const getUserRoleAccess =
    Alks.prototype.getUserRoleAccess.bind(defaultAlks);
  export const getAccountOwners =
    Alks.prototype.getAccountOwners.bind(defaultAlks);
  export const createAccessKeys =
    Alks.prototype.createAccessKeys.bind(defaultAlks);
  export const deleteIAMUser = Alks.prototype.deleteIAMUser.bind(defaultAlks);
  export const version = Alks.prototype.version.bind(defaultAlks);
  export const getLoginRole = Alks.prototype.getLoginRole.bind(defaultAlks);
  export const getAccessToken = Alks.prototype.getAccessToken.bind(defaultAlks);
  export const getRefreshTokens =
    Alks.prototype.getRefreshTokens.bind(defaultAlks);
  export const revoke = Alks.prototype.revoke.bind(defaultAlks);
  export const getCostTotals = Alks.prototype.getCostTotals.bind(defaultAlks);
}

export = ALKS;
