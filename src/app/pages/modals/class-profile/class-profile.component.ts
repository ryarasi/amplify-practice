import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import { DeleteClass } from 'src/app/shared/ngxs/classes/class.actions';
@Component({
  selector: 'app-class-profile',
  templateUrl: './class-profile.component.html',
  styleUrls: ['./class-profile.component.scss'],
})
export class ClassProfileComponent {
  profileData: any = {};

  constructor(
    public dialogRef: MatDialogRef<ClassProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.profileData = data;
    console.log('profile data ', this.profileData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editClass() {
    this.onNoClick();
    const id = this.profileData.id;
    this.router.navigate([uiroutes.INSTITUTION_FORM_ROUTE], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  deleteClass() {
    this.store.dispatch(new DeleteClass({ id: this.profileData.id }));
  }
}
