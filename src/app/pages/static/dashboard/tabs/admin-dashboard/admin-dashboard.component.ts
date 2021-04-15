import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
const INSTITUTIONS = 'Institutions';
const CLASSES = 'Classes';
const GROUPS = 'Groups';
const COURSES = 'Courses';

const entities = [INSTITUTIONS, CLASSES, GROUPS, COURSES];
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() params: object = {};
  opened: boolean = true;
  entities: string[] = entities;
  institutions: string = INSTITUTIONS;
  classes: string = CLASSES;
  groups: string = GROUPS;
  courses: string = COURSES;
  selectedEntity = this.entities[0];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('params from admin dashboard', this.params);
  }

  onSelectEntity(entity) {
    this.selectedEntity = entity;
  }
}
