var tslib_1 = require("tslib");
var packageJson = tslib_1.__importStar(require("../package.json"));
var buffer_1 = require("buffer");
var node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
// Let it be known that it is incredibly stupid that we still have to do this - Ben W 5/12/21
// @ts-ignore
var fetch =  window.fetch.bind(window)
    ;
var ALKS;
(function (ALKS) {
    function isStsAuth(a) {
        return a.accessKey !== undefined;
    }
    function isPasswordAuth(a) {
        return a.userid !== undefined;
    }
    function isTokenAuth(a) {
        return a.accessToken !== undefined;
    }
    var TrustType;
    (function (TrustType) {
        TrustType["CrossAccount"] = "Cross Account";
        TrustType["InnerAccount"] = "Inner Account";
    })(TrustType = ALKS.TrustType || (ALKS.TrustType = {}));
    var PseudoBoolean;
    (function (PseudoBoolean) {
        PseudoBoolean[PseudoBoolean["True"] = 1] = "True";
        PseudoBoolean[PseudoBoolean["False"] = 0] = "False";
    })(PseudoBoolean = ALKS.PseudoBoolean || (ALKS.PseudoBoolean = {}));
    /**
     * ALKS JavaScript API
     */
    var Alks = /** @class */ (function () {
        function Alks(config) {
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
        Alks.prototype.create = function (props) {
            var config = tslib_1.__assign(tslib_1.__assign({}, this.config), props);
            return new Alks(config);
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
        Alks.prototype.getAccounts = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getAccounts', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, Object.keys(results.accountListRole).map(function (key) { return ({
                                    account: key,
                                    role: results.accountListRole[key][0].role,
                                    iamKeyActive: results.accountListRole[key][0].iamKeyActive,
                                    maxKeyDuration: results.accountListRole[key][0].maxKeyDuration,
                                    skypieaAccount: results.accountListRole[key][0].skypieaAccount,
                                }); })];
                    }
                });
            });
        };
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
        Alks.prototype.getKeys = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getKeys', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, [
                                    'accessKey',
                                    'secretKey',
                                    'sessionToken',
                                    'consoleURL',
                                ])];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   account: 'anAccount',
         *   role: 'IAMAdmin',
         *   sessionTime: 1
         * }).then((creds) => {
         *   // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
         * })
         */
        Alks.prototype.getIAMKeys = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getIAMKeys', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, [
                                    'accessKey',
                                    'secretKey',
                                    'sessionToken',
                                    'consoleURL',
                                ])];
                    }
                });
            });
        };
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
        Alks.prototype.getAllAWSRoleTypes = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var url, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = props.getDynamicValues
                                ? 'allAwsRoleTypes?getDynamicValues=true'
                                : 'allAwsRoleTypes';
                            return [4 /*yield*/, this.internalFetch(url, props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.roleTypes];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         * }).then((roleTypes) {
         *   // ['AWS Lambda', 'Amazon EC2', ... ]
         * })
         */
        Alks.prototype.getAWSRoleTypes = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getAWSRoleTypes', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, JSON.parse(results.roleTypes)];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         * }).then((roleTypes) => {
         *   // ['AWS Lambda', 'Amazon EC2', ...]
         * })
         */
        Alks.prototype.getNonServiceAWSRoleTypes = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getNonServiceAWSRoleTypes', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, JSON.parse(results.roleTypes)];
                    }
                });
            });
        };
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
        Alks.prototype.createRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('createRole', props)];
                        case 1:
                            results = _a.sent();
                            results.denyArns = results.denyArns.split(',');
                            return [2 /*return*/, pick(results, [
                                    'roleArn',
                                    'denyArns',
                                    'instanceProfileArn',
                                    'addedRoleToInstanceProfile',
                                ])];
                    }
                });
            });
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
        Alks.prototype.createNonServiceRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('createNonServiceRole', props)];
                        case 1:
                            results = _a.sent();
                            results.denyArns = results.denyArns.split(',');
                            return [2 /*return*/, pick(results, [
                                    'roleArn',
                                    'denyArns',
                                    'instanceProfileArn',
                                    'addedRoleToInstanceProfile',
                                ])];
                    }
                });
            });
        };
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
        Alks.prototype.awsAccountRoles = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch("awsAccountRoles?account=" + props.account, props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.awsRoleList];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   account: 'anAccount',
         *   role: 'IAMAdmin',
         * }).then((roleNames) => {
         *   // ['customRole1', 'customRole2', ...]
         * })
         */
        Alks.prototype.listAWSAccountRoles = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('listAWSAccountRoles', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, JSON.parse(results.jsonAWSRoleList).map(function (r) { return r.split('/').slice(-1)[0]; })];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   account: 'anAccount',
         *   role: 'IAMAdmin',
         *   roleName: 'awsRoleName'
         * }).then((roleARN) => {
         *   // arn:aws:iam::123:role/acct-managed/awsRoleName
         * })
         */
        Alks.prototype.getAccountRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('getAccountRole', props)];
                        case 1:
                            results = _a.sent();
                            if (!results.roleExists) {
                                throw new Error("Role " + props.roleName + " does not exist in this account");
                            }
                            return [2 /*return*/, results.roleARN];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   account: 'anAccount',
         *   role: 'IAMAdmin',
         *   roleName: 'awsRoleName'
         * }).then(() => {
         *   // success!
         * })
         */
        Alks.prototype.deleteRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('deleteRole', props)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
         * }).then((roleARN) => {
         *   // arn:aws:iam::123:role/acct-managed/awsRoleName
         * })
         */
        Alks.prototype.addRoleMachineIdentity = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('roleMachineIdentity', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, ['machineIdentityArn'])];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
         * }).then((roleARN) => {
         *   // arn:aws:iam::123:role/acct-managed/awsRoleName
         * })
         */
        Alks.prototype.deleteRoleMachineIdentity = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('roleMachineIdentity', props, 'DELETE')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, ['machineIdentityArn'])];
                    }
                });
            });
        };
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
        Alks.prototype.getUserAccess = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var accountId, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountId = props.accountId;
                            return [4 /*yield*/, this.internalFetch("userAccess/" + accountId, props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.users];
                    }
                });
            });
        };
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
        Alks.prototype.getUserAccessByRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var accountId, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountId = props.accountId;
                            return [4 /*yield*/, this.internalFetch("reports/users-by-role?accountId=" + accountId, props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.users];
                    }
                });
            });
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
         *    baseUrl: 'https://your.alks-host.com',
         *    accessToken: 'abc123',
         *    accountId: '012345678910',
         *    sAMAccountName: 'bob1',
         * }).then((roles) => {
         *    // ['Admin', 'LabAdmin', ...]
         * })
         */
        Alks.prototype.getUserRoleAccess = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var accountId, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountId = props.accountId;
                            return [4 /*yield*/, this.internalFetch("userAccess/roles/" + accountId, props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.roles];
                    }
                });
            });
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
         *    baseUrl: 'https://your.alks-host.com',
         *    accessToken: 'abc123',
         *    accountId: '012345678910',
         * }).then((owners) => {
         *    // owners[0].sAMAccountName, owners[0].displayName, owners[0].email, owners[0].title, owners[0].department
         * })
         */
        Alks.prototype.getAccountOwners = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var accountId, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountId = props.accountId;
                            return [4 /*yield*/, this.internalFetch("userAccess/owners/" + accountId, props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.accountOwners];
                    }
                });
            });
        };
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
        Alks.prototype.createAccessKeys = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('accessKeys', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, [
                                    'iamUserArn',
                                    'accessKey',
                                    'secretKey',
                                    'addedIAMUserToGroup',
                                ])];
                    }
                });
            });
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
         *   baseUrl: 'https://your.alks-host.com',
         *   accessToken: 'abc123',
         *   account: 'anAccount',
         *   role: 'IAMAdmin',
         *   iamUserName: 'iamUserName'
         * }).then(() => {
         *   // success!
         * })
         */
        Alks.prototype.deleteIAMUser = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('IAMUser', props, 'DELETE')];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
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
        Alks.prototype.version = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('version', props, 'GET')];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, ['version'])];
                    }
                });
            });
        };
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
        Alks.prototype.getLoginRole = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var accountId, role, results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountId = props.accountId, role = props.role;
                            return [4 /*yield*/, this.internalFetch("loginRoles/id/" + accountId + "/" + role, props, 'GET')];
                        case 1:
                            results = (_a.sent());
                            // TODO we should probably update this function to include skypieaAccount in the result since it's already being fetched - Ben W 5/10/21
                            return [2 /*return*/, pick(results.loginRole, [
                                    'account',
                                    'role',
                                    'iamKeyActive',
                                    'maxKeyDuration',
                                ])];
                    }
                });
            });
        };
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
        Alks.prototype.getAccessToken = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('accessToken', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, pick(results, ['accessToken', 'expiresIn'])];
                    }
                });
            });
        };
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
        Alks.prototype.getRefreshTokens = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('refreshTokens', props, 'GET')];
                        case 1:
                            results = (_a.sent());
                            return [2 /*return*/, results.refreshTokens.map(function (token) {
                                    return pick(token, ['clientId', 'id', 'userId', 'value']);
                                })];
                    }
                });
            });
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
        Alks.prototype.revoke = function (props) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var results;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.internalFetch('revoke', props)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, results.statusMessage == 'Success'];
                    }
                });
            });
        };
        Alks.prototype.internalFetch = function (path, args, method) {
            if (args === void 0) { args = {}; }
            if (method === void 0) { method = 'POST'; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var opts, payload, headers, credentials, response, json;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            opts = tslib_1.__assign(tslib_1.__assign({}, this.config), args);
                            payload = tslib_1.__assign({}, opts);
                            headers = {
                                'Content-Type': 'application/json',
                                'User-Agent': "AlksJS/" + packageJson.version,
                            };
                            if (isTokenAuth(opts)) {
                                headers['Authorization'] = "Bearer " + opts.accessToken;
                                delete payload.accessToken;
                            }
                            else if (isStsAuth(opts)) {
                                headers['ALKS-STS-Access-Key'] = opts.accessKey;
                                headers['ALKS-STS-Secret-Key'] = opts.secretKey;
                                headers['ALKS-STS-Session-Token'] = opts.sessionToken;
                                delete payload.accessKey;
                                delete payload.secretKey;
                                delete payload.sessionToken;
                            }
                            else if (isPasswordAuth(opts)) {
                                console.error('The userid and password properties are deprecated and should be replaced with an access token');
                                credentials = base64Encode(opts.userid + ":" + opts.password);
                                headers['Authorization'] = "Basic " + credentials;
                                delete payload.userid;
                                delete payload.password;
                            }
                            if (opts.userAgent) {
                                headers['User-Agent'] += " " + opts.userAgent;
                                delete payload.userAgent;
                            }
                            return [4 /*yield*/, opts.fetch(opts.baseUrl + "/" + path, {
                                    method: method,
                                    headers: headers,
                                    body: method == 'GET' ? undefined : JSON.stringify(payload),
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json().catch(function () { })];
                        case 2:
                            json = _a.sent();
                            if (!response.ok) {
                                throw new AlksError(response, json);
                            }
                            return [2 /*return*/, json];
                    }
                });
            });
        };
        return Alks;
    }());
    ALKS.Alks = Alks;
    var AlksError = /** @class */ (function (_super) {
        tslib_1.__extends(AlksError, _super);
        function AlksError(response, json) {
            var _this = this;
            var errors = Array.isArray(json === null || json === void 0 ? void 0 : json.errors) ? json.errors : [];
            if (response.statusText) {
                errors.unshift(response.statusText);
            }
            var message = errors.join('; ');
            _this = _super.call(this, message) || this;
            _this.status = response.status;
            _this.message = message;
            Object.assign(_this, json);
            return _this;
        }
        return AlksError;
    }(Error));
    ALKS.AlksError = AlksError;
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
    function base64Encode(str) {
        if (str === void 0) { str = ''; }
        return buffer_1.Buffer.from(str).toString('base64');
    }
    function pick(obj, props) {
        return props.reduce(function (acc, prop) { return ((acc[prop] = obj[prop]), acc); }, {});
    }
    var defaultConfig = {
        fetch: fetch,
    };
    var defaultAlks = Alks.prototype.create.call({}, defaultConfig);
    ALKS.create = Alks.prototype.create.bind(defaultAlks);
    ALKS.getAccounts = Alks.prototype.getAccounts.bind(defaultAlks);
    ALKS.getKeys = Alks.prototype.getKeys.bind(defaultAlks);
    ALKS.getIAMKeys = Alks.prototype.getIAMKeys.bind(defaultAlks);
    ALKS.getAllAWSRoleTypes = Alks.prototype.getAllAWSRoleTypes.bind(defaultAlks);
    ALKS.getAWSRoleTypes = Alks.prototype.getAWSRoleTypes.bind(defaultAlks);
    ALKS.getNonServiceAWSRoleTypes = Alks.prototype.getNonServiceAWSRoleTypes.bind(defaultAlks);
    ALKS.createRole = Alks.prototype.createRole.bind(defaultAlks);
    ALKS.createNonServiceRole = Alks.prototype.createNonServiceRole.bind(defaultAlks);
    ALKS.awsAccountRoles = Alks.prototype.awsAccountRoles.bind(defaultAlks);
    ALKS.listAWSAccountRoles = Alks.prototype.listAWSAccountRoles.bind(defaultAlks);
    ALKS.getAccountRole = Alks.prototype.getAccountRole.bind(defaultAlks);
    ALKS.deleteRole = Alks.prototype.deleteRole.bind(defaultAlks);
    ALKS.addRoleMachineIdentity = Alks.prototype.addRoleMachineIdentity.bind(defaultAlks);
    ALKS.deleteRoleMachineIdentity = Alks.prototype.deleteRoleMachineIdentity.bind(defaultAlks);
    ALKS.getUserAccess = Alks.prototype.getUserAccess.bind(defaultAlks);
    ALKS.getUserAccessByRole = Alks.prototype.getUserAccessByRole.bind(defaultAlks);
    ALKS.getUserRoleAccess = Alks.prototype.getUserRoleAccess.bind(defaultAlks);
    ALKS.getAccountOwners = Alks.prototype.getAccountOwners.bind(defaultAlks);
    ALKS.createAccessKeys = Alks.prototype.createAccessKeys.bind(defaultAlks);
    ALKS.deleteIAMUser = Alks.prototype.deleteIAMUser.bind(defaultAlks);
    ALKS.version = Alks.prototype.version.bind(defaultAlks);
    ALKS.getLoginRole = Alks.prototype.getLoginRole.bind(defaultAlks);
    ALKS.getAccessToken = Alks.prototype.getAccessToken.bind(defaultAlks);
    ALKS.getRefreshTokens = Alks.prototype.getRefreshTokens.bind(defaultAlks);
    ALKS.revoke = Alks.prototype.revoke.bind(defaultAlks);
})(ALKS || (ALKS = {}));
module.exports = ALKS;
