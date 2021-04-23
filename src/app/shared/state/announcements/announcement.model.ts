import { Announcement } from 'src/app/API.service';
import {
  CognitoGroups,
  FetchPolicy,
  MatSelectOption,
  PaginationObject,
  startingPaginationObject,
} from '../../common/models';

export const emptyAnnouncementFormRecord: Announcement = {
  __typename: 'Announcement',
  id: null,
  title: null,
  author: null,
  message: null,
  recipients: null,
  groups: null,
  createdAt: null,
  updatedAt: null,
};

export interface AnnouncementStateModel {
  members: Announcement[];
  fetchPolicy: FetchPolicy;
  paginationObject: PaginationObject;
  memberFormId: string;
  memberFormRecord: Announcement;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultAnnouncementState: AnnouncementStateModel = {
  members: [],
  fetchPolicy: null,
  paginationObject: startingPaginationObject,
  memberFormId: null,
  memberFormRecord: emptyAnnouncementFormRecord,
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
