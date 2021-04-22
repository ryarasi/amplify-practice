import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import { DeleteMember } from 'src/app/shared/state/members/member.actions';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent {
  profileData: any = {};

  constructor(
    public dialogRef: MatDialogRef<MemberProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.profileData = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editMember() {
    this.onNoClick();
    const id = this.profileData.id;
    this.router.navigate([uiroutes.INSTITUTION_FORM_ROUTE], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  deleteMember() {
    this.store.dispatch(new DeleteMember({ id: this.profileData.id }));
  }
}
