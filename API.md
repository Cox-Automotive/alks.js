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
<dt><a href="#customRole">customRole</a> : <code>Object</code></dt>
<dd><p>Custom AWS IAM account role</p>
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
    * [.getAWSRoleTypes(props)](#alks+getAWSRoleTypes) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.getNonServiceAWSRoleTypes(props)](#alks+getNonServiceAWSRoleTypes) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.createRole(props)](#alks+createRole) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
    * [.createNonServiceRole(props)](#alks+createNonServiceRole) ⇒ [<code>Promise.&lt;customRole&gt;</code>](#customRole)
    * [.listAWSAccountRoles(props)](#alks+listAWSAccountRoles) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.getAccountRole(props)](#alks+getAccountRole) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deleteRole(props)](#alks+deleteRole) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.createAccessKeys(props)](#alks+createAccessKeys) ⇒ [<code>Promise.&lt;AccessKeys&gt;</code>](#AccessKeys)
    * [.deleteIAMUser(props)](#alks+deleteIAMUser) ⇒ <code>Promise.&lt;boolean&gt;</code>

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
  // accounts[0].account, accounts[0].role, accounts[0].iamKeyActive
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
  // creds.accessKey, creds.secretKey, creds.sessionToken
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
  // creds.accessKey, creds.secretKey, creds.sessionToken
})
```
<a name="alks+getAWSRoleTypes"></a>

### alks.getAWSRoleTypes(props) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
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

### alks.getNonServiceAWSRoleTypes(props) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
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

**Example**  
```js
alks.createRole({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
  account: 'anAccount',
  role: 'IAMAdmin',
  roleName: 'awsRoleName',
  roleType: 'Amazon EC2',
  includeDefaultPolicy: 1
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
  trustType: 'Cross Account'
}).then((role) => {
  // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
})
```
<a name="alks+listAWSAccountRoles"></a>

### alks.listAWSAccountRoles(props) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Returns a Promise for an array of AWS custom AWS IAM account roles

**Kind**: instance method of [<code>alks</code>](#alks)  
**Params**

- props <code>Object</code> - An object containing the following properties
    - .baseUrl <code>String</code> - The base URL of the ALKS service
    - .accessToken <code>String</code> - The OAuth2 access token used to authorize the request
    - .account <code>String</code> - The user's account associated with the custom role
    - .role <code>String</code> - The user's role associated with the account

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
    - .roleName <code>string</code> - The name of the custom AWs IAM role

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
<a name="account"></a>

## account : <code>Object</code>
AWS Account

**Kind**: global typedef  
**Properties**

- account <code>String</code> - The name of the account  
- role <code>String</code> - The user's role in this account  
- iamKeyActive <code>Boolean</code> - Whether credentials with IAM permissions can be provisioned from this account  

<a name="credentials"></a>

## credentials : <code>Object</code>
AWS STS Credentials

**Kind**: global typedef  
**Properties**

- accessKey <code>String</code> - AWS access key  
- secretKey <code>String</code> - AWS secret key  
- sessionToken <code>String</code> - AWS STS session token  

<a name="customRole"></a>

## customRole : <code>Object</code>
Custom AWS IAM account role

**Kind**: global typedef  
**Properties**

- roleArn <code>String</code> - The Amazon Resource Name (ARN) associated with the new role  
- denyArns <code>String</code> - The ARNs for the deny policies associated with this role  
- instanceProfileArn <code>String</code> - The Instance Profile ARN associated with this role  
- addedRoleToInstanceProfile <code>Boolean</code> - Whether this role was added to an Instance Profile  

<a name="AccessKeys"></a>

## AccessKeys : <code>Object</code>
Response containing access keys.

**Kind**: global typedef  
**Properties**

- iamUserArn <code>string</code> - the arn of the IAM user owning the long term access keys  
- accessKey <code>string</code> - the long term access key  
- secretKey <code>string</code> - the secret key for the long term access key  
- addedIAMUserToGroup <code>boolean</code> - whether the user was successfuly added to the deny policy group  

