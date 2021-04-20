import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Member } from 'src/app/API.service';
import { idPayload, MatSelectOption } from '../../models';

export class FetchMembers {
  static readonly type = '[MEMBERS] Fetch';

  constructor() {}
}

export class ForceRefetchMembers {
  static readonly type = '[MEMBERS] Refetch from network';

  constructor() {}
}
export class GetMember {
  static readonly type = '[MEMBER] Get';

  constructor(public payload: idPayload) {}
}

export class CreateMember {
  static readonly type = '[MEMBER] Create';

  constructor(
    public payload: {
      form: FormGroup;
      formDirective: FormGroupDirective;
      institutionOptions: MatSelectOption[];
    }
  ) {}
}

export class UpdateMember {
  static readonly type = '[MEMBER] Update';

  constructor(public payload: Member) {}
}

export class DeleteMember {
  static readonly type = '[MEMBER] Delete';

  constructor(public payload: idPayload) {}
}
