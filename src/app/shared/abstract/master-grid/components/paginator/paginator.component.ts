import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { pageSizeOptions } from './../../table.config';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class MasterGridPaginatorComponent implements OnChanges {
  @Input() totalRecords = 0;
  @Input() currentPage = 1;
  @Input() pageSize = 0;
  @Input() searchQuery: string;
  @Input() staticTable = true;
  searchInfoText = '';
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onPageSizeChange: EventEmitter<any> = new EventEmitter();
  pageSizeOptions: Array<any> = pageSizeOptions.map((p) => p.value);
  currentlyShowing: number;
  lastPage: number;
  showSearchTextInfo = () => {
    return typeof this.totalRecords === 'number' && this.currentlyShowing !== 0;
  };
  runOnPageChange(newPage: number): void {
    if (this.onPageChange) {
      this.onPageChange.emit([newPage]);
    }
  }
  runOnPageSizeChange(newPageSize: number): void {
    this.onPageSizeChange.emit([newPageSize]);
  }
  SetPaginationMeta = () => {
    // Calculating the last page from total records...
    this.lastPage = lastPageCalculator(this.totalRecords, this.pageSize);
    // Calculating the no. of records being shown on current page...
    if (this.staticTable) {
      this.currentlyShowing = this.totalRecords;
    } else if (this.totalRecords > this.pageSize) {
      this.currentlyShowing =
        this.currentPage <= this.lastPage
          ? this.pageSize
          : this.totalRecords % this.pageSize;
    } else {
      this.currentlyShowing = this.totalRecords;
    }
    const record = this.totalRecords > 1 ? 'records' : 'record';
    this.searchInfoText = `Showing ${this.currentlyShowing} of ${
      this.totalRecords
    } ${record}${this.searchQuery ? ` for "${this.searchQuery}"` : ''}`;
  };
  constructor() {}

  ngOnInit() {
    this.SetPaginationMeta();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Recalculating the pagination related info. on every change...
    this.SetPaginationMeta();
  }
}

/*
 * Function to calculate the last page...
 */
const lastPageCalculator = (totalRecords, pageSize) => {
  const lastPage = totalRecords / pageSize;
  if (totalRecords === 1) {
    return 1;
  } else {
    return Math.ceil(lastPage);
  }
};
