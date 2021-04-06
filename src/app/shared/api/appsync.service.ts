import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from '../../../aws-exports';

// @Injectable()
// export class AppsyncService {
//   _hc;

//   constructor() {
//     const client = new AWSAppSyncClient({
//       url: awsconfig.aws_appsync_graphqlEndpoint,
//       region: awsconfig.aws_appsync_region,
//       auth: {
//         type: awsconfig.aws_appsync_authenticationType,
//         jwtToken: async () =>
//           (await Auth.currentSession()).getAccessToken().getJwtToken(),
//       },
//       complexObjectsCredentials: () => Auth.currentCredentials(),
//       cacheOptions: {
//         dataIdFromObject: (obj: any) => `${obj.__typename}:${obj.myKey}`,
//       },
//     });
//     this._hc = client;
//   }

//   hc() {
//     return this._hc.hydrated();
//   }
// }

export const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
  complexObjectsCredentials: () => Auth.currentCredentials(),
  cacheOptions: {
    dataIdFromObject: (obj: any) => `${obj.__typename}:${obj.myKey}`,
  },
});
