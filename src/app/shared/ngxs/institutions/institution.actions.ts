import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Institution } from 'src/app/API.service';
import { idPayload } from '../../models';

export class FetchInstitutions {
  static readonly type = '[INSTITUTIONS] Fetch';

  constructor() {}
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
