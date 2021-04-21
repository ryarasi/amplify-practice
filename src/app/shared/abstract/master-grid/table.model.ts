import { NEXT_PAGE, PREVIOUS_PAGE } from '../../common/constants';
import { pageSizeOptions } from './table.config';

export const defaultPageSize = pageSizeOptions[0].value;

export class SearchParams {
  prevOrNext: string = PREVIOUS_PAGE || NEXT_PAGE;
  pageSize: number = defaultPageSize;
  sortField: string = null;
  sortOrder: string = null;
  searchQuery: string = null;
}

export interface ColWidth {
  table: string;
  colId: string;
  width: number;
}

export interface SdkTableColumn {
  field: string;
  headerName: string;
  cellRenderer?: Function | string;
  cellRendererFramework?: Object;
  cellRendererParams?: Object;
  pinned?: string;
  width?: number;
  tooltipValueGetter?: Function;
  sortable?: boolean;
  resizable?: boolean;
  headerCheckboxSelection?: boolean;
  headerCheckboxSelectionFilteredOnly?: boolean;
  checkboxSelection?: boolean;
  filter?: string | boolean;
  unSortIcon?: boolean;
}
