import { Member } from 'src/app/API.service';
import {
  CognitoGroups,
  FetchPolicy,
  MatSelectOption,
} from '../../common/models';

export const emptyMemberFormRecord: Member = {
  __typename: 'Member',
  id: null,
  name: null,
  email: null,
  type: null,
  title: null,
  bio: null,
  institution: null,
  groups: null,
  instructor: null,
  assistant: null,
  learner: null,
  createdAt: null,
  updatedAt: null,
};

export interface MemberStateModel {
  members: Member[];
  fetchPolicy: FetchPolicy;
  memberFormId: string;
  memberFormRecord: Member;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultMemberState: MemberStateModel = {
  members: [],
  fetchPolicy: null,
  memberFormId: null,
  memberFormRecord: emptyMemberFormRecord,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};

export const userTypeOptions: MatSelectOption[] = [
  { value: CognitoGroups.ADMIN_GROUP, label: 'Admin' },
  { value: CognitoGroups.INSTITUTION_ADMIN_GROUP, label: 'Institution Admin' },
  { value: CognitoGroups.CLASS_ADMIN_GROUP, label: 'Class Admin' },
  { value: CognitoGroups.LEARNER_GROUP, label: 'Learner' },
  { value: CognitoGroups.INSTRUCTOR_GROUP, label: 'Instructor' },
];
