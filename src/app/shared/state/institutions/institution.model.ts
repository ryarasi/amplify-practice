import { Institution } from 'src/app/API.service';
import { FetchPolicy } from '../../common/models';

export const emptyInstitutionFormRecord: Institution = {
  __typename: 'Institution',
  id: null,
  name: null,
  location: null,
  city: null,
  website: null,
  phone: null,
  logo: null,
  bio: null,
};
export interface InstitutionStateModel {
  institutions: Institution[];
  fetchPolicy: FetchPolicy;
  paginationTokens: object;
  pageIndex: number;
  previousPageDisabled: boolean;
  nextPageDisabled: boolean;
  institutionFormId: string;
  institutionFormRecord: Institution;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultInstitutionState: InstitutionStateModel = {
  institutions: [],
  fetchPolicy: null,
  paginationTokens: { 1: null },
  pageIndex: 1,
  nextPageDisabled: true,
  previousPageDisabled: true,
  institutionFormId: null,
  institutionFormRecord: emptyInstitutionFormRecord,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};
