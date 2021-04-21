import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Institution } from 'src/app/API.service';
import { SearchParams } from '../../abstract/master-grid/table.model';
import { idPayload } from '../../models';

export class FetchInstitutions {
  static readonly type = '[INSTITUTIONS] Fetch';

  constructor(public payload: { searchParams?: SearchParams }) {}
}

export class ForceRefetchInstitutions {
  static readonly type = '[INSTITUTIONS] Fetch from network';

  constructor(public payload: { searchParams?: SearchParams }) {}
}

export class GetInstitution {
  static readonly type = '[INSTITUTION] Get';

  constructor(public payload: idPayload) {}
}

export class CreateInstitution {
  static readonly type = '[INSTITUTION] Create';

  constructor(
    public payload: { form: FormGroup; formDirective: FormGroupDirective }
  ) {}
}

export class UpdateInstitution {
  static readonly type = '[INSTITUTION] Update';

  constructor(public payload: Institution) {}
}

export class DeleteInstitution {
  static readonly type = '[INSTITUTION] Delete';

  constructor(public payload: idPayload) {}
}
