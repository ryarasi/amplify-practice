import { Member } from 'src/app/API.service';
import { Groups, FetchPolicy, MatSelectOption } from '../../models';

export const emptyMemberFormRecord: Member = {
  __typename: 'Member',
  id: null,
  name: null,
  email: null,
  type: null,
  title: null,
  bio: null,
  institution: null,
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
  { value: Groups.ADMIN_GROUP, label: 'Admin' },
  { value: Groups.INSTITUTION_ADMIN_GROUP, label: 'Institution Admin' },
  { value: Groups.CLASS_ADMIN_GROUP, label: 'Class Admin' },
  { value: Groups.LEARNER_GROUP, label: 'Learner' },
  { value: Groups.INSTRUCTOR_GROUP, label: 'Instructor' },
];
