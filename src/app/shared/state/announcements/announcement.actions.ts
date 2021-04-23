import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Announcement } from 'src/app/API.service';
import { SearchParams } from '../../abstract/master-grid/table.model';
import { idPayload, MatSelectOption } from '../../common/models';

export class FetchAnnouncements {
  static readonly type = '[ANNOUNCEMENTS] Fetch';

  constructor(public payload: { searchParams?: SearchParams }) {}
}

export class ForceRefetchAnnouncements {
  static readonly type = '[ANNOUNCEMENTS] Refetch from network';

  constructor(public payload: { searchParams?: SearchParams }) {}
}
export class GetAnnouncement {
  static readonly type = '[ANNOUNCEMENT] Get';

  constructor(public payload: idPayload) {}
}

export class CreateAnnouncement {
  static readonly type = '[ANNOUNCEMENT] Create';

  constructor(
    public payload: {
      form: FormGroup;
      formDirective: FormGroupDirective;
      institutionOptions: MatSelectOption[];
    }
  ) {}
}

export class UpdateAnnouncement {
  static readonly type = '[ANNOUNCEMENT] Update';

  constructor(public payload: Announcement) {}
}

export class DeleteAnnouncement {
  static readonly type = '[ANNOUNCEMENT] Delete';

  constructor(public payload: idPayload) {}
}
