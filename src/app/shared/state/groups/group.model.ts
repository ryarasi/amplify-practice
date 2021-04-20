import { Group } from 'src/app/API.service';
import { FetchPolicy, MatSelectOption, GroupTypes } from '../../models';

export const emptyGroupFormRecord: Group = {
  __typename: 'Group',
  id: null,
  name: null,
  institution: null,
  type: null,
  admins: null,
  members: null,
  createdAt: null,
  updatedAt: null,
};

export interface GroupStateModel {
  groups: Group[];
  fetchPolicy: FetchPolicy;
  groupFormId: string;
  groupFormRecord: Group;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultGroupState: GroupStateModel = {
  groups: [],
  fetchPolicy: null,
  groupFormId: null,
  groupFormRecord: emptyGroupFormRecord,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};

export const groupTypeOptions: MatSelectOption[] = [
  { value: GroupTypes.CLASS, label: 'Class' },
  { value: GroupTypes.TEAM, label: 'Team' },
  { value: GroupTypes.COORDINATION, label: 'Coordination' },
];
