import { FormGroup } from '@angular/forms';
import { Institution } from 'src/app/API.service';
import { InstitutionState } from './institution.state';

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
  institutionFormId: string;
  institutionFormRecord: Institution;
  institutionFormGroup: FormGroup;
  isFetching: boolean;
  errorFetching: boolean;
  formSubmitting: boolean;
  errorSubmitting: boolean;
}

export const defaultInstitutionState: InstitutionStateModel = {
  institutions: [],
  institutionFormId: null,
  institutionFormRecord: emptyInstitutionFormRecord,
  institutionFormGroup: null,
  isFetching: false,
  errorFetching: false,
  formSubmitting: false,
  errorSubmitting: false,
};
