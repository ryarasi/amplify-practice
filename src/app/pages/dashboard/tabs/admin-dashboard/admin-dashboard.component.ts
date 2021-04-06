import { Component, OnInit } from '@angular/core';
import AWSAppSyncClient from 'aws-appsync';
import gql from 'graphql-tag';
import listSchools from './../../../../../graphql/queries.graphql';
import { Client } from './../../../../shared/api/appsync.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  opened: boolean;
  iconName = 'arrow_forward';
  entities: string[] = ['Schools', 'Classes', 'Groups', 'Courses'];
  tableTitle: string = 'List of Schools';
  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
  constructor() {}

  ngOnInit(): void {
    this.listSchools();
  }

  listSchools = () => {
    debugger;
    Client.query({
      query: gql(listSchools),
    }).then(({ data: { listSchools } }: any) => {
      console.log(listSchools.items);
    });
  };
}
