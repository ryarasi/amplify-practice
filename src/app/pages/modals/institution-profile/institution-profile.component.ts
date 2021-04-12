import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-institution-profile',
  templateUrl: './institution-profile.component.html',
  styleUrls: ['./institution-profile.component.scss'],
})
export class InstitutionProfileComponent {
  profileData: any = {};
  constructor(
    public dialogRef: MatDialogRef<InstitutionProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.profileData = data;
    console.log('profile data ', this.profileData);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
