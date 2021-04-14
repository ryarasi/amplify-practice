import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/shared/api/appsync.service';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import * as mutations from './../../../../graphql/mutations.graphql';
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
    private router: Router
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
    client
      .mutate({
        mutation: mutations.DeleteInstitution,
        variables: {
          input: {
            id: this.profileData.id,
          },
        },
      })
      .then((res: any) => {
        console.log('Item was deleted succesfully!', res);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }
}
