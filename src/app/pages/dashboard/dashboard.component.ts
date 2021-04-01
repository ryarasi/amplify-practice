import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const tabIndexList = {
  admin: 1,
  announcement: 2,
  assignment: 3,
  course: 4,
  group: 5,
  report: 6,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  activeTab = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.activeTab = tabIndexList[params['tab']]
        ? tabIndexList[params['tab']]
        : this.activeTab;
    });
  }
  navigate($event) {
    const tabName = $event['tab']['textLabel'];
    console.log('navigate to ', $event, 'tabName', tabName);
    this.router.navigate([this.route], {
      relativeTo: this.route,
      queryParams: { tab: ['tabName'] },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true,
      // do not trigger navigation
    });
  }
}
