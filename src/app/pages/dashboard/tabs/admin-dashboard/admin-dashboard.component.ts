import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  opened: boolean;
  iconName = 'arrow_forward';
  entities: string[] = ['Schools', 'Classes', 'Groups'];

  constructor() {}

  ngOnInit(): void {}
}
