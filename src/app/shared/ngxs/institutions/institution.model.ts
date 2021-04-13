import { Institution } from 'src/app/API.service';

export interface InstitutionStateModel {
  institutions: Institution[];
}

export const defaultInstitutionState: InstitutionStateModel = {
  institutions: [],
};
