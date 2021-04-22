import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Group } from 'src/app/API.service';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import { FetchGroups } from 'src/app/shared/state/groups/group.actions';
import { GroupState } from 'src/app/shared/state/groups/group.state';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: [
    './group-dashboard.component.scss',
    './../../../../../../app/shared/common/shared-styles.css',
  ],
})
export class GroupDashboardComponent implements OnInit {
  @Select(GroupState.listGroups)
  groups$: Observable<Group[]>;
  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new FetchGroups());
  }

  ngOnInit(): void {}

  createGroup() {
    this.router.navigateByUrl(uiroutes.GROUP_FORM_ROUTE);
  }
}
