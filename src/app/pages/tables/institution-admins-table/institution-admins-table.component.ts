import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Member } from 'src/app/API.service';
import { SearchParams } from 'src/app/shared/abstract/master-grid/table.model';
import { MemberProfileRendererComponent } from 'src/app/shared/cell-renderers/member-profile/member-profile-renderer.component';
import { CognitoGroups } from 'src/app/shared/common/models';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import {
  FetchMembers,
  ForceRefetchMembers,
} from 'src/app/shared/state/members/member.actions';
import { MemberState } from 'src/app/shared/state/members/member.state';
import { MemberProfileComponent } from '../../modals/member-profile/member-profile.component';

@Component({
  selector: 'app-institution-admins-table',
  templateUrl: './institution-admins-table.component.html',
  styleUrls: ['./institution-admins-table.component.scss'],
})
export class InstitutionAdminsTableComponent implements OnInit {
  tableTitle: string = 'Institution Admins';
  members: object[];
  @Select(MemberState.listMembers)
  rows$: Observable<Member[]>;
  @Select(MemberState.isFetching)
  isFetching$: Observable<boolean>;
  @Select(MemberState.errorFetching)
  errorFetching$: Observable<boolean>;
  @Select(MemberState.paginationObject)
  paginationObject$: Observable<object>;

  columnFilters = {
    type: { eq: CognitoGroups.INSTITUTION_ADMIN_GROUP },
  };
  defaultColDef = {
    resizable: true,
  };
  columns = [
    {
      field: 'name',
      cellRenderer: 'memberRenderer',
    },
    { field: 'institution' },
    { field: 'type' },
  ];
  frameworkComponents = {
    memberRenderer: MemberProfileRendererComponent,
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

  fetchMembers(searchParams: SearchParams) {
    this.store.dispatch(new FetchMembers({ searchParams }));
  }

  forceRefetchMembers(searchParams: SearchParams) {
    this.store.dispatch(new ForceRefetchMembers({ searchParams }));
  }

  createMember() {
    this.router.navigateByUrl(uiroutes.MEMBER_FORM_ROUTE);
  }

  openMemberProfile(rowData) {
    const dialogRef = this.dialog.open(MemberProfileComponent, {
      data: rowData,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit(): void {}
}
