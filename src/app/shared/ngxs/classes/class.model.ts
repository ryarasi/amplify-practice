import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Class } from 'src/app/API.service';
import { FetchPolicy } from '../../models';

export const emptyClassFormRecord: Class = {
  __typename: 'Class',
  id: null,
  name: null,
  institution: null,
  admins: null,
  learners: null,
  createdAt: null,
  updatedAt: null,
};
export interface ClassStateModel {
  classes: Class[];
  fetchPolicy: FetchPolicy;
  classFormId: string;
  classFormRecord: Class;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultClassState: ClassStateModel = {
  classes: [],
  fetchPolicy: null,
  classFormId: null,
  classFormRecord: emptyClassFormRecord,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};
