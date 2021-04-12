(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.alks = factory());
}(this, function () { 'use strict';

  var version = "1.11.1";

  var fetch = window.fetch.bind(window);

  /**
   * ALKS JavaScript API
   *
   */
  var alks = function alks(props, existing) {
    if ( existing === void 0 ) existing = {};

    this.defaults = Object.assign({}, existing, { _fetch: fetch }, props);
  };

  /**
   * Encodes a string to base 64
   *
   * @param {string} str - the string to encode
   * @private
   * @returns {string} the base64 encoded string
   * @example
   * var input = 'password'
   * alks.base64Encode(input)
   */
  alks.prototype._base64Encode = function _base64Encode (str) {
      if ( str === void 0 ) str = '';

    {
      return btoa(str)
    }
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * })
   *
   * myAlks.getKeys({
   * account: 'anAccount',
   * role: 'PowerUser',
   * sessionTime: 2
   * }).then((creds) => {
   * // creds.accessKey, creds.secretKey, creds.sessionToken
   * })
   */
  alks.prototype.create = function create (props) {
    return(new alks(props, this.defaults))
  };

  /**
   * Skypiea Account
   * @typedef {Object} skypieaAccount
   * @type {string} label - the friendly name of the account
   * @type {AccountUserDetails[]} accountOwners - the samAccountNames of the account owners
   * @type {CloudsploitReport[]} cloudsploitTrend - the cloudsploit trends
   */

  /**
   * CloudsploitReport
   * @typedef {Object} cloudsploitTrend
   * @param {number} year - the year of the scan
   * @param {number} month - the month of the scan
   * @param {number} day - the day of the scan
   * @param {string} href - the link to the skypiea resource
   * @param {string} awsAccountId - the AWS account Id
   * @param {number} scanId - the id of the scan
   * @param {string} scanDate - the date of the scan
   * @param {number} newRisks - the amount of new risks
   * @param {number} passing - the amount of pass
   * @param {number} warning - the amount of warnings
   * @param {number} failing - the amount of fails
   * @param {number} unknown - the amount of unknowns
   */

  /**
   * AccountUserDetails
   * @typedef {Object} accountOwners
   * @param {string} samAccountName - the samAccountName of the user
   * @param {string} email - the email of the user
   * @param {string} href - the href self link
   */

  /**
   * AWS Account
   * @typedef {Object} account
   * @property {string} account - The name of the account
   * @property {string} role - The user's role in this account
   * @property {boolean} iamKeyActive - Whether credentials with IAM permissions can be provisioned from this account
   * @property {number} maxKeyDuration - The maximum key duration for this account
   * @property {skypieaAccount} skypieaAccount - extra information about the account from Skypiea
   */

  /**
   * Returns a Promise for an array of AWS accounts (and roles) accessible by the user
   *
   * @param {Object} props - An object containing the following properties
   * @param {string} props.baseUrl - The base URL of the ALKS service
   * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
   * @returns {Promise<account[]>}
   * @example
   * alks.getAccounts({
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * }).then((accounts) => {
   * // accounts[0].account, accounts[0].role, accounts[0].iamKeyActive, accounts[0].maxKeyDuration, accounts[0].skypieaAccount
   * })
   */
  alks.prototype.getAccounts = function getAccounts (props) {
    return(this._doFetch('getAccounts', props).then(function (results) { return Object.keys(results.accountListRole).map(function (key) { return ({
        account: key,
        role: results.accountListRole[key][0].role,
        iamKeyActive: results.accountListRole[key][0].iamKeyActive,
        maxKeyDuration: results.accountListRole[key][0].maxKeyDuration,
        skypieaAccount: results.accountListRole[key][0].skypieaAccount
      }); }); }
    ))
  };

  /**
   * AWS STS Credentials
   * @typedef {Object} credentials
   * @property {string} accessKey - AWS access key
   * @property {string} secretKey - AWS secret key
   * @property {string} sessionToken - AWS STS session token
   */

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'PowerUser',
   * sessionTime: 2
   * }).then((creds) => {
   * // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
   * })
   */
  alks.prototype.getKeys = function getKeys (props) {
    return(this._doFetch('getKeys', props).then(function (results) { return pick(results, ['accessKey', 'secretKey', 'sessionToken', 'consoleURL']); }
    ))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * sessionTime: 1
   * }).then((creds) => {
   * // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
   * })
   */
  alks.prototype.getIAMKeys = function getIAMKeys (props) {
    return(this._doFetch('getIAMKeys', props).then(function (results) { return pick(results, ['accessKey', 'secretKey', 'sessionToken', 'consoleURL']); }
    ))
  };

  /**
  * AWS IAM role type
  * @typedef {Object} awsRoleType
  * @property {string} roleTypeName - The AWS IAM role type name
  * @property {Array<string>} defaultArns - The default ARNs (default policies) associated with this role
  * @property {Object} trustRelationship - The AWS trust relationship document associated with this role
  * @property {boolean} instanceProfile - Whether this role is an instance profile
  */

  /**
   * Returns a Promise for an array of all available role types (AWS IAM role types, custom role types) and their details
   *
   * @param {Object} props - An object containing the following properties
   * @param {string} props.baseUrl - The base URL of the ALKS service
   * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
   * @returns {Promise<Array<awsRoleType>>}
   * @example
   * alks.getAllAWSRoleTypes({
    * baseUrl: 'https://your.alks-host.com',
    * accessToken: 'abc123',
    * }).then((roleTypes) {
    * // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship
    * })
    */
  alks.prototype.getAllAWSRoleTypes = function getAllAWSRoleTypes (props) {
    return(this._doFetch('allAwsRoleTypes', props, 'GET').then(function (results) { return results.roleTypes; }))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * }).then((roleTypes) {
   * // ['AWS Lambda', 'Amazon EC2', ... ]
   * })
   */
  alks.prototype.getAWSRoleTypes = function getAWSRoleTypes (props) {
    return(this._doFetch('getAWSRoleTypes', props).then(function (results) { return JSON.parse(results.roleTypes); }
    ))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * }).then((roleTypes) => {
   * // ['AWS Lambda', 'Amazon EC2', ...]
   * })
   */
  alks.prototype.getNonServiceAWSRoleTypes = function getNonServiceAWSRoleTypes (props) {
    return(this._doFetch('getNonServiceAWSRoleTypes', props).then(function (results) { return JSON.parse(results.roleTypes); }
    ))
  };

  /**
  * Custom AWS IAM account role
  * @typedef {Object} customRole
  * @property {string} roleArn - The Amazon Resource Name (ARN) associated with the new role
  * @property {string} denyArns - The ARNs for the deny policies associated with this role
  * @property {string} instanceProfileArn - The Instance Profile ARN associated with this role
  * @property {boolean} addedRoleToInstanceProfile - Whether this role was added to an Instance Profile
  */

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * roleName: 'awsRoleName',
   * roleType: 'Amazon EC2',
   * includeDefaultPolicy: 1,
   * enableAlksAccess: true
   * }).then((role) => {
   * // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
   * })
   * 
   * @example
   * alks.createRole({
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * roleName: 'awsRoleName',
   * roleType: 'Amazon EKS IRSA',
   * includeDefaultPolicy: 1,
   * enableAlksAccess: false,
   * templateFields: {
   *   OIDC_PROVIDER: 'oidc.eks.us-east-1.amazonaws.com/id/88G998884RBAD6687HBE3GETY67FQE04',
   *   K8S_NAMESPACE: 'myNamespace',
   *   K8S_SERVICE_ACCOUNT: 'myServiceAccount'
   * }
   * }).then((role) => {
   * // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
   * })
   */
  alks.prototype.createRole = function createRole (props) {
    return(this._doFetch('createRole', props).then(function (results) {
      results.denyArns = results.denyArns.split(',');
      return(pick(results,['roleArn', 'denyArns','instanceProfileArn','addedRoleToInstanceProfile']))
    }))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * roleName: 'awsRoleName',
   * roleType: 'Amazon EC2',
   * includeDefaultPolicy: 1,
   * trustArn: 'anExistingRoleArn',
   * trustType: 'Cross Account',
   * enableAlksAccess: true
   * }).then((role) => {
   * // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
   * })
   */
  alks.prototype.createNonServiceRole = function createNonServiceRole (props) {
    return(this._doFetch('createNonServiceRole', props).then(function (results) {
      results.denyArns = results.denyArns.split(',');
      return(pick(results,['roleArn', 'denyArns','instanceProfileArn','addedRoleToInstanceProfile']))
    }))
  };

  /**
  * AWS account role type
  * @typedef {Object} awsAccountRole
  * @property {string} roleArn - The AWS Role ARN
  * @property {boolean} isMachineIdentity - true|false value of if this role is a machine identity
  * @property {Object} assumeRolePolicyDocument - The AWS assume role policy document associated with this role
  */

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
    * baseUrl: 'https://your.alks-host.com',
    * accessToken: 'abc123',
    * account: '1234567890',
    * }).then((roles) => {
    * // roles[i].roleArn, roles[i].isMachineIdentity, roles[i].assumeRolePolicyDocument
    * })
    */
  alks.prototype.awsAccountRoles = function awsAccountRoles (props) {
    return(this._doFetch(("awsAccountRoles?account=" + (props.account)), props, 'GET').then(function (results) { return results.awsRoleList; }))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * }).then((roleNames) => {
   * // ['customRole1', 'customRole2', ...]
   * })
   */
  alks.prototype.listAWSAccountRoles = function listAWSAccountRoles (props) {
    return(this._doFetch('listAWSAccountRoles', props).then(function (results) { return JSON.parse(results.jsonAWSRoleList).map(function (r) { return r.split('/').slice(-1)[0]; }); }
    ))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * roleName: 'awsRoleName'
   * }).then((roleARN) => {
   * // arn:aws:iam::123:role/acct-managed/awsRoleName
   * })
   */
  alks.prototype.getAccountRole = function getAccountRole (props) {
    return(this._doFetch('getAccountRole', props).then(function (results) {
      if (!results.roleExists) {
        throw new Error(("Role " + (props.roleName) + " does not exist in this account"))
      }
      return(results.roleARN)
    }))
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * roleName: 'awsRoleName'
   * }).then(() => {
   * // success!
   * })
   */
  alks.prototype.deleteRole = function deleteRole (props) {
    return(this._doFetch('deleteRole', props).then(function () { return true; } ))
  };

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
    * baseUrl: 'https://your.alks-host.com',
    * accessToken: 'abc123',
    * roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
    * }).then((roleARN) => {
    * // arn:aws:iam::123:role/acct-managed/awsRoleName
    * })
    */
  alks.prototype.addRoleMachineIdentity = function addRoleMachineIdentity (props) {
    return(this._doFetch('roleMachineIdentity', props).then(function (results) { return pick(results,['machineIdentityArn']); })
    )
  };

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
    * baseUrl: 'https://your.alks-host.com',
    * accessToken: 'abc123',
    * roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
    * }).then((roleARN) => {
    * // arn:aws:iam::123:role/acct-managed/awsRoleName
    * })
    */
  alks.prototype.deleteRoleMachineIdentity = function deleteRoleMachineIdentity (props) {
    return(this._doFetch('roleMachineIdentity', props, 'DELETE').then(function (results) { return pick(results,['machineIdentityArn']); })
    )
  };

  /**
   * ALKS User representation
   * @typedef {Object} alksUser
   * @property {string} sAMAccountName - The network id
   * @property {string} displayName - The display nme
   * @property {string} email - The user email
   * @property {string} title - The user title
   * @property {string} department - The user department
   */

  /**
   * Returns a Promise for a list of users who have access to the given account
   * 
   * @param {Object} props- An object containing the following properties
   * @param {string} props.baseUrl - The base URL of the ALKS service
   * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
   * @param {string} props.accountId - The accountId used to find which users have access to the account
   * @returns {Promise<alksUser[]>}
   * @example
   * alks.getUserAccess({
   *  baseUrl: 'https://your.alks-host.com',
   *  accessToken: 'abc123',
   *  accountId: '012345678910',
   * }).then((users) => {
   *  // users[i].sAMAccountName, users[i].displayName, users[i].email, users[i].title, users[i].department
   * })
   */
  alks.prototype.getUserAccess = function getUserAccess (props) {
    var accountId = props.accountId;
    return(this._doFetch(("userAccess/" + accountId), props, 'GET').then(function (results) { return results.users; })
    )
  };

  /**
   * Returns a Promise for a map of role names to the list of users with that role for a given account
   * 
   * @param {Object} props- An object containing the following properties
   * @param {string} props.baseUrl - The base URL of the ALKS service
   * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
   * @param {string} props.accountId - The accountId used to find which users have access to the account
   * @returns {Promise<Object>}
   * @example
   * alks.getUserAccess({
   *  baseUrl: 'https://your.alks-host.com',
   *  accessToken: 'abc123',
   *  accountId: '012345678910',
   * }).then((users) => {
   *  // users['Admin'].sAMAccountName, users['Admin'].displayName, users['Admin'].email, users['Admin'].title, users['Admin'].department
   * })
   */
  alks.prototype.getUserAccessByRole = function getUserAccessByRole (props) {
    var accountId = props.accountId;
    return(this._doFetch(("reports/users-by-role?accountId=" + accountId), props, 'GET').then(function (results) { return results.users; })
    )
  };

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
   *  baseUrl: 'https://your.alks-host.com',
   *  accessToken: 'abc123',
   *  accountId: '012345678910',
   *  sAMAccountName: 'bob1',
   * }).then((roles) => {
   *  // ['Admin', 'LabAdmin', ...]
   * })
   */
  alks.prototype.getUserRoleAccess = function getUserRoleAccess (props) {
    var accountId = props.accountId;
    return(this._doFetch(("userAccess/roles/" + accountId), props).then(function (results) { return results.roles; })
    )
  };

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
   *  baseUrl: 'https://your.alks-host.com',
   *  accessToken: 'abc123',
   *  accountId: '012345678910',
   * }).then((owners) => {
   *  // owners[0].sAMAccountName, owners[0].displayName, owners[0].email, owners[0].title, owners[0].department
   * })
   */
  alks.prototype.getAccountOwners = function getAccountOwners (props) {
    var accountId = props.accountId;
    return(this._doFetch(("userAccess/owners/" + accountId), props, 'GET').then(function (results) { return results.accountOwners; }))
  };

  /**
   *Response containing access keys.
   *
   *@typedef {Object} AccessKeys
   *@property {string} iamUserArn - the arn of the IAM user owning the long term access keys
   *@property {string} accessKey - the long term access key
   *@property {string} secretKey - the secret key for the long term access key
   *@property {boolean} addedIAMUserToGroup - whether the user was successfuly added to the deny policy group
   */

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * iamUserName: 'iamUserName'
   * }).then((user) => {
   * // user.iamUserArn, user.accessKey, user.secretKey, user.addedIAMUserToGroup
   * })
   */
  alks.prototype.createAccessKeys = function createAccessKeys (props) {
    return(this._doFetch('accessKeys', props).then(function (results) { return pick(results,['iamUserArn', 'accessKey', 'secretKey', 'addedIAMUserToGroup']); })
    )
  };

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
   * baseUrl: 'https://your.alks-host.com',
   * accessToken: 'abc123',
   * account: 'anAccount',
   * role: 'IAMAdmin',
   * iamUserName: 'iamUserName'
   * }).then(() => {
   * // success!
   * })
   */
  alks.prototype.deleteIAMUser = function deleteIAMUser (props) {
    return(this._doFetch('IAMUser', props, 'DELETE').then(function () { return true; } ))
  };

  /**
   * Returns the version of the ALKS Rest API
   *
   * @param {Object} props - An object containing the following properties
   * @returns {Promise<Object>}
   * @example
   * alks.version({
   * ...
   * }).then((data) => {
   * // data.version
   * })
   */
  alks.prototype.version = function version (props) {
    return this._doFetch('version', props, 'GET').then(function (results) { return pick(results, ['version']); })
  };

  /**
   * Returns information about one of the roles used to generate keys
   *
   * @param {Object} props - An object containing the following properties
   * @param {string} props.accountId - The 12-digit account ID associated with the custom role
   * @param {string} props.role - The user's role associated with the account
   * @param {number} props.maxKeyDuration - The maximum key duration for this account
   * @returns {Promise<Object>}
   * @example
   * alks.getLoginRole({
   * ...
   * }).then((loginRole) => {
   * // loginRole.account, loginRole.role, loginRole.iamKeyActive, loginRole.maxKeyDuration
   * })
   */
  alks.prototype.getLoginRole = function getLoginRole (props) {
    var accountId = props.accountId;
      var role = props.role;
    return this._doFetch(("loginRoles/id/" + accountId + "/" + role), null).then(function (results) { return pick(results, ['account', 'role', 'iamKeyActive', 'maxKeyDuration']); })
  };

  /**
   * Exchanges a refresh token for an access token
   *
   * @param {Object} props - An object containing the following properties
   * @param {string} props.refreshToken - the refresh token to exchange
   * @returns {Promise<Object>}
   * @example
   * alks.getAccessToken({
   * ...
   * }).then((data) => {
   * // data.accessToken, data.expiresIn
   * })
   */
  alks.prototype.getAccessToken = function getAccessToken (props) {
    return this._doFetch('accessToken', props).then(function (results) { return pick(results, ['accessToken', 'expiresIn']); }
    )
  };

  /**
   * Returns a list of a user's refresh tokens (Does not return the full token)
   *
   * @param {Object} props - An object containing the following properties
   * @returns {Array<Object>}
   * @example
   * alks.getRefreshTokens({
   * ...
   * }).then((tokens) => {
   * // token[i].clientId, token[i].id, token[i].userId, token[i].value
   * })
   */
  alks.prototype.getRefreshTokens = function getRefreshTokens (props) {
    return this._doFetch('refreshTokens', props, 'GET').then(function (results) { return results.refreshTokens.map(function (token) { return pick(token, ['clientId', 'id', 'userId', 'value']); }); }
    )
  };

  /**
   * Revokes a refresh or access token
   *
   * @param {Object} props - An object containing the following properties
   * @param {string} [props.token] - the access or refresh token to revoke (Required if tokenId not specified)
   * @param {string} [props.tokenId] - the ID of the refresh token to revoke (Required if token not specified)
   * @returns {boolean}
   * @example
   * alks.revoke({
   * token: '...',
   * ...
   * }).then((success) => {
   * // success == true
   * })
   *
   * // or
   *
   * alks.revoke({
   * tokenId: '...',
   * ...
   * }).then((success) => {
   * // success == true
   * })
   */
  alks.prototype.revoke = function revoke (props) {
    return this._doFetch('revoke', props).then(function (results) { return results.statusMessage == 'Success'; }
    )
  };

  alks.prototype._doFetch = function _doFetch (path, args, method) {
      if ( args === void 0 ) args = { };
      if ( method === void 0 ) method = 'POST';

    var opts = Object.assign({}, this.defaults, args);

    var headers = {
      'Content-Type': 'application/json',
      'User-Agent': ("AlksJS/" + (version)),
    };

    if (opts.accessToken) {
      headers['Authorization'] = "Bearer " + (opts.accessToken);
      delete opts.accessToken;
    }

    if (opts.userid || opts.password) {
      console.error('The userid and password properties are deprecated and should be replaced with an access token');
      var credentials = this._base64Encode(((opts.userid) + ":" + (opts.password)));
      headers['Authorization'] = "Basic " + credentials;
      delete opts.userid;
      delete opts.password;
    }

    if( opts.accessKey ) {
      headers['ALKS-STS-Access-Key'] = opts.accessKey;
      delete opts.accessKey;
    }
    if( opts.secretKey ) {
      headers['ALKS-STS-Secret-Key'] = opts.secretKey;
      delete opts.secretKey;
    }
    if( opts.sessionToken ) {
      headers['ALKS-STS-Session-Token'] = opts.sessionToken;
      delete opts.sessionToken;
    }

    var responsePromise = opts._fetch(((opts.baseUrl) + "/" + path + "/"), {
      method: method, headers: headers, body: method == 'GET' ? undefined : JSON.stringify(opts)
    });

    // Add catch here to swallow the JSON parsing error (it'll get picked up below)
    var jsonPromise = responsePromise.then(function (r) { return r.json(); }).catch(function () {});

    return Promise.all([responsePromise, jsonPromise]).then(function (ref) {
        var response = ref[0];
        var json = ref[1];

      if (!response.ok) {
        throw new AlksError(response, json)
      }
      return(json)
    })
  };

  var pick = function (obj, props) { return props.reduce(function (a, e) { return (a[e] = obj[e], a); }, {}); };

  var AlksError = /*@__PURE__*/(function (Error) {
    function AlksError(response, json) {
      var errors = Array.isArray(json.errors) ? json.errors : [];
      if (response.statusText) {
        errors.unshift(response.statusText);
      }
      var message = errors.join('; ');
      Error.call(this, message);
      this.status = response.status;
      this.message = message;
      Object.assign(this, json);
    }

    if ( Error ) AlksError.__proto__ = Error;
    AlksError.prototype = Object.create( Error && Error.prototype );
    AlksError.prototype.constructor = AlksError;

    return AlksError;
  }(Error));

  var alks$1 = new alks();

  return alks$1;

}));
