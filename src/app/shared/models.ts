/* 
This is an object that requires an id of type string
to be used in NGXS actions
*/
export type idPayload = {
  id: string;
};

/*
Fetch policy to be used when making Graphql queries via AWS Amplify Client
*/
export type FetchPolicy =
  | 'cache-first'
  | 'cache-and-network'
  | 'network-only'
  | 'cache-only'
  | 'no-cache'
  | 'standby';
