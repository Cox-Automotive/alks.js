const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const sinon = require('sinon')
const fetchMock = require('fetch-mock')

var alks = require('../')

describe('alks.js', function() {

  describe('getAccounts', () => {

    it('should return a list of accounts', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccounts/', {
        body: {
          statusMessage: 'Success',
          accountListRole: {
            '1234 - foobar': [{ account: '1234', role: 'role1', iamKeyActive: true }],
            '2345 - foobar': [{ account: '2345', role: 'role2', iamKeyActive: false }],
          }
        },
        status: 200
      })

      const result = await alks.getAccounts({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      console.log(result)

      expect(result).to.deep.include({
        account: '1234 - foobar',
        role: 'role1',
        iamKeyActive: true
      })
    })
  })

  describe('getKeys', () => {

    let consoleErrorSpy

    beforeEach(() => {
      consoleErrorSpy = sinon.spy(console, 'error')
    })

    afterEach(() => {
      consoleErrorSpy.restore()
    })

    it('should return an access key, secret key, and session token', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
        body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success'},
        status: 200
      })

      const result = await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'abc123',
        _fetch
      })

      expect(result).to.have.keys('accessKey', 'secretKey', 'sessionToken')
    })

    it('rejects on error with ALKS statusMessage', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
        body: { statusMessage: 'this is the statusMessage' },
        status: 401
      })

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'wrongToken',
        _fetch
      })

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        status: 401,
        statusMessage: 'this is the statusMessage'
      })
    })

    it('rejects on error with errors array', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
        body: { errors: ['this is an error'], statusMessage: null },
        status: 401
      })

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'wrongToken',
        _fetch
      })

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        status: 401,
        errors: ['this is an error']
      })
    })

    it('handles a server error', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', { status: 500 })

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'abc123',
        _fetch
      })

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        message: 'Server Error',
        status: 500
      })
    })

    it('warns of userid/password deprecation', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
        body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success'},
        status: 200
      })

      await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        userid: 'testuser',
        password: 'testpass',
        _fetch
      })

      expect(consoleErrorSpy.calledWith(sinon.match('deprecated'))).to.be.true
    })
  })

  describe('getIAMKeys', () => {

    it('getIAMKeys', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getIAMKeys/', {
        body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success' },
        status: 200
      })

      const result = await alks.getIAMKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'IAMAdmin',
        sessionTime: 1,
        accessToken: 'abc123',
        _fetch
      })

      expect(result).to.have.keys('accessKey', 'secretKey', 'sessionToken')
    })
  })

  describe('getAWSRoleTypes', () => {

    it('should return a list of role types', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAWSRoleTypes/', {
        body: { roleTypes: '["AWS Lambda", "Amazon EC2"]', statusMessage: 'Success'},
        status: 200
      })

      const result = await alks.getAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      expect(result).to.have.deep.members(['AWS Lambda', 'Amazon EC2'])
    })
  })

  describe('getNonServiceAWSRoleTypes', () => {

    it('should return a list of role types', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getNonServiceAWSRoleTypes/', {
        body: { roleTypes: '["AWS Lambda", "Amazon EC2"]', statusMessage: 'Success'},
        status: 200
      })

      const result = await alks.getNonServiceAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      expect(result).to.have.deep.members(['AWS Lambda', 'Amazon EC2'])
    })
  })

  describe('getAccountRole', () => {

    it('should return the ARN of the account role', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccountRole/', {
        body: {
          roleARN: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
          roleExists: true,
          statusMessage: 'Success'
        },
        status: 200
      })

      const result = await alks.getAccountRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        _fetch
      })

      expect(result).to.equal('arn:aws:iam::12391238912383:role/acct-managed/awsRoleName')
    })

    it('should reject with an error message when the role is not found', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccountRole/', {
        body: { roleARN: null, roleExists: false, statusMessage: 'Success' },
        status: 200
      })

      const result = alks.getAccountRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        _fetch
      })

      expect(result).to.be.rejectedWith('Role awsRoleName does not exist in this account')
    })
  })

  describe('createRole', () => {

    it('should return information about the newly created role', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/createRole/', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          statusMessage: 'Success'
        },
        status: 200
      })

      const result = await alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        roleType: 'Amazon EC2',
        includeDefaultPolicy: 1,
        _fetch
      })

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true
      })
    })
  })

  describe('createNonServiceRole', () => {

    it('should return information about the newly created role', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/createNonServiceRole/', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          statusMessage: 'Success'
        },
        status: 200
      })

      const result = await alks.createNonServiceRole({
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
      })

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true
      })
    })
  })

  describe('listAWSAccountRoles', () => {

    it('should return a list of aws roles', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/listAWSAccountRoles/', {
        body: {
          jsonAWSRoleList: '["arn:aws:iam::123:role/acct-managed/arn1","arn:aws:iam::123:role/acct-managed/arn2"]',
          statusMessage: null
        },
        status: 200
      })

      const result = await alks.listAWSAccountRoles({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        _fetch
      })

      expect(result).to.have.members(['arn1','arn2'])
    })
  })

  describe('deleteRole', () => {

    it('should return true when successful', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/deleteRole/', {
        body: { statusMessage: 'Success' },
        status: 200
      })

      const result = await alks.deleteRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        _fetch
      })

      expect(result).to.be.true
    })
  })

  describe('createAccessKeys', () => {

    it('should return keys and information about the keys', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/accessKeys/', {
        body: { iamUserArn: 'anIAMUserArn', accessKey: 'foo', secretKey: 'bar', addedIAMUserToGroup: true },
        status: 200
      })

      const result = await alks.createAccessKeys({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        iamUserName: 'awsUserName',
        _fetch
      })

      expect(result).to.deep.include({
        iamUserArn: 'anIAMUserArn',
        accessKey: 'foo',
        secretKey: 'bar',
        addedIAMUserToGroup: true
      })
    })
  })

  describe('deleteIAMUser', () => {

    it('should return true if successful', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/IAMUser/', {
        body: { statusMessage: 'Success' },
        status: 200
      }, { method: 'DELETE' })

      const result = await alks.deleteIAMUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        riamUserName: 'awsUserName',
        _fetch
      })

      expect(result).to.be.true
    })
  })

  describe('create', () => {

    it('should return a functional alks object', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getKeys/', {
        body: { accessKey: 'foo', secretKey: 'bar', sessionToken: 'baz', statusMessage: 'Success' },
        status: 200
      })

      const myAlks = await alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      const keys = await myAlks.getKeys({
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2
      })

      expect(keys).to.include.keys('accessKey', 'secretKey', 'sessionToken')
    })

    it('should return a functional alks object without requiring any optional properties', async () => {
      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/getAccounts/', {
        body: {
          statusMessage: 'Success',
          accountListRole: {
            '1234 - foobar': [{ account: '1234', role: 'role1', iamKeyActive: true }],
            '2345 - foobar': [{ account: '2345', role: 'role2', iamKeyActive: false }],
          }
        },
        status: 200
      })

      const myAlks = await alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      const accounts = await myAlks.getAccounts()

      expect(accounts).to.deep.include({account: '1234 - foobar', role: 'role1', iamKeyActive: true })
    })

    it('should return a copy with defaults from the passed-in alks object', async () => {
      const alks1 = await alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      })

      const alks2 = await alks1.create({foo: 'bar'})

      expect(alks2.defaults).to.have.all.keys(['baseUrl', 'accessToken', 'foo', '_fetch'])
    })
  })

  describe('version', () => {

    it(`should return ALKS's version`, async () => {

      const _fetch = fetchMock.sandbox().mock('https://your.alks-host.com/version/', {
        body: {
          version: '1.2.3.4'
        },
        status: 200
      })

      const myAlks = alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        _fetch
      })

      const result = await myAlks.version()

      expect(result).to.include({
        version: '1.2.3.4'
      })
    })
  })

  describe('getLoginRole', () => {

    it('should return information about a login role', async () => {
      const baseUrl = 'https://your.alks-host.com'
      const accountId = '012345678910'
      const role = 'Admin'
      const account = `${accountId}/ALKS${role}`
      const iamKeyActive = true
      const maxKeyDuration = 12

      const _fetch = fetchMock.sandbox().mock(`${baseUrl}/loginRoles/id/${accountId}/${role}/`, {
        body: {
          account,
          role,
          iamKeyActive,
          maxKeyDuration
        },
        status: 200
      })

      const myAlks = await alks.create({
        baseUrl,
        accessToken: 'abc123',
        _fetch
      })

      const result = await myAlks.getLoginRole({
        accountId,
        role
      })

      expect(result).to.include({
        account,
        role,
        iamKeyActive,
        maxKeyDuration
      })
    })
  })

  describe('getAccessToken', () => {

    it('should return an access token', async () => {
      const baseUrl = 'https://your.alks-host.com'
      const accessToken = 'abcde12345'
      const expiresIn = 3600

      const _fetch = fetchMock.sandbox().mock(`${baseUrl}/accessToken/`, {
        body: {
          accessToken,
          expiresIn
        },
        status: 200
      })

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
        _fetch
      })

      const result = await myAlks.getAccessToken()

      expect(result).to.include({
        accessToken,
        expiresIn
      })
    })
  })

  describe('getRefreshTokens', () => {

    it('should return a list of objects containing info on my refresh tokens', async () => {
      const baseUrl = 'https://your.alks-host.com'
      const refreshTokens = [
        {
          clientId: 'abcd',
          id: '01234',
          userId: 'joebob123',
          value: 'abcdefg'
        },
        {
          clientId: 'efgh',
          id: '56789',
          userId: 'bobjoe456',
          value: 'hijklmno'
        }
      ]

      const _fetch = fetchMock.sandbox().mock(`${baseUrl}/refreshTokens/`, {
        body: {
          refreshTokens
        },
        status: 200
      })

      const myAlks = await alks.create({
        baseUrl,
        accessToken: 'abc123',
        _fetch
      })

      const result = await myAlks.getRefreshTokens()

      console.log(JSON.stringify(result))

      expect(result).to.deep.equal(refreshTokens)
    })
  })

  describe('revoke', () => {

    it('should true on success', async () => {
      const baseUrl = 'https://your.alks-host.com'
      const tokenId = '01234'

      const _fetch = fetchMock.sandbox().mock(`${baseUrl}/revoke/`, {
        body: {
          statusMessage: 'Success'
        },
        status: 200
      })

      const myAlks = await alks.create({
        baseUrl,
        accessToken: 'abc123',
        _fetch
      })

      const result = await myAlks.revoke({tokenId})

      expect(result).to.be.true
    })
  })
})
