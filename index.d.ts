declare namespace ALKS {
  export interface Account {
    account: string;
    role: string;
    iamKeyActive: boolean;
    maxKeyDuration: number;
    skypieaAccount: SkypieaAccount | null;
  }

  export interface SkypieaAccount {
    label: string;
    accountOwners: AccountUserDetails[];
    cloudsploitTrend: CloudsploitReport[];
  }

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

  export interface AccountUserDetails {
    samAccountName: string;
    email: string;
    href: string;
  }

  export interface Key {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
    consoleURL: string;
  }

  export interface LongTermKey {
    iamUserArn: string;
    accessKey: string;
    secretKey: string;
    addedIAMUserToGroup: boolean;
  }

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

  export interface AwsAccountRole {
    roleArn: string;
    isMachineIdentity: boolean;
    assumeRolePolicyDocument: object;
  }

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

  export interface User {
    sAMAccountName: string;
    displayName: string;
    email: string;
    title: string;
    department: string;
  }

  export enum TrustType {
    CrossAccount = 'Cross Account',
    InnerAccount = 'Inner Account',
  }

  export enum PseudoBoolean {
    True = 1,
    False = 0,
  }

  export interface AlksProps {
    baseUrl: string;
    accessToken: string;
  }

  export interface AwsAccountRolesProps extends Partial<AlksProps> {
    account: string;
  }

  export interface GetAccountsProps extends Partial<AlksProps> {}

  export interface GetKeysProps extends Partial<AlksProps> {
    account: string;
    role: string;
    sessionTime: number;
  }

  export interface GetIAMKeysProps extends Partial<AlksProps> {
    account: string;
    role: string;
    sessionTime: number;
  }

  export interface GetAWSRoleTypesProps extends Partial<AlksProps> {}

  export interface GetNonServiceAWSRoleTypesProps extends Partial<AlksProps> {}

  export interface CreateRoleProps extends Partial<AlksProps> {
    account: string;
    role: string;
    roleName: string;
    roleType: string;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    templateFields?: Record<string, string>;
  }

  export interface CreateNonServiceRoleProps extends Partial<AlksProps> {
    account: string;
    role: string;
    roleName: string;
    roleType: TrustType;
    enableAlksAccess: boolean;
    includeDefaultPolicy: PseudoBoolean;
    trustArn: string;
    externalId?: string;
  }

  export interface ListAWSAccountRolesProps extends Partial<AlksProps> {
    account: string;
    role: string;
  }

  export interface GetAccountRoleProps extends Partial<AlksProps> {
    account: string;
    role: string;
    roleName: string;
  }

  export interface DeleteRoleProps extends Partial<AlksProps> {
    account: string;
    role: string;
    roleName: string;
  }

  export interface CreateAccessKeysProps extends Partial<AlksProps> {
    account: string;
    role: string;
    iamUserName: string;
  }

  export interface DeleteIAMUserProps extends Partial<AlksProps> {
    account: string;
    role: string;
    iamUserName: string;
  }

  export interface VersionProps extends Partial<AlksProps> {}

  export interface GetLoginRoleProps {
    accountId: string;
    role: string;
    maxKeyDuration: number;
  }

  export interface GetAccessTokenProps extends Partial<AlksProps> {
    refreshToken: string;
  }

  export interface GetRefreshTokensProps extends Partial<AlksProps> {}

  export interface RevokeByIdProps extends Partial<AlksProps> {
    tokenId: string;
  }

  export interface RevokeByValueProps extends Partial<AlksProps> {
    token: string;
  }

  export type RevokeProps = RevokeByIdProps | RevokeByValueProps;

  export interface GetAllAWSRoleTypesProps extends Partial<AlksProps> {
    getDynamicValues?: boolean;
  }

  export interface AddRoleMachineIdentityProps extends Partial<AlksProps> {
    roleARN: string;
  }

  export interface DeleteRoleMachineIdentityProps extends Partial<AlksProps> {
    roleARN: string;
  }

  export interface GetUserAccessProps extends Partial<AlksProps> {
    accountId: string;
  }

  export interface GetUserRoleAccessProps extends Partial<AlksProps> {
    accountId: string;
    sAMAccountName: string;
  }

  export interface GetUserAccessByRoleProps extends Partial<AlksProps> {
    accountId: string;
  }

  export interface GetAccountOwnersProps extends Partial<AlksProps> {
    accountId: string;
  }

  export class Alks {
    public create: (props: AlksProps) => Alks;
    public getAccounts: (props?: GetAccountsProps) => Promise<Account[]>;
    public getKeys: (props: GetKeysProps) => Promise<Key>;
    public getIAMKeys: (props: GetIAMKeysProps) => Promise<Key>;
    public getAWSRoleTypes: (props?: GetAWSRoleTypesProps) => Promise<string[]>;
    public getNonServiceAWSRoleTypes: (
      props?: GetNonServiceAWSRoleTypesProps
    ) => Promise<string[]>;
    public createRole: (props: CreateRoleProps) => Promise<Role>;
    public createNonServiceRole: (
      props: CreateNonServiceRoleProps
    ) => Promise<Role>;
    public listAWSAccountRoles: (
      props: ListAWSAccountRolesProps
    ) => Promise<string[]>;
    public getAccountRole: (props: GetAccountRoleProps) => Promise<string>;
    public deleteRole: (props: DeleteRoleProps) => Promise<boolean>;
    public createAccessKeys: (
      props: CreateAccessKeysProps
    ) => Promise<LongTermKey>;
    public deleteIAMUser: (props: DeleteIAMUserProps) => Promise<boolean>;
    public version: (props?: VersionProps) => Promise<{ version: string }>;
    public getLoginRole: (props: GetLoginRoleProps) => Promise<Account>;
    public getAccessToken: (props: GetAccessTokenProps) => Promise<AccessToken>;
    public getRefreshTokens: (
      props?: GetRefreshTokensProps
    ) => Promise<RefreshToken[]>;
    public revoke: (props: RevokeProps) => Promise<boolean>;
    public awsAccountRoles: (
      props: AwsAccountRolesProps
    ) => Promise<AwsAccountRole[]>;
    public getAllAWSRoleTypes: (
      props: GetAllAWSRoleTypesProps
    ) => Promise<AwsRoleType[]>;
    public addRoleMachineIdentity: (props: AddRoleMachineIdentityProps) => Promise<MachineIdentity>;
    public deleteRoleMachineIdentity: (props: DeleteRoleMachineIdentityProps) => Promise<MachineIdentity>;
    public getUserAccess: (props: GetUserAccessProps) => Promise<User[]>;
    public getUserRoleAccess: (props: GetUserRoleAccessProps) => Promise<string[]>;
    public getUserAccessByRole: (props: GetUserAccessByRoleProps) => Promise<Record<string, User[]>>;
    public getAccountOwners: (props: GetAccountOwnersProps) => Promise<User[]>;
  }

  export function create(props: AlksProps): Alks;
  export function getAccounts(props?: GetAccountsProps): Promise<Account[]>;
  export function getKeys(props: GetKeysProps): Promise<Key>;
  export function getIAMKeys(props: GetIAMKeysProps): Promise<Key>;
  export function getAWSRoleTypes(
    props?: GetAWSRoleTypesProps
  ): Promise<string[]>;
  export function getNonServiceAWSRoleTypes(
    props?: GetNonServiceAWSRoleTypesProps
  ): Promise<string[]>;
  export function createRole(props: CreateRoleProps): Promise<Role>;
  export function createNonServiceRole(
    props: CreateNonServiceRoleProps
  ): Promise<Role>;
  export function listAWSAccountRoles(
    props: ListAWSAccountRolesProps
  ): Promise<string[]>;
  export function getAccountRole(props: GetAccountRoleProps): Promise<string>;
  export function deleteRole(props: DeleteRoleProps): Promise<boolean>;
  export function createAccessKeys(
    props: CreateAccessKeysProps
  ): Promise<LongTermKey>;
  export function deleteIAMUser(props: DeleteIAMUserProps): Promise<boolean>;
  export function version(props?: VersionProps): Promise<{ version: string }>;
  export function getLoginRole(props: GetLoginRoleProps): Promise<Account>;
  export function getAccessToken(
    props: GetAccessTokenProps
  ): Promise<AccessToken>;
  export function getRefreshTokens(
    props?: GetRefreshTokensProps
  ): Promise<RefreshToken[]>;
  export function revoke(props: RevokeProps): Promise<boolean>;
  export function awsAccountRoles(
    props: AwsAccountRolesProps
  ): Promise<AwsAccountRole[]>;
  export function getAllAWSRoleTypes(
    props: GetAllAWSRoleTypesProps
  ): Promise<AwsRoleType[]>;
  export function addRoleMachineIdentity(props: AddRoleMachineIdentityProps): Promise<MachineIdentity>;
  export function deleteRole(props: DeleteRoleMachineIdentityProps) : Promise<MachineIdentity>;
  export function getUserAccess(props: GetUserAccessProps) : Promise<User[]>;
  export function getUserRoleAccess(props: GetUserRoleAccessProps) : Promise<string[]>;
  export function getUserAccessByRole(props: GetUserAccessByRoleProps) : Promise<Record<string, User[]>>;
  export function getAccountOwners(props: GetAccountOwnersProps) : Promise<User[]>;
}

export = ALKS;
