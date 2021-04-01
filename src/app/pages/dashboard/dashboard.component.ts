import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const ADMIN = 'Admin';
const ANNOUNCEMENTS = 'Announcements';
const ASSIGNMENTS = 'Assignments';
const GROUPS = 'Groups';
const COURSES = 'Courses';
const REPORTS = 'Reports';

const tabIndexList = {
  0: ADMIN,
  1: ANNOUNCEMENTS,
  2: ASSIGNMENTS,
  3: GROUPS,
  4: COURSES,
  5: REPORTS,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  activeTabIndex = '1';
  tabIndexList = tabIndexList;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const tabName = params['tab'];
      const indexByParams = getIndexFromTabName(tabName);
      if (indexByParams === 'NaN') {
        this.onTabChange({ index: '0' });
      }
      this.activeTabIndex = indexByParams;
    });
  }

  onTabChange($event) {
    const tabIndex = $event['index'];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: this.tabIndexList[tabIndex] },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }
}

const getIndexFromTabName = (tabName: string): string => {
  const tabIndexKeys = Object.keys(tabIndexList);
  let indexByParams = parseInt(
    tabIndexKeys.find((key) => {
      return tabIndexList[key] == tabName;
    })
  );

  return indexByParams.toString();
};
