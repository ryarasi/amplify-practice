import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Group } from 'src/app/API.service';
import { idPayload, MatSelectOption } from '../../models';

export class FetchGroups {
  static readonly type = '[GROUPS] Fetch';

  constructor() {}
}

export class ForceRefetchGroups {
  static readonly type = '[GROUPS] Refetch from network';

  constructor() {}
}
export class GetGroup {
  static readonly type = '[GROUP] Get';

  constructor(public payload: idPayload) {}
}

export class CreateGroup {
  static readonly type = '[GROUP] Create';

  constructor(
    public payload: {
      form: FormGroup;
      formDirective: FormGroupDirective;
      institutionOptions: MatSelectOption[];
    }
  ) {}
}

export class UpdateGroup {
  static readonly type = '[GROUP] Update';

  constructor(public payload: Group) {}
}

export class DeleteGroup {
  static readonly type = '[GROUP] Delete';

  constructor(public payload: idPayload) {}
}
