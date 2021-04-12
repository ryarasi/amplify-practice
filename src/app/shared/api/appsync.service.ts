import Auth from '@aws-amplify/auth';
import AWSAppSyncClient from 'aws-appsync';
import awsconfig from '../../../aws-exports';

export const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
  disableOffline: true,
});
