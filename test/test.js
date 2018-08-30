const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

const fetchMock = require('fetch-mock')

var alks = require('../')

describe('alks.js', function() {

  it('getAccounts', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccounts/', {
      body: {
        statusMessage: 'Success',
        accountListRole: {
          '1234 - foobar': [{ account: '1234', role: 'role1', iamKeyActive: true }],
          '2345 - foobar': [{ account: '2345', role: 'role2', iamKeyActive: false }],
        }
      },
      status: 200
    })
    return(expect(alks.getAccounts({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      _fetch
    })).to.eventually.deep.include({account: '1234 - foobar', role: 'role1', iamKeyActive: true }))
  })
  
  it('getKeys', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
      body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success'},
      status: 200
    })
    return(expect(alks.getKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2,
      accessToken: 'abc123',
      _fetch
    })).to.eventually.have.keys('accessKey', 'secretKey', 'sessionToken'))
  })
  
  it('getIAMKeys', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getIAMKeys/', {
      body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success' },
      status: 200
    })
    return(expect(alks.getIAMKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'IAMAdmin',
      sessionTime: 1,
      accessToken: 'abc123',
      _fetch
    })).to.eventually.have.keys('accessKey', 'secretKey', 'sessionToken'))
  })
  
  it('getAWSRoleTypes', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAWSRoleTypes/', {
      body: { roleTypes: '["AWS Lambda", "Amazon EC2"]', statusMessage: 'Success'},
      status: 200
    })
    return(expect(alks.getAWSRoleTypes({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      _fetch
    })).to.eventually.have.deep.members(['AWS Lambda', 'Amazon EC2']))
  })

  it('getNonServiceAWSRoleTypes', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getNonServiceAWSRoleTypes/', {
      body: { roleTypes: '["AWS Lambda", "Amazon EC2"]', statusMessage: 'Success'},
      status: 200
    })
    return(expect(alks.getNonServiceAWSRoleTypes({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      _fetch
    })).to.eventually.have.deep.members(['AWS Lambda', 'Amazon EC2']))
  })
  
  it('getAccountRole', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccountRole/', {
      body: { 
        roleARN: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        roleExists: true,
        statusMessage: 'Success'
      },
      status: 200
    })
    return(expect(alks.getAccountRole({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      roleName: 'awsRoleName',
      _fetch
    })).to.eventually.equal('arn:aws:iam::12391238912383:role/acct-managed/awsRoleName'))
  })
  
  it('getAccountRole for missing role', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccountRole/', {
      body: { roleARN: null, roleExists: false, statusMessage: 'Success' },
      status: 200
    })
    return(expect(alks.getAccountRole({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      roleName: 'awsRoleName',
      _fetch
    })).to.eventually.be.rejectedWith('Role awsRoleName does not exist in this account'))
  })

  it('createRole', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/createRole/', {
      body: {
        roleArn: 'aRoleArn',
        denyArns: 'denyArn1,denyArn2',
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
        statusMessage: 'Success'
      },
      status: 200
    })
    return(expect(alks.createRole({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      roleName: 'awsRoleName',
      roleType: 'Amazon EC2',
      includeDefaultPolicy: 1,
      _fetch
    })).to.eventually.deep.include({ 
      roleArn: 'aRoleArn', 
      denyArns: ['denyArn1', 'denyArn2'], 
      instanceProfileArn: 'anInstanceProfileArn',
      addedRoleToInstanceProfile: true
    }))
  })

  it('createNonServiceRole', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/createNonServiceRole/', {
      body: {
        roleArn: 'aRoleArn',
        denyArns: 'denyArn1,denyArn2',
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
        statusMessage: 'Success'
      },
      status: 200
    })
    return(expect(alks.createNonServiceRole({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      roleName: 'awsRoleName',
      roleType: 'Amazon EC2',
      includeDefaultPolicy: 1,
      trustArn: 'anExistingRole',
      trustType: 'Cross Account',
      _fetch
    })).to.eventually.deep.include({ 
      roleArn: 'aRoleArn', 
      denyArns: ['denyArn1', 'denyArn2'], 
      instanceProfileArn: 'anInstanceProfileArn',
      addedRoleToInstanceProfile: true
    }))
  })

  it('listAWSAccountRoles', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/listAWSAccountRoles/', {
      body: { 
        jsonAWSRoleList: '["arn:aws:iam::123:role/acct-managed/arn1","arn:aws:iam::123:role/acct-managed/arn2"]',
        statusMessage: null 
      },
      status: 200
    })
    return(expect(alks.listAWSAccountRoles({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      _fetch
    })).to.eventually.have.members(['arn1','arn2']))
  })

  it('deleteRole', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/deleteRole/', {
      body: { statusMessage: 'Success' },
      status: 200
    })
    return(expect(alks.deleteRole({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      roleName: 'awsRoleName',
      _fetch
    })).to.eventually.be.true)
  })

  it('createAccessKeys', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/accessKeys/', {
      body: { iamUserArn: 'anIAMUserArn', accessKey: 'foo', secretKey: 'bar', addedIAMUserToGroup: true },
      status: 200
    })
    return(expect(alks.createAccessKeys({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      iamUserName: 'awsUserName',
      _fetch
    })).to.eventually.deep.include({
      iamUserArn: 'anIAMUserArn',
      accessKey: 'foo',
      secretKey: 'bar',
      addedIAMUserToGroup: true
    }))
  })

  it('deleteIAMUser', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/IAMUser/', {
      body: { statusMessage: 'Success' },
      status: 200
    }, { method: 'DELETE' })
    return(expect(alks.deleteIAMUser({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      account: 'anAccount',
      role: 'Admin',
      riamUserName: 'awsUserName',
      _fetch
    })).to.eventually.be.true)
  })
  
  it('create', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
      body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success' },
      status: 200
    })
    let myAlks = alks.create({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      _fetch
    })
    return(expect(myAlks.getKeys({
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2
    })).to.eventually.include.keys('accessKey', 'secretKey', 'sessionToken'))
  })
  
  it('create for methods with no additional props', () => {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccounts/', {
      body: {
        statusMessage: 'Success',
        accountListRole: {
          '1234 - foobar': [{ account: '1234', role: 'role1', iamKeyActive: true }],
          '2345 - foobar': [{ account: '2345', role: 'role2', iamKeyActive: false }],
        }
      },
      status: 200
    })
    let myAlks = alks.create({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
      _fetch
    })
    return(expect(myAlks.getAccounts())
      .to.eventually.deep.include({account: '1234 - foobar', role: 'role1', iamKeyActive: true })
    )
  })

  it('create leveraging past defaults', () => {
    let alks1 = alks.create({
      baseUrl: 'https://your.alks-host.com',
      accessToken: 'abc123',
    })
    let alks2 = alks1.create({foo: 'bar'})
    return(expect(alks2.defaults).to.have.all.keys(['baseUrl', 'accessToken', 'foo', '_fetch']))
  })
  
  it('rejects on error with ALKS statusMessage', function() {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', { 
      body: { statusMessage: 'this is the statusMessage' },
      status: 401 
    })
    return(expect(alks.getKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2,
      accessToken: 'wrongToken',
      _fetch
    })).to.be.rejectedWith('this is the statusMessage'))
  })

  it('rejects on error with errors array', function() {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
      body: { errors: ['this is an error'], statusMessage: null },
      status: 401
    })
    return(expect(alks.getKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2,
      accessToken: 'wrongToken',
      _fetch
    })).to.be.rejectedWith('this is an error'))
  })
  
  it('handles a server error', function() {
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', { status: 500 })
    return(expect(alks.getKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2,
      accessToken: 'abc123',
      _fetch
    })).to.be.rejectedWith('Server Error'))
  })

  it('warns of userid/password deprecation', function(done) {
    let warningMessage = ''
    console.error = msg => warningMessage = msg
    let _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
      body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success'},
      status: 200
    })
    alks.getKeys({
      baseUrl: 'https://your.alks-host.com',
      account: 'anAccount',
      role: 'PowerUser',
      sessionTime: 2,
      userid: 'testuser',
      password: 'testpass',
      _fetch
    }).then(() => {
      expect(warningMessage).to.include('deprecated')
      done()
    })
  })
})
