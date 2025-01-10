const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const sinon = require('sinon');
const fetchMock = require('fetch-mock').default;
const libraryVersion = require('../package.json').version;

fetchMock.mockGlobal();
const alks = require('../');

beforeEach(() => {
  fetchMock.clearHistory();
  fetchMock.removeRoutes();
});

describe('alks.js', function () {
  describe('getAccounts', () => {
    it('should return a list of accounts', async () => {
      fetchMock.post('https://your.alks-host.com/getAccounts', {
        body: {
          statusMessage: 'Success',
          accountListRole: {
            '1234 - foobar': [
              {
                account: '1234',
                role: 'role1',
                iamKeyActive: true,
                maxKeyDuration: 2,
                securityLevel: '1',
                skypieaAccount: null,
              },
            ],
            '2345 - foobar': [
              {
                account: '2345',
                role: 'role2',
                iamKeyActive: false,
                maxKeyDuration: 36,
                securityLevel: '1',
                skypieaAccount: { label: '2345-label' },
              },
            ],
          },
        },
        status: 200,
      });

      const result = await alks.getAccounts({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      expect(result).to.deep.include({
        account: '1234 - foobar',
        role: 'role1',
        iamKeyActive: true,
        maxKeyDuration: 2,
        securityLevel: '1',
        skypieaAccount: null,
      });

      expect(result).to.deep.include({
        account: '2345 - foobar',
        role: 'role2',
        iamKeyActive: false,
        maxKeyDuration: 36,
        securityLevel: '1',
        skypieaAccount: {
          label: '2345-label',
        },
      });
    });
  });

  describe('getKeys', () => {
    let consoleErrorSpy;

    beforeEach(() => {
      consoleErrorSpy = sinon.stub(console, 'error');
    });

    afterEach(() => {
      consoleErrorSpy.restore();
    });

    it('should return an access key, secret key, session token and console URL', async () => {
      fetchMock.post('https://your.alks-host.com/getKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          consoleURL: 'https://foo.com',
          sessionTime: 1,
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'abc123',
      });

      expect(result).to.have.keys(
        'accessKey',
        'secretKey',
        'sessionToken',
        'consoleURL',
        'sessionTime'
      );
    });

    it('should send basic credentials via the Authorization header', async () => {
      const userid = 'joebob123';
      const password = 'letmein';
      const base64Credentials = 'am9lYm9iMTIzOmxldG1laW4='; // Base64(username:password)
      fetchMock.post('https://your.alks-host.com/getKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          statusMessage: 'Success',
        },
        status: 200,
      });

      await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        userid,
        password,
      });

      expect(
        fetchMock.callHistory.lastCall().args[1].headers.Authorization
      ).to.equal(`Basic ${base64Credentials}`);
    });

    it('should send the library version via the User-Agent header', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          statusMessage: 'Success',
        },
        status: 200,
      });

      await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
      });

      expect(
        fetchMock.callHistory.lastCall().args[1].headers['User-Agent']
      ).to.contain(libraryVersion);
    });

    it('rejects on error with ALKS statusMessage', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', {
        body: { statusMessage: 'this is the statusMessage' },
        status: 401,
      });

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'wrongToken',
      });

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        status: 401,
        statusMessage: 'this is the statusMessage',
      });
    });

    it('rejects on error with errors array', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', {
        body: { errors: ['this is an error'], statusMessage: null },
        status: 401,
      });

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'wrongToken',
      });

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        status: 401,
        errors: ['this is an error'],
      });
    });

    it('handles a server error', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', { status: 500 });

      const result = alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        accessToken: 'abc123',
      });

      expect(result).to.be.rejectedWith({
        name: 'AlksError',
        message: 'Server Error',
        status: 500,
      });
    });

    it('warns of userid/password deprecation', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          statusMessage: 'Success',
        },
        status: 200,
      });

      await alks.getKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
        userid: 'testuser',
        password: 'testpass',
      });

      expect(consoleErrorSpy.calledWith(sinon.match('deprecated'))).to.be.true;
    });
  });

  describe('getIAMKeys', () => {
    it('should return an access key, secret key, session token and console URL', async () => {
      fetchMock.route('https://your.alks-host.com/getIAMKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          consoleURL: 'https://foo.com',
          sessionTime: 1,
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.getIAMKeys({
        baseUrl: 'https://your.alks-host.com',
        account: 'anAccount',
        role: 'IAMAdmin',
        sessionTime: 1,
        accessToken: 'abc123',
      });

      expect(result).to.have.keys(
        'accessKey',
        'secretKey',
        'sessionToken',
        'consoleURL',
        'sessionTime'
      );
    });
  });

  describe('getAllAWSRoleTypes', () => {
    it('should return a list of role types', async () => {
      const roleTypes = [
        {
          roleTypeName: 'AWS Lambda',
          defaultArns: ['0'],
          trustRelationship: {
            Version: '2012-10-17',
            Statement: [
              {
                Action: 'sts:AssumeRole',
                Effect: 'Allow',
                Principal: {
                  Service: 'lambda',
                },
              },
            ],
          },
        },
        {
          roleTypeName: 'AWS Config',
          defaultArns: ['arn:aws:iam::aws:policy/service-role/AWSConfigRole'],
          trustRelationship: {
            Version: '2012-10-17',
            Statement: [
              {
                Action: 'sts:AssumeRole',
                Effect: 'Allow',
                Principal: {
                  Service: 'config',
                },
                Sid: '',
              },
            ],
          },
        },
      ];

      fetchMock.route('https://your.alks-host.com/allAwsRoleTypes', {
        body: {
          statusMessage: 'Success',
          requestId: 'reqId',
          roleTypes: roleTypes,
        },
        status: 200,
      });

      const result = await alks.getAllAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      expect(result).to.have.deep.members(roleTypes);
    });

    it('should return a list of role types with template fields when the getDynamicValues query param is passed', async () => {
      const roleTypes = [
        {
          roleTypeName: 'AWS Lambda',
          defaultArns: ['0'],
          templateVariables: ['ABC'],
          trustRelationship: {
            Version: '2012-10-17',
            Statement: [
              {
                Action: 'sts:AssumeRole',
                Effect: 'Allow',
                Principal: {
                  Service: 'lambda',
                },
              },
            ],
          },
        },
      ];

      fetchMock.route(
        'https://your.alks-host.com/allAwsRoleTypes?getDynamicValues=true',
        {
          body: {
            statusMessage: 'Success',
            requestId: 'reqId',
            roleTypes: roleTypes,
          },
          status: 200,
        }
      );

      const result = await alks.getAllAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        getDynamicValues: true,
      });

      expect(result).to.have.deep.members(roleTypes);
    });
  });

  describe('getAWSRoleTypes', () => {
    it('should return a list of role types', async () => {
      fetchMock.route('https://your.alks-host.com/getAWSRoleTypes', {
        body: {
          roleTypes: '["AWS Lambda", "Amazon EC2"]',
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.getAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      expect(result).to.have.deep.members(['AWS Lambda', 'Amazon EC2']);
    });
  });

  describe('getNonServiceAWSRoleTypes', () => {
    it('should return a list of role types', async () => {
      fetchMock.route('https://your.alks-host.com/getNonServiceAWSRoleTypes', {
        body: {
          roleTypes: '["AWS Lambda", "Amazon EC2"]',
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.getNonServiceAWSRoleTypes({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      expect(result).to.have.deep.members(['AWS Lambda', 'Amazon EC2']);
    });
  });

  describe('getAccountRole', () => {
    it('should return the Role object representation of the https response', async () => {
      fetchMock.route('https://your.alks-host.com/getAccountRole', {
        body: {
          roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
          roleName: 'awsRoleName',
          basicAuthUsed: false,
          roleExists: true,
          instanceProfileARN: 'anInstanceProfileArn',
          isMachineIdentity: false,
          statusMessage: 'Success',
          maxSessionDurationInSeconds: '3600',
        },
        status: 200,
      });

      const result = await alks.getAccountRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });
      expect(result).to.deep.include({
        roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        instanceProfileArn: 'anInstanceProfileArn',
        isMachineIdentity: false,
        maxSessionDurationInSeconds: '3600',
      });
    });
    it('should return the Role object representation of the https response with tags', async () => {
      fetchMock.route('https://your.alks-host.com/getAccountRole', {
        body: {
          roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
          roleName: 'awsRoleName',
          basicAuthUsed: false,
          roleExists: true,
          instanceProfileARN: 'anInstanceProfileArn',
          isMachineIdentity: false,
          tags: [
            { key: 'key1', value: 'test:key1:value1' },
            { key: 'key2', value: 'test:key2:value1' },
          ],
          maxSessionDurationInSeconds: '3600',
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.getAccountRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });
      console.log(result);

      expect(result).to.deep.include({
        roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        instanceProfileArn: 'anInstanceProfileArn',
        isMachineIdentity: false,
        tags: [
          { key: 'key1', value: 'test:key1:value1' },
          { key: 'key2', value: 'test:key2:value1' },
        ],
        maxSessionDurationInSeconds: '3600',
      });
    });

    it('should reject with an error message when the role is not found', async () => {
      fetchMock.route('https://your.alks-host.com/getAccountRole', {
        body: { roleARN: null, roleExists: false, statusMessage: 'Success' },
        status: 200,
      });

      const result = alks.getAccountRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });

      expect(result).to.be.rejectedWith(
        'Role awsRoleName does not exist in this account'
      );
    });
  });

  describe('updateRole', () => {
    it('should return the Role object representation of the https response', async () => {
      fetchMock.route(
        'https://your.alks-host.com/role',
        {
          body: {
            roleArn:
              'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
            roleName: 'awsRoleName',
            basicAuthUsed: false,
            roleExists: true,
            instanceProfileARN: 'anInstanceProfileArn',
            isMachineIdentity: false,
            statusMessage: 'Success',
          },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = await alks.updateRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });
      expect(result).to.deep.include({
        roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        instanceProfileArn: 'anInstanceProfileArn',
        isMachineIdentity: false,
      });
    });
    it('should return the Role object representation of the https response with tags', async () => {
      fetchMock.route(
        'https://your.alks-host.com/role',
        {
          body: {
            roleArn:
              'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
            roleName: 'awsRoleName',
            basicAuthUsed: false,
            roleExists: true,
            instanceProfileARN: 'anInstanceProfileArn',
            isMachineIdentity: false,
            tags: [
              { key: 'key1', value: 'test:key1:value1' },
              { key: 'key2', value: 'test:key2:value1' },
            ],
            statusMessage: 'Success',
          },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = await alks.updateRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });
      expect(result).to.deep.include({
        roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        instanceProfileArn: 'anInstanceProfileArn',
        isMachineIdentity: false,
        tags: [
          { key: 'key1', value: 'test:key1:value1' },
          { key: 'key2', value: 'test:key2:value1' },
        ],
      });
    });

    it('should return success when a trust policy is updated', async () => {
      fetchMock.route(
        'https://your.alks-host.com/role',
        {
          body: {
            roleArn:
              'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
            roleName: 'awsRoleName',
            basicAuthUsed: false,
            roleExists: true,
            instanceProfileARN: 'anInstanceProfileArn',
            isMachineIdentity: false,
            tags: [
              { key: 'key1', value: 'test:key1:value1' },
              { key: 'key2', value: 'test:key2:value1' },
            ],
            statusMessage: 'Success',
          },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = await alks.updateRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        tags: [
          { key: 'key1', value: 'test:key1:value1' },
          { key: 'key2', value: 'test:key2:value1' },
        ],
        trustPolicy: { key: 'foo', value: 'bar' },
      });
      expect(result).to.deep.include({
        roleArn: 'arn:aws:iam::12391238912383:role/acct-managed/awsRoleName',
        instanceProfileArn: 'anInstanceProfileArn',
        isMachineIdentity: false,
        tags: [
          { key: 'key1', value: 'test:key1:value1' },
          { key: 'key2', value: 'test:key2:value1' },
        ],
      });
    });

    it('should reject with an error message when the role is not found', async () => {
      fetchMock.route(
        'https://your.alks-host.com/role',
        {
          body: { roleARN: null, roleExists: false, statusMessage: 'Success' },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = alks.updateRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        tags: [
          { key: 'key1', value: 'test:key1:value1' },
          { key: 'key2', value: 'test:key2:value1' },
        ],
      });

      expect(result).to.be.rejectedWith(
        'Role awsRoleName does not exist in this account'
      );
    });
  });

  describe('createRole', () => {
    it('should return information about the newly created role', async () => {
      fetchMock.route('https://your.alks-host.com/createRole', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        roleType: 'Amazon EC2',
        includeDefaultPolicy: 1,
      });

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
      });
    });
    it('should return information about the newly created role with tags', async () => {
      fetchMock.route('https://your.alks-host.com/createRole', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          tags: [
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' },
          ],
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        roleType: 'Amazon EC2',
        includeDefaultPolicy: 1,
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });
    });
    it('should return information about the newly created role with trust policy', async () => {
      fetchMock.route('https://your.alks-host.com/createRole', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          statusMessage: 'Success',
        },
        status: 200,
      });

      const result = await alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        trustPolicy: { key: 'foo' },
        includeDefaultPolicy: 1,
      });

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
      });
    });

    it('should throw error if both trustPolicy and roleType provided', async () => {
      fetchMock.route('https://your.alks-host.com/createRole', {
        body: {},
      });
      const result = alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        roleType: 'Amazon EC2',
        trustPolicy: { key: 'foo' },
        includeDefaultPolicy: 1,
      });

      expect(result).to.be.rejectedWith(
        `Must include roleType or trustPolicy, but not both.`
      );
    });
    it('should throw error if neither trustPolicy or roleType provided', async () => {
      fetchMock.route('https://your.alks-host.com/createRole', {
        body: {},
      });

      const result = alks.createRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
        includeDefaultPolicy: 1,
      });

      expect(result).to.be.rejectedWith(
        `Must include roleType or trustPolicy, but not both.`
      );
    });
  });

  describe('createNonServiceRole', () => {
    it('should return information about the newly created role', async () => {
      fetchMock.route('https://your.alks-host.com/createNonServiceRole', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          statusMessage: 'Success',
        },
        status: 200,
      });

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
      });

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
      });
    });
    it('should return information about the newly created role with tags', async () => {
      fetchMock.route('https://your.alks-host.com/createNonServiceRole', {
        body: {
          roleArn: 'aRoleArn',
          denyArns: 'denyArn1,denyArn2',
          instanceProfileArn: 'anInstanceProfileArn',
          addedRoleToInstanceProfile: true,
          tags: [
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' },
          ],
          statusMessage: 'Success',
        },
        status: 200,
      });

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
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });

      expect(result).to.deep.include({
        roleArn: 'aRoleArn',
        denyArns: ['denyArn1', 'denyArn2'],
        instanceProfileArn: 'anInstanceProfileArn',
        addedRoleToInstanceProfile: true,
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });
    });
  });

  describe('awsAccountRoles', () => {
    it('should return a list of roles', async () => {
      const awsRoleList = [
        {
          roleArn: 'arn:aws:iam::805619180788:role/acct-managed/MyCustomRole1',
          isMachineIdentity: false,
          assumeRolePolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Action: 'sts:AssumeRole',
                Effect: 'Allow',
                Principal: {
                  Service: 's3.amazonaws.com',
                },
              },
            ],
          },
        },
        {
          roleArn: 'arn:aws:iam::805619180788:role/acct-managed/MyCustomRole2',
          isMachineIdentity: true,
          assumeRolePolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Action: 'sts:AssumeRole',
                Effect: 'Allow',
                Principal: {
                  Service: 's3.amazonaws.com',
                },
              },
            ],
          },
        },
      ];

      fetchMock.route(
        'https://your.alks-host.com/awsAccountRoles?account=1234567890',
        {
          body: {
            statusMessage: 'Success',
            requestId: 'reqId',
            awsRoleList: awsRoleList,
          },
          status: 200,
        }
      );

      const result = await alks.awsAccountRoles({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: '1234567890',
      });

      expect(result).to.have.deep.members(awsRoleList);
    });
  });

  describe('listAWSAccountRoles', () => {
    it('should return a list of aws roles', async () => {
      fetchMock.route('https://your.alks-host.com/listAWSAccountRoles', {
        body: {
          jsonAWSRoleList:
            '["arn:aws:iam::123:role/acct-managed/arn1","arn:aws:iam::123:role/acct-managed/arn2"]',
          statusMessage: null,
        },
        status: 200,
      });

      const result = await alks.listAWSAccountRoles({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
      });

      expect(result).to.have.members(['arn1', 'arn2']);
    });
  });

  describe('deleteRole', () => {
    it('should return true when successful', async () => {
      fetchMock.route('https://your.alks-host.com/deleteRole', {
        body: { statusMessage: 'Success' },
        status: 200,
      });

      const result = await alks.deleteRole({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        roleName: 'awsRoleName',
      });

      expect(result).to.be.true;
    });
  });

  describe('createAccessKeys', () => {
    it('should return keys and information about the keys', async () => {
      fetchMock.route('https://your.alks-host.com/accessKeys', {
        body: {
          iamUserArn: 'anIAMUserArn',
          accessKey: 'foo',
          secretKey: 'bar',
          addedIAMUserToGroup: true,
        },
        status: 200,
      });

      const result = await alks.createAccessKeys({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        iamUserName: 'awsUserName',
      });

      expect(result).to.deep.include({
        iamUserArn: 'anIAMUserArn',
        accessKey: 'foo',
        secretKey: 'bar',
        addedIAMUserToGroup: true,
      });
    });
  });

  describe('getIamUser', () => {
    it('should return accessKey and info about the user, including tags', async () => {
      fetchMock.route(
        'https://your.alks-host.com/iam-users/id/anAccountId/anIamUserName',
        {
          body: {
            item: {
              arn: 'anIAMUserArn',
              accountId: 'anAccountId',
              userName: 'anIamUserName',
              accessKey: 'anAccessKey',
              tags: [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' },
              ],
            },
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const result = await alks.getIamUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'anAccessKey',
        account: 'anAccountId',
        iamUserName: 'anIamUserName',
      });

      expect(result).to.deep.include({
        arn: 'anIAMUserArn',
        accessKey: 'anAccessKey',
        userName: 'anIamUserName',
        accountId: 'anAccountId',
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });
    });
    it('should return keys and information about the user even when no tags present', async () => {
      fetchMock.route(
        'https://your.alks-host.com/iam-users/id/anAccountId/anIamUserName',
        {
          body: {
            item: {
              arn: 'anIAMUserArn',
              accountId: 'anAccountId',
              userName: 'anIamUserName',
              accessKey: 'anAccessKey',
            },
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const result = await alks.getIamUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'anAccessKey',
        account: 'anAccountId',
        iamUserName: 'anIamUserName',
      });

      expect(result).to.deep.include({
        arn: 'anIAMUserArn',
        accessKey: 'anAccessKey',
        userName: 'anIamUserName',
        accountId: 'anAccountId',
      });
    });
  });

  describe('updateIamUser', () => {
    it('should return keys and information about the updated user', async () => {
      fetchMock.route(
        'https://your.alks-host.com/iam-users/id/anAccountId/anIamUserName',
        {
          body: {
            item: {
              arn: 'anIAMUserArn',
              accountId: 'anAccountId',
              userName: 'anIamUserName',
              accessKey: 'anAccessKey',
              tags: [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' },
              ],
            },
          },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = await alks.updateIamUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'anAccessKey',
        account: 'anAccountId',
        iamUserName: 'anIamUserName',
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });

      expect(result).to.deep.include({
        arn: 'anIAMUserArn',
        accessKey: 'anAccessKey',
        userName: 'anIamUserName',
        accountId: 'anAccountId',
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });
    });
    it('should return keys and information about the updated user when no tags included in request', async () => {
      fetchMock.route(
        'https://your.alks-host.com/iam-users/id/anAccountId/anIamUserName',
        {
          body: {
            item: {
              arn: 'anIAMUserArn',
              accountId: 'anAccountId',
              userName: 'anIamUserName',
              accessKey: 'anAccessKey',
              tags: [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' },
              ],
            },
          },
          status: 200,
        },
        { method: 'PATCH' }
      );

      const result = await alks.updateIamUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'anAccessKey',
        account: 'anAccountId',
        iamUserName: 'anIamUserName',
      });

      expect(result).to.deep.include({
        arn: 'anIAMUserArn',
        accessKey: 'anAccessKey',
        userName: 'anIamUserName',
        accountId: 'anAccountId',
        tags: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
      });
    });
  });

  describe('deleteIAMUser', () => {
    it('should return true if successful', async () => {
      fetchMock.route(
        'https://your.alks-host.com/IAMUser',
        {
          body: { statusMessage: 'Success' },
          status: 200,
        },
        { method: 'DELETE' }
      );

      const result = await alks.deleteIAMUser({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
        account: 'anAccount',
        role: 'Admin',
        riamUserName: 'awsUserName',
      });

      expect(result).to.be.true;
    });
  });

  describe('create', () => {
    it('should return a functional alks object', async () => {
      fetchMock.route('https://your.alks-host.com/getKeys', {
        body: {
          accessKey: 'foo',
          secretKey: 'bar',
          sessionToken: 'baz',
          statusMessage: 'Success',
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      const keys = await myAlks.getKeys({
        account: 'anAccount',
        role: 'PowerUser',
        sessionTime: 2,
      });

      expect(keys).to.include.keys('accessKey', 'secretKey', 'sessionToken');
    });

    it('should return a functional alks object without requiring any optional properties', async () => {
      fetchMock.route('https://your.alks-host.com/getAccounts', {
        body: {
          statusMessage: 'Success',
          accountListRole: {
            '1234 - foobar': [
              {
                account: '1234',
                role: 'role1',
                iamKeyActive: true,
                maxKeyDuration: 2,
                securityLevel: '1',
                skypieaAccount: null,
              },
            ],
            '2345 - foobar': [
              {
                account: '2345',
                role: 'role2',
                iamKeyActive: false,
                maxKeyDuration: 36,
                securityLevel: '1',
                skypieaAccount: null,
              },
            ],
          },
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      const accounts = await myAlks.getAccounts();
      expect(accounts).to.deep.include({
        account: '2345 - foobar',
        role: 'role2',
        iamKeyActive: false,
        maxKeyDuration: 36,
        securityLevel: '1',
        skypieaAccount: null,
      });
    });

    it('should return a copy with defaults from the passed-in alks object', async () => {
      fetchMock.route('https://your.alks-host.com/version', {
        body: {
          version: '1.2.3.4',
        },
        status: 200,
      });

      const alks1 = alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      const alks2 = await alks1.create({});

      const result = await alks2.version();

      expect(result).to.include({
        version: '1.2.3.4',
      });
    });
  });

  describe('version', () => {
    it(`should return ALKS's version`, async () => {
      fetchMock.route('https://your.alks-host.com/version', {
        body: {
          version: '1.2.3.4',
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl: 'https://your.alks-host.com',
        accessToken: 'abc123',
      });

      const result = await myAlks.version();

      expect(result).to.include({
        version: '1.2.3.4',
      });
    });
  });

  describe('getLoginRole', () => {
    it('should return information about a login role', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';
      const role = 'Admin';
      const account = `${accountId}/ALKS${role}`;
      const iamKeyActive = true;
      const maxKeyDuration = 12;

      fetchMock.route(`${baseUrl}/loginRoles/id/${accountId}/${role}`, {
        body: {
          loginRole: {
            account,
            role,
            iamKeyActive,
            maxKeyDuration,
          },
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getLoginRole({
        accountId,
        role,
      });

      expect(result).to.include({
        account,
        role,
        iamKeyActive,
        maxKeyDuration,
      });
    });
  });

  describe('getAccessToken', () => {
    it('should return an access token', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accessToken = 'abcde12345';
      const expiresIn = 3600;

      fetchMock.route(`${baseUrl}/accessToken`, {
        body: {
          accessToken,
          expiresIn,
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getAccessToken();

      expect(result).to.include({
        accessToken,
        expiresIn,
      });
    });
  });

  describe('getRefreshTokens', () => {
    it('should return a list of objects containing info on my refresh tokens', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const refreshTokens = [
        {
          clientId: 'abcd',
          id: '01234',
          userId: 'joebob123',
          value: 'abcdefg',
        },
        {
          clientId: 'efgh',
          id: '56789',
          userId: 'bobjoe456',
          value: 'hijklmno',
        },
      ];

      fetchMock.route(`${baseUrl}/refreshTokens`, {
        body: {
          refreshTokens,
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getRefreshTokens();

      expect(result).to.deep.equal(refreshTokens);
    });
  });

  describe('revoke', () => {
    it('should return true on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const tokenId = '01234';

      fetchMock.route(`${baseUrl}/revoke`, {
        body: {
          statusMessage: 'Success',
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.revoke({ tokenId });

      expect(result).to.be.true;
    });
  });

  describe('addRoleMachineIdentity', () => {
    it('should return the arn on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const roleARN = 'arn:aws:iam::123:role/acct-managed/awsRoleName';

      fetchMock.route(`${baseUrl}/roleMachineIdentity`, {
        body: {
          machineIdentityArn: 'arn:aws:iam::123:role/acct-managed/awsRoleName',
        },
        status: 200,
      });

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.addRoleMachineIdentity({ roleARN });

      expect(result).to.have.keys('machineIdentityArn');
    });
  });

  describe('deleteRoleMachineIdentity', () => {
    it('should return the arn on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const roleARN = 'arn:aws:iam::123:role/acct-managed/awsRoleName';

      fetchMock.route(
        `${baseUrl}/roleMachineIdentity`,
        {
          body: {
            machineIdentityArn:
              'arn:aws:iam::123:role/acct-managed/awsRoleName',
          },
          status: 200,
        },
        { method: 'DELETE' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.deleteRoleMachineIdentity({ roleARN });

      expect(result).to.have.keys('machineIdentityArn');
    });
  });

  describe('getUserAccess', () => {
    it('should return a list of users on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';

      fetchMock.route(
        `${baseUrl}/userAccess/${accountId}`,
        {
          body: {
            users: [],
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getUserAccess({ accountId });

      expect(result).to.not.be.null;
    });
  });

  describe('getUserAccessByRole', () => {
    it('should return a map of roles to users on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';

      fetchMock.route(
        `${baseUrl}/reports/users-by-role?accountId=${accountId}`,
        {
          body: {
            users: {
              Admin: [],
            },
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getUserAccessByRole({ accountId });

      expect(result).to.be.ok;
      expect(result['Admin']).to.be.ok;
    });
  });

  describe('getUserRoleAccess', () => {
    it('should return a list of roles on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';
      const sAMAccountName = 'bob1';
      const roles = ['Admin', 'LabAdmin'];

      fetchMock.route(
        `${baseUrl}/userAccess/roles/${accountId}`,
        {
          body: {
            sAMAccountName: 'bob1',
            roles: roles,
          },
          status: 200,
        },
        { method: 'POST' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getUserRoleAccess({
        accountId,
        sAMAccountName,
      });

      expect(result).to.not.be.null;
    });
  });

  describe('getAccountOwners', () => {
    it('should return a list of account owners on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';

      const dummyOwner = {
        department: 'Executive',
        displayName: 'Joe, Bob (CAI - Atlanta)',
        email: 'joe.bob@coxautoinc.com',
        sAMAccountName: 'jbob1',
        title: 'CEO',
      };

      fetchMock.route(
        `${baseUrl}/userAccess/owners/${accountId}`,
        {
          body: {
            accountOwners: [dummyOwner],
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getAccountOwners({ accountId });

      expect(result).to.not.be.null;
      expect(result).to.not.be.empty;
      const firstElem = result[0];
      expect(firstElem).to.not.be.null;
      expect(firstElem).to.deep.equal(dummyOwner);
    });
  });

  describe('getCostTotals', () => {
    it('should return cost totals on success', async () => {
      const baseUrl = 'https://your.alks-host.com';
      const accountId = '012345678910';

      const dummyCostTotals = {
        awsAccountId: accountId,
        yyyy: '1954',
        mm: '04',
        dd: '11',
        daily: '1.01',
        weekly: '17',
        monthly: '347.0034',
        yearly: '1.034e5',
        dailyCostsByService: {
          'Amazon EC2': '0.41',
          'AWS Lambda': '0.6',
        },
        monthlyCostsByService: {
          'Amazon EC2': '200',
          'AWS Lambda': '147.0001',
          'AWS Cloudwatch': '3.3e-3',
        },
      };

      fetchMock.route(
        `${baseUrl}/costTotals/${accountId}`,
        {
          body: {
            costTotals: dummyCostTotals,
          },
          status: 200,
        },
        { method: 'GET' }
      );

      const myAlks = alks.create({
        baseUrl,
        accessToken: 'abc123',
      });

      const result = await myAlks.getCostTotals({ accountId });

      expect(result).to.not.be.null;
      expect(result).to.not.be.empty;
      expect(result).to.deep.equal(dummyCostTotals);
    });
  });
});
