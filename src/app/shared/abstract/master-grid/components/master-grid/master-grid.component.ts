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
import { pageSizeOptions } from './../../table.config';
import { ColWidth, SearchParams } from './../../table.model';
import {
  setColumnWidthsFromLocalStorage,
  updateColumnWidth,
  customWidthsExist,
} from './../../table.functions';
import { NEXT_PAGE, PREVIOUS_PAGE } from 'src/app/shared/common/constants';
@Component({
  selector: 'app-master-grid',
  templateUrl: './master-grid.component.html',
  styleUrls: ['./master-grid.component.scss'],
})
export class MasterGridComponent implements OnInit, OnChanges {
  gridApi;
  gridColumnApi;
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

  private originalSearchParams;
  pageSizeOptions: Array<Object> = pageSizeOptions.map((p) => p.value);
  staticTable = true;
  @Input() searchInputExists: boolean = false;
  @Input() tableId = '';
  @Input() addRoute = '';
  @Input() addLabel = '';
  @Input() searchParams: SearchParams = new SearchParams();
  @Output() fetchDataCallback: EventEmitter<any> = new EventEmitter();
  @Input() totalRecords = 0;
  @Input() rowHeight = 40;
  @Input() getRowHeight = null;
  @Input() tableHeightStatic;
  @Input() tableHeightClearanceInPx = 0;
  @Input() isFullWidthCell: boolean;
  @Input() fullWidthCellRenderer;
  @Input() fullWidthCellRendererParams;
  @Input() csvExportEnabled = false;
  @Input() csvExportFilename: string = new Date().toString();
  @Input() csvColumnHeaders: string[] = [];
  @Input() rowSelection: string = '';
  @Input() rowDeselection: boolean = true;
  @Input() previousPageDisabled: boolean = true;
  @Input() nextPageDisabled: boolean = true;
  selectedRows = [];
  @Output() selectionChangeCallback: EventEmitter<any> = new EventEmitter();
  private tableHeight = `100vh - var(--topnav-height) - var(--paginator-height) - var(--search-input-height) - var(--generic-padding)`;
  sortModel = [];
  currentSearchQuery = '';
  currentPage = 1;
  lastPage = 1;
  currentlyShowing = 0;
  previewPages: number[] = [];
  previewPageStyles: object[] = [];
  isFetchingCSVDownload = false;
  csvDownloadReady = false;
  calculateTableHeight = () => {
    if (this.tableHeightStatic) {
      return this.tableHeightStatic;
    } else {
      return `calc(${this.tableHeight} - ${this.tableHeightClearanceInPx}px)`;
    }
  };
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
    this.gridColumnApi = params.columnApi;
    this.fetchRecords();
    this.sizeToFit();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
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
    console.log('from fetchRecords => ', { searchparams: this.searchParams });
    this.fetchMethod.emit([this.searchParams]);
  }

  createRecord() {
    this.createMethod.emit([]);
  }

  refreshRecords() {
    this.refreshData.emit([this.searchParams]);
  }

  onSelectionChanged = (event$) => {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectionChangeCallback.observers.length) {
      this.selectionChangeCallback.emit([this.selectedRows]);
    }
  };
  previousPage() {
    this.searchParams.prevOrNext = PREVIOUS_PAGE;
    this.fetchRecords();
  }
  nextPage() {
    this.searchParams.prevOrNext = NEXT_PAGE;
    this.fetchRecords();
  }
  onSortChanged = (event) => {
    const originalSortObject = this.originalSearchParams;
    const sortedColumn = event.columnApi
      .getColumnState()
      .find((c) => c.sort != null);
    console.log('tableSortObject => ', sortedColumn);
    let newSortField = '';
    let newSortOrder = '';
    if (sortedColumn) {
      // Getting exact fieldName in case colId is rendererd differently
      //
      newSortField = sortedColumn.colId;
      newSortOrder = sortedColumn.sort;
    }
    if (!newSortField || (!newSortOrder && originalSortObject)) {
      newSortField = originalSortObject.sortField;
      newSortOrder = originalSortObject.sortOrder;
    }
    this.searchParams.sortField = newSortField;
    this.searchParams.sortOrder = newSortOrder;
    this.fetchRecords();
  };
  onFilterChanged = (event) => {
    const filterSortModel = event.api.getFilterModel();
    console.log('filter changed', { event, filterSortModel });
  };

  onFirstDataRendered(event) {
    this.gridColumnApi = event.columnApi;
    if (customWidthsExist(this.tableId)) {
      // Setting custom widths for columns from localStorage
      this.columns = setColumnWidthsFromLocalStorage(
        this.tableId,
        this.columns
      );
    } else {
      this.sizeColumnsToFit();
    }
  }
  onRowDataChanged(event) {
    if (this.csvDownloadReady) {
      this.csvDownloadReady = false;
    }
    if (this.isFetchingCSVDownload) {
      this.isFetchingCSVDownload = false;
      this.csvDownloadReady = true;
    }
  }
  autoSizeAll() {
    const allColumnIds = this.gridColumnApi
      .getAllColumns()
      .map((col) => col.colId);
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
  sizeColumnsToFit() {
    // this.gridColumnApi.sizeColumnsToFit();
  }
  showLoadingOverlay() {
    if (this.gridApi !== undefined) {
      this.gridApi.showLoadingOverlay();
    }
  }
  hideOverlays() {
    if (this.gridApi) {
      this.gridApi.hideOverlay();
    }
  }
  onPageSizeChange(newPageSize) {
    this.searchParams.pageSize = newPageSize;
    this.fetchRecords();
  }
  onColumnResize = (event) => {
    if (event.columns.length && this.tableId) {
      event.columns.map((c) => {
        const colWidth: ColWidth = {
          table: this.tableId,
          colId: c.colDef.field,
          width: c.actualWidth,
        };
        updateColumnWidth(colWidth);
      });
    }
  };
  onColumnReorder = (event) => {
    /** If you wish, you can uncomment the following lines and
     * save it in localStorage, just like the column widths.
     */
    // const newOrder = this.gridColumnApi
    //   .getAllGridColumns()
    //   .map(col => col.colId);
    //
  };

  ngOnInit(): void {}
}
