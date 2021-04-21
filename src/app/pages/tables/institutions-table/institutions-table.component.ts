import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/API.service';
import { SearchParams } from 'src/app/shared/abstract/master-grid/table.model';
import { InstitutionProfileRendererComponent } from 'src/app/shared/cell-renderers/institution-profile/institution-profile-renderer.component';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import {
  ForceRefetchInstitutions,
  FetchInstitutions,
} from 'src/app/shared/state/institutions/institution.actions';
import { InstitutionState } from 'src/app/shared/state/institutions/institution.state';
import { InstitutionProfileComponent } from '../../modals/institution-profile/institution-profile.component';

@Component({
  selector: 'app-institutions-table',
  templateUrl: './institutions-table.component.html',
  styleUrls: ['./institutions-table.component.scss'],
})
export class InstitutionsTableComponent implements OnInit {
  tableTitle: string = 'Institutions';
  institutions: object[];
  @Select(InstitutionState.listInstitutions)
  rows$: Observable<Institution[]>;
  @Select(InstitutionState.isFetching)
  isFetching$: Observable<boolean>;
  @Select(InstitutionState.errorFetching)
  errorFetching$: Observable<boolean>;
  @Select(InstitutionState.previousPageDisabled)
  previousPageDisabled$: Observable<boolean>;
  @Select(InstitutionState.nextPageDisabled)
  nextPageDisabled$: Observable<boolean>;

  defaultColDef = {
    resizable: true,
    sortable: true,
    comparator: () => null,
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

  fetchInstitutions(searchParams: SearchParams) {
    console.log('searchParams from institution table => ', searchParams);
    this.store.dispatch(new FetchInstitutions({ searchParams }));
  }

  createInstitution() {
    this.router.navigateByUrl(uiroutes.INSTITUTION_FORM_ROUTE);
  }

  forceRefetchInstitutions(searchParams: SearchParams) {
    this.store.dispatch(new ForceRefetchInstitutions({ searchParams }));
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

  ngOnInit(): void {}
}
