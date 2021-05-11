import fetch, { Response } from 'node-fetch';
interface BaseConfig {
    baseUrl: string;
    fetch?: typeof fetch;
    userAgent?: string;
}
interface StsAuth {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
}
interface PasswordAuth {
    userid: string;
    password: string;
}
interface TokenAuth {
    accessToken: string;
}
declare type Auth = StsAuth | PasswordAuth | TokenAuth;
export declare type AlksProps = BaseConfig & Auth;
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
 */
export interface Role {
    roleArn: string;
    denyArns: string;
    instanceProfileArn: string;
    addedRoleToInstanceProfile: boolean;
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
export declare enum TrustType {
    CrossAccount = "Cross Account",
    InnerAccount = "Inner Account"
}
export declare enum PseudoBoolean {
    True = 1,
    False = 0
}
export declare type AwsAccountRolesProps = Partial<AlksProps> & {
    account: string;
};
export declare type GetAccountsProps = Partial<AlksProps> & {};
export declare type GetKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    sessionTime: number;
};
export declare type GetIAMKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    sessionTime: number;
};
export declare type GetAWSRoleTypesProps = Partial<AlksProps> & {};
export declare type GetNonServiceAWSRoleTypesProps = Partial<AlksProps> & {};
export declare type CreateRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
    roleType: string;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    templateFields?: Record<string, string>;
};
export declare type CreateNonServiceRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
    roleType: TrustType;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    trustArn: string;
    externalId?: string;
};
export declare type ListAWSAccountRolesProps = Partial<AlksProps> & {
    account: string;
    role: string;
};
export declare type GetAccountRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
};
export declare type DeleteRoleProps = Partial<AlksProps> & {
    account: string;
    role: string;
    roleName: string;
};
export declare type CreateAccessKeysProps = Partial<AlksProps> & {
    account: string;
    role: string;
    iamUserName: string;
};
export declare type DeleteIAMUserProps = Partial<AlksProps> & {
    account: string;
    role: string;
    iamUserName: string;
};
export declare type VersionProps = Partial<AlksProps> & {};
export declare type GetLoginRoleProps = Partial<AlksProps> & {
    accountId: string;
    role: string;
};
export declare type GetAccessTokenProps = Partial<AlksProps> & {
    refreshToken: string;
};
export declare type GetRefreshTokensProps = Partial<AlksProps> & {};
export declare type RevokeByIdProps = Partial<AlksProps> & {
    tokenId: string;
};
export declare type RevokeByValueProps = Partial<AlksProps> & {
    token: string;
};
export declare type RevokeProps = RevokeByIdProps | RevokeByValueProps;
export declare type GetAllAWSRoleTypesProps = Partial<AlksProps> & {
    getDynamicValues?: boolean;
};
export declare type AddRoleMachineIdentityProps = Partial<AlksProps> & {
    roleARN: string;
};
export declare type DeleteRoleMachineIdentityProps = Partial<AlksProps> & {
    roleARN: string;
};
export declare type GetUserAccessProps = Partial<AlksProps> & {
    accountId: string;
};
export declare type GetUserRoleAccessProps = Partial<AlksProps> & {
    accountId: string;
    sAMAccountName: string;
};
export declare type GetUserAccessByRoleProps = Partial<AlksProps> & {
    accountId: string;
};
export declare type GetAccountOwnersProps = Partial<AlksProps> & {
    accountId: string;
};
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
export declare function getAccounts(props: GetAccountsProps): Promise<Account[]>;
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
export declare function getKeys(props: GetKeysProps): Promise<Key>;
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
export declare function getIAMKeys(props: GetIAMKeysProps): Promise<Key>;
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
export declare function getAllAWSRoleTypes(props: GetAllAWSRoleTypesProps): Promise<AwsRoleType[]>;
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
export declare function getAWSRoleTypes(props: GetAWSRoleTypesProps): Promise<string[]>;
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
export declare function getNonServiceAWSRoleTypes(props: GetNonServiceAWSRoleTypesProps): Promise<string[]>;
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
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
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
 * }).then((role) => {
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
 * })
 */
export declare function createRole(props: CreateRoleProps): Promise<Role>;
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
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
 * })
 */
export declare function createNonServiceRole(props: CreateNonServiceRoleProps): Promise<Role>;
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
export declare function awsAccountRoles(props: AwsAccountRolesProps): Promise<AwsAccountRole[]>;
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
export declare function listAWSAccountRoles(props: ListAWSAccountRolesProps): Promise<string[]>;
/**
 * Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role
 *
 * @param {Object} props - An object containing the following properties
 * @param {string} props.baseUrl - The base URL of the ALKS service
 * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
 * @param {string} props.account - The user's account associated with the custom role
 * @param {string} props.role - The user's role associated with the account
 * @param {string} props.roleName - The name of the custom AWS IAM role
 * @returns {Promise<string>}
 * @example
 * alks.getAccountRole({
 *   baseUrl: 'https://your.alks-host.com',
 *   accessToken: 'abc123',
 *   account: 'anAccount',
 *   role: 'IAMAdmin',
 *   roleName: 'awsRoleName'
 * }).then((roleARN) => {
 *   // arn:aws:iam::123:role/acct-managed/awsRoleName
 * })
 */
export declare function getAccountRole(props: GetAccountRoleProps): Promise<string>;
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
export declare function deleteRole(props: DeleteRoleProps): Promise<boolean>;
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
export declare function addRoleMachineIdentity(props: AddRoleMachineIdentityProps): Promise<MachineIdentity>;
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
export declare function deleteRoleMachineIdentity(props: DeleteRoleMachineIdentityProps): Promise<MachineIdentity>;
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
export declare function getUserAccess(props: GetUserAccessProps): Promise<User[]>;
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
export declare function getUserAccessByRole(props: GetUserAccessByRoleProps): Promise<Record<string, User[]>>;
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
export declare function getUserRoleAccess(props: GetUserRoleAccessProps): Promise<string[]>;
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
export declare function getAccountOwners(props: GetAccountOwnersProps): Promise<User[]>;
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
export declare function createAccessKeys(props: CreateAccessKeysProps): Promise<LongTermKey>;
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
export declare function deleteIAMUser(props: DeleteIAMUserProps): Promise<boolean>;
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
export declare function version(props: VersionProps): Promise<{
    version: string;
}>;
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
export declare function getLoginRole(props: GetLoginRoleProps): Promise<Omit<Account, 'skypieaAccount'>>;
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
export declare function getAccessToken(props: GetAccessTokenProps): Promise<AccessToken>;
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
export declare function getRefreshTokens(props: GetRefreshTokensProps): Promise<RefreshToken[]>;
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
export declare function revoke(props: RevokeProps): Promise<boolean>;
export declare function internalFetch(path: string, args?: Partial<AlksProps>, method?: string): Promise<any>;
export declare class AlksError extends Error {
    status: number;
    [s: string]: any;
    constructor(response: Response, json: any);
}
/**
 * ALKS JavaScript API
 */
export declare class Alks {
    config: AlksProps;
    constructor();
    create: typeof create;
    getAccounts: typeof getAccounts;
    getKeys: typeof getKeys;
    getIAMKeys: typeof getIAMKeys;
    getAllAWSRoleTypes: typeof getAllAWSRoleTypes;
    getAWSRoleTypes: typeof getAWSRoleTypes;
    getNonServiceAWSRoleTypes: typeof getNonServiceAWSRoleTypes;
    createRole: typeof createRole;
    createNonServiceRole: typeof createNonServiceRole;
    awsAccountRoles: typeof awsAccountRoles;
    listAWSAccountRoles: typeof listAWSAccountRoles;
    getAccountRole: typeof getAccountRole;
    deleteRole: typeof deleteRole;
    addRoleMachineIdentity: typeof addRoleMachineIdentity;
    deleteRoleMachineIdentity: typeof deleteRoleMachineIdentity;
    getUserAccess: typeof getUserAccess;
    getUserAccessByRole: typeof getUserAccessByRole;
    getUserRoleAccess: typeof getUserRoleAccess;
    getAccountOwners: typeof getAccountOwners;
    createAccessKeys: typeof createAccessKeys;
    deleteIAMUser: typeof deleteIAMUser;
    version: typeof version;
    getLoginRole: typeof getLoginRole;
    getAccessToken: typeof getAccessToken;
    getRefreshTokens: typeof getRefreshTokens;
    revoke: typeof revoke;
    internalFetch: typeof internalFetch;
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
export declare function create(props: AlksProps): Alks;
declare const _default: Alks;
export default _default;
