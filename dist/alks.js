var alks = (function () {
  'use strict';

  var fetch = window.fetch.bind(window);
  var alks = function alks(props, existing) {
    if ( existing === void 0 ) existing = {};
    this.defaults = Object.assign({}, existing, { _fetch: fetch }, props);
  };
  alks.prototype.create = function create (props) {
    return(new alks(props, this.defaults))
  };
  alks.prototype.getAccounts = function getAccounts (props) {
    return(this._doFetch('getAccounts', props).then(function (results) { return Object.keys(results.accountListRole).map(function (key) { return ({
        account: key,
        role: results.accountListRole[key][0].role,
        iamKeyActive: results.accountListRole[key][0].iamKeyActive
      }); }); }
    ))
  };
  alks.prototype.getKeys = function getKeys (props) {
    return(this._doFetch('getKeys', props).then(function (results) { return pick(results, ['accessKey', 'secretKey', 'sessionToken']); }
    ))
  };
  alks.prototype.getIAMKeys = function getIAMKeys (props) {
    return(this._doFetch('getIAMKeys', props).then(function (results) { return pick(results, ['accessKey', 'secretKey', 'sessionToken']); }
    ))
  };
  alks.prototype.getAWSRoleTypes = function getAWSRoleTypes (props) {
    return(this._doFetch('getAWSRoleTypes', props).then(function (results) { return JSON.parse(results.roleTypes); }
    ))
  };
  alks.prototype.getNonServiceAWSRoleTypes = function getNonServiceAWSRoleTypes (props) {
    return(this._doFetch('getNonServiceAWSRoleTypes', props).then(function (results) { return JSON.parse(results.roleTypes); }
    ))
  };
  alks.prototype.createRole = function createRole (props) {
    return(this._doFetch('createRole', props).then(function (results) {
      results.denyArns = results.denyArns.split(',');
      return(pick(results,['roleArn', 'denyArns','instanceProfileArn','addedRoleToInstanceProfile']))
    }))
  };
  alks.prototype.createNonServiceRole = function createNonServiceRole (props) {
    return(this._doFetch('createNonServiceRole', props).then(function (results) {
      results.denyArns = results.denyArns.split(',');
      return(pick(results,['roleArn', 'denyArns','instanceProfileArn','addedRoleToInstanceProfile']))
    }))
  };
  alks.prototype.listAWSAccountRoles = function listAWSAccountRoles (props) {
    return(this._doFetch('listAWSAccountRoles', props).then(function (results) { return JSON.parse(results.jsonAWSRoleList).map(function (r) { return r.split('/').slice(-1)[0]; }); }
    ))
  };
  alks.prototype.getAccountRole = function getAccountRole (props) {
    return(this._doFetch('getAccountRole', props).then(function (results) {
      if (!results.roleExists) {
        throw new Error(("Role " + (props.roleName) + " does not exist in this account"))
      }
      return(results.roleARN)
    }))
  };
  alks.prototype.deleteRole = function deleteRole (props) {
    return(this._doFetch('deleteRole', props).then(function () { return true; } ))
  };
  alks.prototype.createAccessKeys = function createAccessKeys (props) {
    return(this._doFetch('accessKeys', props).then(function (results) { return pick(results,['iamUserArn', 'accessKey', 'secretKey', 'addedIAMUserToGroup']); })
    )
  };
  alks.prototype.deleteIAMUser = function deleteIAMUser (props) {
    return(this._doFetch('IAMUser', props, 'DELETE').then(function () { return true; } ))
  };
  alks.prototype._doFetch = function _doFetch (path, args, method) {
      if ( args === void 0 ) args = { };
      if ( method === void 0 ) method = 'POST';
    var opts = Object.assign({}, this.defaults, args);
    var headers = {
      'Content-Type': 'application/json'
    };
    if (opts.accessToken) {
      headers['Authorization'] = "Bearer " + (opts.accessToken);
      delete opts.accessToken;
    }
    if (opts.userid || opts.password) {
      console.error('The userid and password properties are deprecated and should be replaced with an access token');
    }
    var responsePromise = opts._fetch(((opts.baseUrl) + "/" + path + "/"), {
      method: method, headers: headers, body: JSON.stringify(opts)
    });
    var jsonPromise = responsePromise.then(function (r) { return r.json(); }).catch(function () {});
    return Promise.all([responsePromise, jsonPromise]).then(function (ref) {
        var response = ref[0];
        var json = ref[1];
      if (!response.ok) {
        if (json && json.statusMessage && json.statusMessage !== 'Success') {
          throw new Error(json.statusMessage)
        } else if (json && json.errors && json.errors.length) {
          throw new Error(json.errors[0])
        } else {
          throw new Error(response.statusText)
        }
      }
      return(json)
    })
  };
  var pick = function (obj, props) { return props.reduce(function (a, e) { return (a[e] = obj[e], a); }, {}); };
  var alks$1 = new alks();

  return alks$1;

}());
