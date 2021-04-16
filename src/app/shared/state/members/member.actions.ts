import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Member } from 'src/app/API.service';
import { idPayload } from '../../models';

export class FetchMembers {
  static readonly type = '[CLASSES] Fetch';

  constructor() {}
}

export class ForceRefetchMembers {
  static readonly type = '[CLASSES] Refetch from network';

  constructor() {}
}
export class GetMember {
  static readonly type = '[CLASS] Get';

  constructor(public payload: idPayload) {}
}

export class CreateMember {
  static readonly type = '[CLASS] Create';

  constructor(
    public payload: { form: FormGroup; formDirective: FormGroupDirective }
  ) {}
}

export class UpdateMember {
  static readonly type = '[CLASS] Update';

  constructor(public payload: Member) {}
}

export class DeleteMember {
  static readonly type = '[CLASS] Delete';

  constructor(public payload: idPayload) {}
}
