/* 
This is an object that requires an id of type string
to be used in NGXS actions
*/
export type idPayload = {
  id: string;
};

/**
 * Cognitio User Pool Groups
 */
const ADMIN_GROUP = 'SUPER_ADMIN';
const INSTITUTION_ADMIN_GROUP = 'INSTITUTION_ADMIN';
const CLASS_ADMIN_GROUP = 'CLASS_ADMIN';
const LEARNER_GROUP = 'LEARNER';
const INSTRUCTOR_GROUP = 'INSTRUCTOR';

export const Groups = {
  ADMIN_GROUP,
  INSTITUTION_ADMIN_GROUP,
  CLASS_ADMIN_GROUP,
  LEARNER_GROUP,
  INSTRUCTOR_GROUP,
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

export type MatSelectOption = { label: string; value: string };
