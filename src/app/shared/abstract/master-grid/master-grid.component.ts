import { Component, Input, OnInit, Output } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { client } from '../../api/appsync.service';

@Component({
  selector: 'app-master-grid',
  templateUrl: './master-grid.component.html',
  styleUrls: ['./master-grid.component.scss'],
})
export class MasterGridComponent implements OnInit {
  gridApi;
  rows = [];
  @Input()
  columns;
  @Input()
  frameworkComponents;
  @Input()
  gridOptions: GridOptions;
  @Input()
  fetchQuery;
  @Input()
  fetchOptions;
  @Input()
  queryResponseItemName;

  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Fetching records...</span>';
  overlayNoRowsTemplate =
    '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No records to display</span>';
  overlayErrorTemplate =
    '<span style="padding: 10px;color: red; border: 2px solid #444; background: lightgoldenrodyellow;">There was an error while fetching data. Try again later.</span>';

  constructor() {}

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
    this.fetchRecords();
  }

  fetchRecords() {
    this.showLoading();
    client
      .query({ query: this.fetchQuery })
      .then((res: any) => {
        this.hideLoading();
        this.rows = res.data[this.queryResponseItemName].items;
      })
      .catch((err) => {
        this.hideLoading();
        this.rows = [];
        this.overlayNoRowsTemplate = this.overlayErrorTemplate;
      });
  }

  ngOnInit(): void {}
}
