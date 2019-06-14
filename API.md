## Classes

<dl>
<dt><a href="#alks">alks</a></dt>
<dd><p>ALKS JavaScript API</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#account">account</a> : <code>Object</code></dt>
<dd><p>AWS Account</p>
</dd>
<dt><a href="#credentials">credentials</a> : <code>Object</code></dt>
<dd><p>AWS STS Credentials</p>
</dd>
<dt><a href="#awsRoleType">awsRoleType</a> : <code>Object</code></dt>
<dd><p>AWS IAM role type</p>
</dd>
<dt><a href="#customRole">customRole</a> : <code>Object</code></dt>
<dd><p>Custom AWS IAM account role</p>
</dd>
<dt><a href="#awsAccountRole">awsAccountRole</a> : <code>Object</code></dt>
<dd><p>AWS account role type</p>
</dd>
<dt><a href="#AccessKeys">AccessKeys</a> : <code>Object</code></dt>
<dd><p>Response containing access keys.</p>
</dd>
</dl>

<a name="alks"></a>

## alks
ALKS JavaScript API

**Kind**: global class  

* [alks](#alks)
    * [.create(props)](#alks+create) ⇒ [<code>alks</code>](#alks)
    * [.getAccounts(props)](#alks+getAccounts) ⇒ <code>Promise.&lt;Array.&lt;account&gt;&gt;</code>
    * [.getKeys(props)](#alks+getKeys) ⇒ [<code>Promise.&lt;credentials&gt;</code>](#credentials)
    * [.getIAMKeys(props)](#alks+getIAMKeys) ⇒ [<code>Promise.&lt;credentials&gt;</code>](#credentials)
    * [.getAllAWSRoleTypes(props)](#alks+getAllAWSRoleTypes) ⇒ <code>Promise.&lt;Array.&lt;awsRoleType&gt;&gt;</code>
    * ~~[.getAWSRoleTypes(props)](#alks+getAWSRoleTypes) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
    * ~~[.getNonServiceAWSRoleTypes(props)](#alks+getNonServiceAWSRoleTypes) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
    * [.createRole(props)](#alks+createRole) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
    * [.createNonServiceRole(props)](#alks+createNonServiceRole) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
    * [.awsAccountRoles(props)](#alks+awsAccountRoles) ⇒ <code>Promise.&lt;Array.&lt;awsAccountRole&gt;&gt;</code>
    * ~~[.listAWSAccountRoles(props)](#alks+listAWSAccountRoles) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
    * [.getAccountRole(props)](#alks+getAccountRole) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deleteRole(props)](#alks+deleteRole) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.createAccessKeys(props)](#alks+createAccessKeys) ⇒ [<code>Promise.&lt;AccessKeys&gt;</code>](#AccessKeys)
    * [.deleteIAMUser(props)](#alks+deleteIAMUser) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.version(props)](#alks+version) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getLoginRole(props)](#alks+getLoginRole) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getAccessToken(props)](#alks+getAccessToken) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getRefreshTokens(props)](#alks+getRefreshTokens) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.revoke(props)](#alks+revoke) ⇒ <code>boolean</code>

<a name="alks+create"></a>

### alks.create(props) ⇒ [<code>alks</code>](#alks)
Returns a new instance of alks with pre-defined properties (which don't need to be supplied to every method).

Any of the properties required by other methods can be specified here.

Properties present on the current object are carried through to the newly created one.

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing settings for the new ALKS object

**Example**  
```js
var myAlks = alks.create({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
})

myAlks.getKeys({
  account: 'anAccount',
  role: 'PowerUser',
  sessionTime: 2
}).then((creds) => {
  // creds.accessKey, creds.secretKey, creds.sessionToken
})
```
<a name="alks+getAccounts"></a>

### alks.getAccounts(props) ⇒ <code>Promise.&lt;Array.&lt;account&gt;&gt;</code>
Returns a Promise for an array of AWS accounts (and roles) accessible by the user

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request

**Example**  
```js
alks.getAccounts({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
}).then((accounts) => {
  // accounts[0].account, accounts[0].role, accounts[0].iamKeyActive, accounts[0].maxKeyDuration
})
```
<a name="alks+getKeys"></a>

### alks.getKeys(props) ⇒ [<code>Promise.&lt;credentials&gt;</code>](#credentials)
Returns a Promise for AWS STS credentials from ALKS.

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The AWS account to use when provisioning the credentials
    - .role <code>string</code> - The ALKS role to use when provisioning the credentials
    - .sessionTime <code>string</code> - The session length for the credentials

**Example**  
```js
alks.getKeys({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'PowerUser',
  sessionTime: 2
}).then((creds) => {
  // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
})
```
<a name="alks+getIAMKeys"></a>

### alks.getIAMKeys(props) ⇒ [<code>Promise.&lt;credentials&gt;</code>](#credentials)
Returns a Promise for AWS STS credentials with IAM permissions from ALKS.

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The AWS account to use when provisioning the credentials
    - .role <code>string</code> - The ALKS role to use when provisioning the credentials
    - .sessionTime <code>number</code> - The session length for the credentials

**Example**  
```js
alks.getIAMKeys({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  sessionTime: 1
}).then((creds) => {
  // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
})
```
<a name="alks+getAllAWSRoleTypes"></a>

### alks.getAllAWSRoleTypes(props) ⇒ <code>Promise.&lt;Array.&lt;awsRoleType&gt;&gt;</code>
Returns a Promise for an array of all available role types (AWS IAM role types, custom role types) and their details

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request

**Example**  
```js
alks.getAllAWSRoleTypes({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
}).then((roleTypes) {
  // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship
})
```
<a name="alks+getAWSRoleTypes"></a>

### ~~alks.getAWSRoleTypes(props) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
***Deprecated***

Returns a Promise for an array of available AWS IAM role types

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request

**Example**  
```js
alks.getAWSRoleTypes({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
}).then((roleTypes) {
  // ['AWS Lambda', 'Amazon EC2', ... ]
})
```
<a name="alks+getNonServiceAWSRoleTypes"></a>

### ~~alks.getNonServiceAWSRoleTypes(props) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
***Deprecated***

Returns a Promise for an array of available custom role types

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request

**Example**  
```js
alks.getNonServiceAWSRoleTypes({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
}).then((roleTypes) => {
  // ['AWS Lambda', 'Amazon EC2', ...]
})
```
<a name="alks+createRole"></a>

### alks.createRole(props) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
Returns a Promise for the results of creating a new custom AWS IAM account role

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .roleName <code>string</code> - The name of the custom AWS IAM role to create
    - .roleType <code>string</code> - The type of AWS role to use when creating the new role
    - .includeDefaultPolicy <code>number</code> - Whether to include the default policy in the new role (1 = yes, 0 = no)
    - .enableAlksAccess <code>boolean</code> - Whether the role has a machine identity

**Example**  
```js
alks.createRole({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  roleName: 'awsRoleName',
  roleType: 'Amazon EC2',
  includeDefaultPolicy: 1,
  enableAlksAccess: true
}).then((role) => {
  // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
})
```
<a name="alks+createNonServiceRole"></a>

### alks.createNonServiceRole(props) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
Returns a Promise for the results of creating a new custom AWS IAM trust role

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .roleName <code>string</code> - The name of the custom AWS IAM role to create
    - .roleType <code>string</code> - The type of AWS role to use when creating the new role
    - .includeDefaultPolicy <code>number</code> - Whether to include the default policy in the new role (1 = yes, 0 = no)
    - .trustArn <code>string</code> - The Arn of the existing role to trust
    - .trustType <code>string</code> - Whether the trust is 'Cross Account' or 'Inner Account'
    - .enableAlksAccess <code>boolean</code> - Whether the role has a machine identity

**Example**  
```js
alks.createNonServiceRole({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  roleName: 'awsRoleName',
  roleType: 'Amazon EC2',
  includeDefaultPolicy: 1,
  trustArn: 'anExistingRoleArn',
  trustType: 'Cross Account',
  enableAlksAccess: true
}).then((role) => {
  // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
})
```
<a name="alks+awsAccountRoles"></a>

### alks.awsAccountRoles(props) ⇒ <code>Promise.&lt;Array.&lt;awsAccountRole&gt;&gt;</code>
Returns a Promise for an array of AWS account roles

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The account number to get AWS roles for

**Example**  
```js
alks.awsAccountRoles({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: '1234567890',
}).then((roles) => {
  // roles[i].roleArn, roles[i].isMachineIdentity, roles[i].assumeRolePolicyDocument
})
```
<a name="alks+listAWSAccountRoles"></a>

### ~~alks.listAWSAccountRoles(props) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>~~
***Deprecated***

Returns a Promise for an array of AWS custom AWS IAM account roles

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account

**Example**  
```js
alks.listAWSAccountRoles({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
}).then((roleNames) => {
  // ['customRole1', 'customRole2', ...]
})
```
<a name="alks+getAccountRole"></a>

### alks.getAccountRole(props) ⇒ <code>Promise.&lt;string&gt;</code>
Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .roleName <code>string</code> - The name of the custom AWS IAM role

**Example**  
```js
alks.getAccountRole({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  roleName: 'awsRoleName'
}).then((roleARN) => {
  // arn:aws:iam::123:role/acct-managed/awsRoleName
})
```
<a name="alks+deleteRole"></a>

### alks.deleteRole(props) ⇒ <code>Promise.&lt;boolean&gt;</code>
Returns a Promise for a boolean "true" indicating the role was deleted

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .roleName <code>string</code> - The name of the custom AWS IAM role

**Example**  
```js
alks.deleteRole({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  roleName: 'awsRoleName'
}).then(() => {
  // success!
})
```
<a name="alks+createAccessKeys"></a>

### alks.createAccessKeys(props) ⇒ [<code>Promise.&lt;AccessKeys&gt;</code>](#AccessKeys)
Returns a Promise for the results of creating new IAM user and long-term access keys

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .iamUserName <code>string</code> - The name of the IAM user to create

**Example**  
```js
alks.createAccessKeys({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  iamUserName: 'iamUserName'
}).then((user) => {
  // user.iamUserArn, user.accessKey, user.secretKey, user.addedIAMUserToGroup
})
```
<a name="alks+deleteIAMUser"></a>

### alks.deleteIAMUser(props) ⇒ <code>Promise.&lt;boolean&gt;</code>
Returns a Promise for a boolean "true" indicating the IAM user and long-term access keys were deleted

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>string</code> - The base URL of the ALKS service
    - .accessToken <code>string</code> - The OAuth2 access token used to authorize the request
    - .account <code>string</code> - The user's account associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .iamUserName <code>string</code> - The name of the IAM user to delete

**Example**  
```js
alks.deleteIAMUser({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  iamUserName: 'iamUserName'
}).then(() => {
  // success!
})
```
<a name="alks+version"></a>

### alks.version(props) ⇒ <code>Promise.&lt;Object&gt;</code>
Returns the version of the ALKS Rest API

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties

**Example**  
```js
alks.version({
  ...
}).then((data) => {
  // data.version
})
```
<a name="alks+getLoginRole"></a>

### alks.getLoginRole(props) ⇒ <code>Promise.&lt;Object&gt;</code>
Returns information about one of the roles used to generate keys

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .accountId <code>string</code> - The 12-digit account ID associated with the custom role
    - .role <code>string</code> - The user's role associated with the account
    - .maxKeyDuration <code>number</code> - The maximum key duration for this account

**Example**  
```js
alks.getLoginRole({
  ...
}).then((loginRole) => {
  // loginRole.account, loginRole.role, loginRole.iamKeyActive, loginRole.maxKeyDuration
})
```
<a name="alks+getAccessToken"></a>

### alks.getAccessToken(props) ⇒ <code>Promise.&lt;Object&gt;</code>
Exchanges a refresh token for an access token

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .refreshToken <code>string</code> - the refresh token to exchange

**Example**  
```js
alks.getAccessToken({
  ...
}).then((data) => {
  // data.accessToken, data.expiresIn
})
```
<a name="alks+getRefreshTokens"></a>

### alks.getRefreshTokens(props) ⇒ <code>Array.&lt;Object&gt;</code>
Returns a list of a user's refresh tokens (Does not return the full token)

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties

**Example**  
```js
alks.getRefreshTokens({
  ...
}).then((tokens) => {
  // token[i].clientId, token[i].id, token[i].userId, token[i].value
})
```
<a name="alks+revoke"></a>

### alks.revoke(props) ⇒ <code>boolean</code>
Revokes a refresh or access token

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - [.token] <code>string</code> - the access or refresh token to revoke (Required if tokenId not specified)
    - [.tokenId] <code>string</code> - the ID of the refresh token to revoke (Required if token not specified)

**Example**  
```js
alks.revoke({
  token: '...',
  ...
}).then((success) => {
  // success == true
})

// or

alks.revoke({
  tokenId: '...',
  ...
}).then((success) => {
  // success == true
})
```
<a name="account"></a>

## account : <code>Object</code>
AWS Account

**Kind**: global typedef  
**Properties**

- account <code>string</code> - The name of the account  
- role <code>string</code> - The user's role in this account  
- iamKeyActive <code>boolean</code> - Whether credentials with IAM permissions can be provisioned from this account  
- maxKeyDuration <code>number</code> - The maximum key duration for this account  

<a name="credentials"></a>

## credentials : <code>Object</code>
AWS STS Credentials

**Kind**: global typedef  
**Properties**

- accessKey <code>string</code> - AWS access key  
- secretKey <code>string</code> - AWS secret key  
- sessionToken <code>string</code> - AWS STS session token  

<a name="awsRoleType"></a>

## awsRoleType : <code>Object</code>
AWS IAM role type

**Kind**: global typedef  
**Properties**

- roleTypeName <code>string</code> - The AWS IAM role type name  
- defaultArns <code>Array.&lt;string&gt;</code> - The default ARNs (default policies) associated with this role  
- trustRelationship <code>Object</code> - The AWS trust relationship document associated with this role  
- instanceProfile <code>boolean</code> - Whether this role is an instance profile

<a name="customRole"></a>

## customRole : <code>Object</code>
Custom AWS IAM account role

**Kind**: global typedef  
**Properties**

- roleArn <code>string</code> - The Amazon Resource Name (ARN) associated with the new role  
- denyArns <code>string</code> - The ARNs for the deny policies associated with this role  
- instanceProfileArn <code>string</code> - The Instance Profile ARN associated with this role  
- addedRoleToInstanceProfile <code>boolean</code> - Whether this role was added to an Instance Profile  

<a name="awsAccountRole"></a>

## awsAccountRole : <code>Object</code>
AWS account role type

**Kind**: global typedef  
**Properties**

- roleArn <code>string</code> - The AWS Role ARN  
- isMachineIdentity <code>boolean</code> - true|false value of if this role is a machine identity  
- assumeRolePolicyDocument <code>Object</code> - The AWS assume role policy document associated with this role  

<a name="AccessKeys"></a>

## AccessKeys : <code>Object</code>
Response containing access keys.

**Kind**: global typedef  
**Properties**

- iamUserArn <code>string</code> - the arn of the IAM user owning the long term access keys  
- accessKey <code>string</code> - the long term access key  
- secretKey <code>string</code> - the secret key for the long term access key  
- addedIAMUserToGroup <code>boolean</code> - whether the user was successfuly added to the deny policy group  

