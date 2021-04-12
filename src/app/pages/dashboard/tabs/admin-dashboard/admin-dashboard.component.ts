import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'aws-amplify';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import * as queries from './../../../../../graphql/queries.graphql';
import { client } from './../../../../shared/api/appsync.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() params: object = {};
  opened: boolean;
  private gridApi;
  private gridColumnApi;
  entities: string[] = ['Institutions', 'Classes', 'Groups', 'Courses'];
  selectedEntity = this.entities[0];
  tableTitle: string = `List of ${this.entities[0]}`;
  columns = [
    { field: 'name' },
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
  constructor(private router: Router) {}

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
    this.gridColumnApi = params.columnApi;
    this.listInstitutions();
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
