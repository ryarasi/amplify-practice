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

export const CognitoGroups = {
  ADMIN_GROUP,
  INSTITUTION_ADMIN_GROUP,
  CLASS_ADMIN_GROUP,
  LEARNER_GROUP,
  INSTRUCTOR_GROUP,
};

/**
 * This is a list of group types that is part of the enum in the GraphQL schema
 */

const CLASS = 'CLASS';
const TEAM = 'TEAM';
const COORDINATION = 'COORDINATION';

export const GroupTypes = {
  CLASS,
  TEAM,
  COORDINATION,
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

export type PaginationObject = {
  paginationTokens: object;
  pageIndex: number;
  previousPageDisabled: boolean;
  nextPageDisabled: boolean;
};

export const startingPaginationObject = {
  paginationTokens: { 1: null },
  pageIndex: 1,
  nextPageDisabled: true,
  previousPageDisabled: true,
};
