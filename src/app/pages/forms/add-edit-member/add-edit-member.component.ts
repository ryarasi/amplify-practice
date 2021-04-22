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
  CreateMember,
  GetMember,
} from 'src/app/shared/state/members/member.actions';
import { MemberState } from 'src/app/shared/state/members/member.state';
import { Observable } from 'rxjs';
import {
  emptyMemberFormRecord,
  userTypeOptions,
} from 'src/app/shared/state/members/member.model';
import { Member } from 'src/app/API.service';
import { InstitutionState } from 'src/app/shared/state/institutions/institution.state';
import { FetchInstitutions } from 'src/app/shared/state/institutions/institution.actions';
import { MatSelectOption } from 'src/app/shared/common/models';

@Component({
  selector: 'app-add-edit-member',
  templateUrl: './add-edit-member.component.html',
  styleUrls: [
    './add-edit-member.component.scss',
    './../../../shared/common/shared-styles.css',
  ],
})
export class AddEditMemberComponent implements OnInit {
  formSubmitting: boolean = false;
  params: object = {};
  @Select(InstitutionState.listInstitutionOptions)
  institutionOptions$: Observable<MatSelectOption[]>;
  @Select(MemberState.getMemberFormRecord)
  memberFormRecord$: Observable<Member>;
  @Select(MemberState.formSubmitting)
  formSubmitting$: Observable<boolean>;
  memberFormRecord: Member = emptyMemberFormRecord;
  memberForm: FormGroup;
  userTypeOptions: MatSelectOption[] = userTypeOptions;
  institutionOptions;
  titleMaxLength = 60;
  bioMaxLength = 150;

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
    this.memberForm = this.setupMemberFormGroup();
    this.memberFormRecord$.subscribe((val) => {
      this.memberFormRecord = val;
      this.memberForm = this.setupMemberFormGroup(this.memberFormRecord);
    });
  }

  setupMemberFormGroup = (
    memberFormRecord: Member = emptyMemberFormRecord
  ): FormGroup => {
    return this.fb.group({
      id: [memberFormRecord.id],
      name: [memberFormRecord.name, Validators.required],
      email: [memberFormRecord.email, [Validators.required, Validators.email]],
      type: [memberFormRecord.type, Validators.required],
      institution: [memberFormRecord.institution, Validators.required],
      title: [
        memberFormRecord.title,
        Validators.maxLength(this.titleMaxLength),
      ],
      bio: [memberFormRecord.bio, Validators.maxLength(this.bioMaxLength)],
    });
  };
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      const id = params['id'];
      if (id) {
        this.store.dispatch(new GetMember({ id }));
      }
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm(form: FormGroup, formDirective: FormGroupDirective) {
    this.store.dispatch(
      new CreateMember({
        form,
        formDirective,
        institutionOptions: this.institutionOptions,
      })
    );
  }
}
