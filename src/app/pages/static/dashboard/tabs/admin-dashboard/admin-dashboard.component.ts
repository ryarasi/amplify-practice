import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionProfileRendererComponent } from 'src/app/shared/cell-renderers/institution-profile/institution-profile-renderer.component';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import * as queries from './../../../../../../graphql/queries.graphql';
import { client } from '../../../../../shared/api/appsync.service';
import { MatDialog } from '@angular/material/dialog';
import { InstitutionProfileComponent } from 'src/app/pages/modals/institution-profile/institution-profile.component';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() params: object = {};
  opened: boolean;
  gridOptions: GridOptions;
  gridApi;
  selectedRows: any[] = [];
  entities: string[] = ['Institutions', 'Classes', 'Groups', 'Courses'];
  selectedEntity = this.entities[0];
  tableTitle: string = `List of ${this.entities[0]}`;
  frameworkComponents = {
    institutionRenderer: InstitutionProfileRendererComponent,
  };
  columns = [
    {
      field: 'name',
      cellRenderer: 'institutionRenderer',
      // checkboxSelection: true, headerCheckboxSelection: true
    },
    { field: 'location' },
    { field: 'city' },
    { field: 'bio' },
  ];
  institutions: object[];
  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Fetching records...</span>';
  overlayNoRowsTemplate =
    '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No records to display</span>';
  overlayErrorTemplate =
    '<span style="padding: 10px;color: red; border: 2px solid #444; background: lightgoldenrodyellow;">There was an error while fetching data. Try again later.</span>';

  constructor(private router: Router, public dialog: MatDialog) {
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

  createSchool = () => {
    this.router.navigateByUrl(uiroutes.ADD_INSTITUTION_ROUTE);
  };

  showLoading() {
    if (this.gridApi) {
      this.gridApi.showLoadingOverlay();
    }
  }

  hideLoading() {
    if (this.gridApi) {
      this.gridApi.hideOverlay();
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.listInstitutions();
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

  listInstitutions() {
    this.showLoading();

    client
      .query({
        query: queries.ListInstitutions,
      })
      .then((res: any) => {
        this.hideLoading();
        this.institutions = res.data.listInstitutions.items;
      })
      .catch((err) => {
        console.error(err);
        this.hideLoading();
        this.institutions = [];
        this.overlayNoRowsTemplate = this.overlayErrorTemplate;
      });
  }
}
