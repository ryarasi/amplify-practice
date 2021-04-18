import { Member } from 'src/app/API.service';
import { FetchPolicy } from '../../models';

export const emptyMemberFormRecord: Member = {
  __typename: 'Member',
  id: null,
  name: null,
  email: null,
  institution: null,
  title: null,
  bio: null,
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
