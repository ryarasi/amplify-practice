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
import { emptyMemberFormRecord } from 'src/app/shared/state/members/member.model';
import { Member } from 'src/app/API.service';

@Component({
  selector: 'app-add-edit-member',
  templateUrl: './add-edit-member.component.html',
  styleUrls: [
    './add-edit-member.component.scss',
    './../../../shared/styles/shared-styles.css',
  ],
})
export class AddEditMemberComponent implements OnInit {
  formSubmitting: boolean = false;
  params: object = {};
  @Select(MemberState.getMemberFormRecord)
  memberFormRecord$: Observable<Member>;
  @Select(MemberState.formSubmitting)
  formSubmitting$: Observable<boolean>;
  memberFormRecord: Member = emptyMemberFormRecord;
  memberForm: FormGroup;

  constructor(
    private location: Location,
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.memberForm = this.setupMemberFormGroup();
    this.memberFormRecord$.subscribe((val) => {
      this.memberFormRecord = val;
      this.memberForm = this.setupMemberFormGroup(this.memberFormRecord);
      console.log('val => ', val);
      console.log('this.memberForm', this.memberForm);
    });
  }

  setupMemberFormGroup = (
    memberFormRecord: Member = emptyMemberFormRecord
  ): FormGroup => {
    return this.fb.group({
      id: [memberFormRecord.id],
      name: [memberFormRecord.name, Validators.required],
      title: [memberFormRecord.title],
      bio: [memberFormRecord.bio],
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
    this.store.dispatch(new CreateMember({ form, formDirective }));
  }
}
