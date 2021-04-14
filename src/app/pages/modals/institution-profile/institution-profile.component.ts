import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import { DeleteInstitution } from 'src/app/shared/ngxs/institutions/institution.actions';
@Component({
  selector: 'app-institution-profile',
  templateUrl: './institution-profile.component.html',
  styleUrls: ['./institution-profile.component.scss'],
})
export class InstitutionProfileComponent {
  profileData: any = {};

  constructor(
    public dialogRef: MatDialogRef<InstitutionProfileComponent>,
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

  editInstitution() {
    this.onNoClick();
    const id = this.profileData.id;
    this.router.navigate([uiroutes.INSTITUTION_FORM_ROUTE], {
      relativeTo: this.route,
      queryParams: { id },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  deleteInstitution() {
    this.store.dispatch(new DeleteInstitution({ id: this.profileData.id }));
  }
}
