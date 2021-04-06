import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { uiroutes } from 'src/app/shared/common/ui-routes';
import * as queries from './../../../../../graphql/queries.graphql';
// import { AppsyncService } from './../../../../shared/api/appsync.service';
import { client } from './../../../../shared/api/appsync.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() params: object = {};
  opened: boolean;
  entities: string[] = ['Schools', 'Classes', 'Groups', 'Courses'];
  selectedEntity = this.entities[0];
  tableTitle: string = 'List of Schools';
  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listSchools();
    console.log('params from admin dashboard', this.params);
  }

  onSelectEntity(entity) {
    this.selectedEntity = entity;
  }

  createSchool = () => {
    this.router.navigateByUrl(uiroutes.ADD_SCHOOL_ROUTE);
  };

  listSchools = () => {
    // this.appsync
    //   .hc()
    //   .then({
    client
      .query({
        query: queries.ListSchools,
      })
      .then((data: any) => {
        console.log('data from listSchools ', JSON.stringify(data));
        console.log(data.data.listSchools.items);
      });
  };
}
