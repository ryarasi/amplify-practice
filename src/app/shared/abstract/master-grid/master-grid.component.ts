import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-master-grid',
  templateUrl: './master-grid.component.html',
  styleUrls: ['./master-grid.component.scss'],
})
export class MasterGridComponent implements OnInit, OnChanges {
  gridApi;
  columnApi;
  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center" style="padding: 10px 20px; border: 2px solid var(--shuddhi-color-translucent); border-radius: 3px; background: #fff;">Fetching records...</span>';
  overlayNoRowsTemplate =
    '<span style="padding: 10px 20px; border: 2px solid var(--shuddhi-color-translucent); border-radius: 3px; background: #fff;">No records to display</span>';
  overlayErrorTemplate =
    '<span style="padding: 10px;color: red; border: 2px solid #444; background: lightgoldenrodyellow;">There was an error while fetching data. Try again later.</span>';
  @Input()
  rows;
  @Input()
  defaultColDef;
  @Input()
  columns;
  @Input()
  frameworkComponents;
  @Input()
  gridOptions: GridOptions;
  @Input()
  isFetching: boolean;
  @Input()
  errorFetching: boolean;
  @Input()
  tableTitle: string;
  @Output()
  fetchMethod: EventEmitter<any> = new EventEmitter();
  @Output()
  createMethod: EventEmitter<any> = new EventEmitter();
  @Output()
  refreshData: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store) {}

  ngOnChanges(changes) {
    if (changes.isFetching) {
      if (this.isFetching == true) {
        this.showLoading();
      } else {
        this.hideLoading();
      }
    }
    if (changes.errorFetching) {
      if (this.errorFetching == true) {
        this.overlayNoRowsTemplate = this.overlayErrorTemplate;
      }
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.fetchRecords();
    this.sizeToFit();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll(skipHeader = false) {
    var allColumnIds = [];
    console.log('gridApi', this.gridApi);
    this.columnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });

    console.log('allColumnIds', allColumnIds);

    this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  showLoading() {
    if (this.gridApi) {
      console.log('showing loading...');
      this.gridApi.showLoadingOverlay();
    }
  }

  hideLoading() {
    if (this.gridApi) {
      console.log('hiding loading...');
      this.gridApi.hideOverlay();
    }
  }

  fetchRecords() {
    this.fetchMethod.emit([]);
  }

  createRecord() {
    this.createMethod.emit([]);
  }

  refreshRecords() {
    this.refreshData.emit([]);
  }

  ngOnInit(): void {}
}
