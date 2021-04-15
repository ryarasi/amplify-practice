import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Class } from 'src/app/API.service';
import { ClassProfileRendererComponent } from 'src/app/shared/cell-renderers/class-profile/class-profile-renderer.component';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import {
  FetchClasses,
  ForceRefetchClasses,
} from 'src/app/shared/ngxs/classes/class.actions';
import { ClassState } from 'src/app/shared/ngxs/classes/class.state';
import { ClassProfileComponent } from '../../modals/class-profile/class-profile.component';

@Component({
  selector: 'app-classes-table',
  templateUrl: './classes-table.component.html',
  styleUrls: ['./classes-table.component.scss'],
})
export class ClassesTableComponent implements OnInit {
  tableTitle: string = 'Classes';
  classes: object[];
  @Select(ClassState.listClasses)
  rows$: Observable<Class[]>;
  @Select(ClassState.isFetching)
  isFetching$: Observable<boolean>;
  @Select(ClassState.errorFetching)
  errorFetching$: Observable<boolean>;

  defaultColDef = {
    resizable: true,
  };
  columns = [
    {
      field: 'name',
      cellRenderer: 'classRenderer',
    },
    { field: 'institution' },
  ];
  frameworkComponents = {
    classRenderer: ClassProfileRendererComponent,
  };
  gridOptions: GridOptions;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store: Store
  ) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this,
      },
    };
  }

  fetchClasses() {
    this.store.dispatch(new FetchClasses());
  }

  forceRefetchClasses() {
    this.store.dispatch(new ForceRefetchClasses());
  }

  createClass() {
    this.router.navigateByUrl(uiroutes.INSTITUTION_FORM_ROUTE);
  }

  openClassProfile(rowData) {
    console.log('row data from the open dialog', rowData);
    const dialogRef = this.dialog.open(ClassProfileComponent, {
      data: rowData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
