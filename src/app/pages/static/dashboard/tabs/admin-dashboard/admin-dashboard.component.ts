import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

const INSTITUTIONS = 'Institutions';
const MEMBERS = 'Members';
const CLASSES = 'Classes';
const INSTITUTION_ADMINS = 'Institution Admins';
const CLASS_ADMINS = 'Class Admins';
const LEARNERS = 'Learners';

const entities = [
  INSTITUTIONS,
  MEMBERS,
  CLASSES,
  INSTITUTION_ADMINS,
  CLASS_ADMINS,
  LEARNERS,
];
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
  members: string = MEMBERS;
  classes: string = CLASSES;
  institutionAdmins: string = INSTITUTION_ADMINS;
  classAdmins: string = CLASS_ADMINS;
  learners: string = LEARNERS;

  selectedEntity = this.entities[0];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('params from admin dashboard', this.params);
  }

  onSelectEntity(entity) {
    this.selectedEntity = entity;
  }
}
