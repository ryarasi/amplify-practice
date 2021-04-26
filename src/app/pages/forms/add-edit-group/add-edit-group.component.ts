import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';

import {
  CreateGroup,
  GetGroup,
} from 'src/app/shared/state/groups/group.actions';
import { GroupState } from 'src/app/shared/state/groups/group.state';
import { Observable } from 'rxjs';
import {
  emptyGroupFormRecord,
  groupTypeOptions,
} from 'src/app/shared/state/groups/group.model';
import { Group } from 'src/app/API.service';
import { InstitutionState } from 'src/app/shared/state/institutions/institution.state';
import { MatSelectOption } from 'src/app/shared/common/models';
import { FetchInstitutions } from 'src/app/shared/state/institutions/institution.actions';
import { MemberState } from 'src/app/shared/state/members/member.state';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: [
    './add-edit-group.component.scss',
    './../../../shared/common/shared-styles.css',
  ],
})
export class AddEditGroupComponent implements OnInit {
  formSubmitting: boolean = false;
  params: object = {};
  @Select(GroupState.getGroupFormRecord)
  groupFormRecord$: Observable<Group>;
  @Select(GroupState.formSubmitting)
  formSubmitting$: Observable<boolean>;
  groupFormRecord: Group = emptyGroupFormRecord;
  groupForm: FormGroup;

  @Select(InstitutionState.listInstitutionOptions)
  institutionOptions$: Observable<MatSelectOption[]>;
  @Select(MemberState.listMemberOptions)
  memberOptions$: Observable<MatSelectOption[]>;
  groupTypeOptions: MatSelectOption[] = groupTypeOptions;
  institutionOptions;

  constructor(
    private location: Location,
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.institutionOptions$.subscribe((options) => {
      this.institutionOptions = options;
    });
    this.store.dispatch(new FetchInstitutions({}));
    this.groupForm = this.setupGroupFormGroup();
    this.groupFormRecord$.subscribe((val) => {
      this.groupFormRecord = val;
      this.groupForm = this.setupGroupFormGroup(this.groupFormRecord);
    });
  }

  setupGroupFormGroup = (
    groupFormRecord: Group = emptyGroupFormRecord
  ): FormGroup => {
    return this.fb.group({
      id: [groupFormRecord.id],
      name: [groupFormRecord.name, Validators.required],
      institutionId: [groupFormRecord.institutionId, Validators.required],
      type: [groupFormRecord.type, Validators.required],
      admins: [groupFormRecord.admins],
      members: [groupFormRecord.members],
    });
  };
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      const id = params['id'];
      if (id) {
        this.store.dispatch(new GetGroup({ id }));
      }
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm(form: FormGroup, formDirective: FormGroupDirective) {
    this.store.dispatch(
      new CreateGroup({
        form,
        formDirective,
        institutionOptions: this.institutionOptions,
      })
    );
  }
}
