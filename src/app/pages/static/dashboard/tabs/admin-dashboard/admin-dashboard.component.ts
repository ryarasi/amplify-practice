import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionProfileRendererComponent } from 'src/app/shared/cell-renderers/institution-profile/institution-profile-renderer.component';
import { MatDialog } from '@angular/material/dialog';
import { InstitutionProfileComponent } from 'src/app/pages/modals/institution-profile/institution-profile.component';
import { GridOptions } from 'ag-grid-community';
import { FetchInstitutions } from 'src/app/shared/ngxs/institutions/institution.actions';
import { Select, Store } from '@ngxs/store';
import { InstitutionState } from 'src/app/shared/ngxs/institutions/institution.state';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/API.service';
import { uiroutes } from 'src/app/shared/common/ui-routes';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() params: object = {};
  opened: boolean;
  entities: string[] = ['Institutions', 'Classes', 'Groups', 'Courses'];
  selectedEntity = this.entities[0];
  tableTitle: string = `List of ${this.entities[0]}`;
  institutions: object[];
  @Select(InstitutionState.listInstitutions)
  rows$: Observable<Institution[]>;
  @Select(InstitutionState.isFetching)
  isFetching$: Observable<boolean>;
  @Select(InstitutionState.errorFetching)
  errorFetching$: Observable<boolean>;

  defaultColDef = {
    resizable: true,
  };
  columns = [
    {
      field: 'name',
      cellRenderer: 'institutionRenderer',
    },
    { field: 'location' },
    { field: 'city' },
    { field: 'bio' },
  ];
  frameworkComponents = {
    institutionRenderer: InstitutionProfileRendererComponent,
  };
  gridOptions: GridOptions;
  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Fetching records...</span>';
  overlayNoRowsTemplate =
    '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No records to display</span>';
  overlayErrorTemplate =
    '<span style="padding: 10px;color: red; border: 2px solid #444; background: lightgoldenrodyellow;">There was an error while fetching data. Try again later.</span>';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private store: Store
  ) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this,
      },
    };
  }

  ngOnInit(): void {
    console.log('params from admin dashboard', this.params);
  }

  onSelectEntity(entity) {
    this.selectedEntity = entity;
  }

  fetchInstitutions() {
    this.store.dispatch(new FetchInstitutions());
  }

  createInstitution() {
    this.router.navigateByUrl(uiroutes.INSTITUTION_FORM_ROUTE);
  }

  openInstitutionProfile(rowData) {
    console.log('row data from the open dialog', rowData);
    const dialogRef = this.dialog.open(InstitutionProfileComponent, {
      data: rowData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
