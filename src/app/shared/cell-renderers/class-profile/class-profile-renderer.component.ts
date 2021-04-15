import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererParams } from 'ag-grid-community';
import { ClassProfileComponent } from 'src/app/pages/modals/class-profile/class-profile.component';

@Component({
  selector: 'app-class-profile',
  templateUrl: './class-profile-renderer.component.html',
  styleUrls: ['./class-profile-renderer.component.scss'],
})
export class ClassProfileRendererComponent {
  cellValue: string;
  rowData: any;
  params: any;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    console.log('params', params);
    this.params = params;
    this.rowData = params.data;
    this.cellValue = this.getValueToDisplay(params);
  }

  showProfile() {
    console.log('params', this.rowData);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  constructor(public dialog: MatDialog) {}

  public invokeParentMethod() {
    console.log('params from invokeparentmethod ', this.params);
    this.params.context.componentParent.openClassProfile(this.rowData);
  }
  openDialog() {
    const dialogRef = this.dialog.open(ClassProfileComponent, {
      data: this.rowData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
