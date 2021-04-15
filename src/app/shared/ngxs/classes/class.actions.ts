import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Class } from 'src/app/API.service';
import { idPayload } from '../../models';

export class FetchClasses {
  static readonly type = '[CLASSES] Fetch';

  constructor() {}
}

export class ForceRefetchClasses {
  static readonly type = '[CLASSES] Refetch from network';

  constructor() {}
}
export class GetClass {
  static readonly type = '[CLASS] Get';

  constructor(public payload: idPayload) {}
}

export class CreateClass {
  static readonly type = '[CLASS] Create';

  constructor(
    public payload: { form: FormGroup; formDirective: FormGroupDirective }
  ) {}
}

export class UpdateClass {
  static readonly type = '[CLASS] Update';

  constructor(public payload: Class) {}
}

export class DeleteClass {
  static readonly type = '[CLASS] Delete';

  constructor(public payload: idPayload) {}
}
