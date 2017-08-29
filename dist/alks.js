var alks = (function () {
'use strict';

var fetch = window.fetch.bind(window);
var alks = function alks(instanceConfig) {
  this.defaults = Object.assign({}, { _fetch: fetch }, instanceConfig);
};
alks.prototype.create = function create (props) {
  return(new alks(props))
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
alks.prototype.createRole = function createRole (props) {
  return(this._doFetch('createRole', props).then(function (results) {
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
alks.prototype._doFetch = function _doFetch (path, args) {
    if ( args === void 0 ) args = { };
  var opts = Object.assign({}, this.defaults, args);
  var responsePromise = opts._fetch(((opts.baseUrl) + "/" + path + "/"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(opts)
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
