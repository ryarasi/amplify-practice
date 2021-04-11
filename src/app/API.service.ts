/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateInstitutionInput = {
  id?: string | null;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
};

export type ModelInstitutionConditionInput = {
  name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  city?: ModelStringInput | null;
  website?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelInstitutionConditionInput | null> | null;
  or?: Array<ModelInstitutionConditionInput | null> | null;
  not?: ModelInstitutionConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Institution = {
  __typename: "Institution";
  id?: string;
  name?: string;
  location?: string;
  city?: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<InstitutionAdmin | null> | null;
  classes?: ModelClassConnection;
  learners?: ModelLearnerConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type InstitutionAdmin = {
  __typename: "InstitutionAdmin";
  id?: string;
  name?: string;
  institution?: Institution;
  title?: string | null;
  bio?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection";
  items?: Array<Class | null> | null;
  nextToken?: string | null;
};

export type Class = {
  __typename: "Class";
  id?: string;
  name?: string;
  institution?: Institution;
  admins?: Array<ClassAdmin | null> | null;
  learners?: ModelLearnerConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ClassAdmin = {
  __typename: "ClassAdmin";
  id?: string;
  name?: string;
  institution?: Institution;
  class?: Class;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type ModelLearnerConnection = {
  __typename: "ModelLearnerConnection";
  items?: Array<Learner | null> | null;
  nextToken?: string | null;
};

export type Learner = {
  __typename: "Learner";
  id?: string;
  name?: string;
  institution?: Institution;
  class?: Class;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type UpdateInstitutionInput = {
  id: string;
  name?: string | null;
  location?: string | null;
  city?: string | null;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
};

export type DeleteInstitutionInput = {
  id?: string | null;
};

export type CreateClassInput = {
  id?: string | null;
  name: string;
  classInstitutionId?: string | null;
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelClassConditionInput | null> | null;
  or?: Array<ModelClassConditionInput | null> | null;
  not?: ModelClassConditionInput | null;
};

export type UpdateClassInput = {
  id: string;
  name?: string | null;
  classInstitutionId?: string | null;
};

export type DeleteClassInput = {
  id?: string | null;
};

export type CreateGroupInput = {
  id?: string | null;
  name: string;
  groupInstitutionId?: string | null;
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelGroupConditionInput | null> | null;
  or?: Array<ModelGroupConditionInput | null> | null;
  not?: ModelGroupConditionInput | null;
};

export type Group = {
  __typename: "Group";
  id?: string;
  name?: string;
  institution?: Institution;
  admins?: Array<Learner | null> | null;
  learners?: Array<Learner | null> | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateGroupInput = {
  id: string;
  name?: string | null;
  groupInstitutionId?: string | null;
};

export type DeleteGroupInput = {
  id?: string | null;
};

export type CreateLearnerInput = {
  id?: string | null;
  name: string;
  learnerInstitutionId?: string | null;
  learnerClassId?: string | null;
};

export type ModelLearnerConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelLearnerConditionInput | null> | null;
  or?: Array<ModelLearnerConditionInput | null> | null;
  not?: ModelLearnerConditionInput | null;
};

export type UpdateLearnerInput = {
  id: string;
  name?: string | null;
  learnerInstitutionId?: string | null;
  learnerClassId?: string | null;
};

export type DeleteLearnerInput = {
  id?: string | null;
};

export type CreateInstitutionAdminInput = {
  id?: string | null;
  name: string;
  title?: string | null;
  bio?: string | null;
};

export type ModelInstitutionAdminConditionInput = {
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelInstitutionAdminConditionInput | null> | null;
  or?: Array<ModelInstitutionAdminConditionInput | null> | null;
  not?: ModelInstitutionAdminConditionInput | null;
};

export type UpdateInstitutionAdminInput = {
  id: string;
  name?: string | null;
  title?: string | null;
  bio?: string | null;
};

export type DeleteInstitutionAdminInput = {
  id?: string | null;
};

export type CreateClassAdminInput = {
  id?: string | null;
  name: string;
};

export type ModelClassAdminConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelClassAdminConditionInput | null> | null;
  or?: Array<ModelClassAdminConditionInput | null> | null;
  not?: ModelClassAdminConditionInput | null;
};

export type UpdateClassAdminInput = {
  id: string;
  name?: string | null;
};

export type DeleteClassAdminInput = {
  id?: string | null;
};

export type CreateCourseInput = {
  id?: string | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  courseInstructorId?: string | null;
};

export type ModelCourseConditionInput = {
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  creditHours?: ModelIntInput | null;
  and?: Array<ModelCourseConditionInput | null> | null;
  or?: Array<ModelCourseConditionInput | null> | null;
  not?: ModelCourseConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Course = {
  __typename: "Course";
  id?: string;
  instructor?: Instructor;
  assistant?: ModelCourseAssistantConnection;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<Assignment | null> | null;
  sections?: Array<CourseSection | null> | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Instructor = {
  __typename: "Instructor";
  id?: string;
  name?: string;
  title?: string | null;
  courses?: ModelCourseConnection;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection";
  items?: Array<Course | null> | null;
  nextToken?: string | null;
};

export type ModelCourseAssistantConnection = {
  __typename: "ModelCourseAssistantConnection";
  items?: Array<CourseAssistant | null> | null;
  nextToken?: string | null;
};

export type CourseAssistant = {
  __typename: "CourseAssistant";
  id?: string;
  course?: Course;
  assistant?: Assistant;
  createdAt?: string;
  updatedAt?: string;
};

export type Assistant = {
  __typename: "Assistant";
  id?: string;
  name?: string;
  course?: ModelCourseAssistantConnection;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type Assignment = {
  __typename: "Assignment";
  id?: string;
  title?: string;
  course?: Course;
  section?: CourseSection;
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<Task | null> | null;
  createdAt?: string;
  updatedAt?: string;
};

export type CourseSection = {
  __typename: "CourseSection";
  id?: string;
  name?: string;
  index?: number;
  course?: Course;
  createdAt?: string;
  updatedAt?: string;
};

export type Task = {
  __typename: "Task";
  id?: string;
  task?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCourseInput = {
  id: string;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  courseInstructorId?: string | null;
};

export type DeleteCourseInput = {
  id?: string | null;
};

export type CreateCourseSectionInput = {
  id?: string | null;
  name: string;
  index: number;
};

export type ModelCourseSectionConditionInput = {
  name?: ModelStringInput | null;
  index?: ModelFloatInput | null;
  and?: Array<ModelCourseSectionConditionInput | null> | null;
  or?: Array<ModelCourseSectionConditionInput | null> | null;
  not?: ModelCourseSectionConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCourseSectionInput = {
  id: string;
  name?: string | null;
  index?: number | null;
};

export type DeleteCourseSectionInput = {
  id?: string | null;
};

export type CreateAssignmentInput = {
  id?: string | null;
  title: string;
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
};

export type ModelAssignmentConditionInput = {
  title?: ModelStringInput | null;
  deadline?: ModelStringInput | null;
  points?: ModelIntInput | null;
  instructions?: ModelStringInput | null;
  and?: Array<ModelAssignmentConditionInput | null> | null;
  or?: Array<ModelAssignmentConditionInput | null> | null;
  not?: ModelAssignmentConditionInput | null;
};

export type UpdateAssignmentInput = {
  id: string;
  title?: string | null;
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
};

export type DeleteAssignmentInput = {
  id?: string | null;
};

export type CreateTaskInput = {
  id?: string | null;
  task: string;
  type: string;
};

export type ModelTaskConditionInput = {
  task?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type UpdateTaskInput = {
  id: string;
  task?: string | null;
  type?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreateInstructorInput = {
  id?: string | null;
  name: string;
  title?: string | null;
};

export type ModelInstructorConditionInput = {
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelInstructorConditionInput | null> | null;
  or?: Array<ModelInstructorConditionInput | null> | null;
  not?: ModelInstructorConditionInput | null;
};

export type UpdateInstructorInput = {
  id: string;
  name?: string | null;
  title?: string | null;
};

export type DeleteInstructorInput = {
  id?: string | null;
};

export type CreateAssistantInput = {
  id?: string | null;
  name: string;
};

export type ModelAssistantConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAssistantConditionInput | null> | null;
  or?: Array<ModelAssistantConditionInput | null> | null;
  not?: ModelAssistantConditionInput | null;
};

export type UpdateAssistantInput = {
  id: string;
  name?: string | null;
};

export type DeleteAssistantInput = {
  id?: string | null;
};

export type CreateCourseAssistantInput = {
  id?: string | null;
  courseAssistantCourseId?: string | null;
  courseAssistantAssistantId?: string | null;
};

export type ModelCourseAssistantConditionInput = {
  and?: Array<ModelCourseAssistantConditionInput | null> | null;
  or?: Array<ModelCourseAssistantConditionInput | null> | null;
  not?: ModelCourseAssistantConditionInput | null;
};

export type UpdateCourseAssistantInput = {
  id: string;
  courseAssistantCourseId?: string | null;
  courseAssistantAssistantId?: string | null;
};

export type DeleteCourseAssistantInput = {
  id?: string | null;
};

export type ModelInstitutionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  location?: ModelStringInput | null;
  city?: ModelStringInput | null;
  website?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelInstitutionFilterInput | null> | null;
  or?: Array<ModelInstitutionFilterInput | null> | null;
  not?: ModelInstitutionFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelInstitutionConnection = {
  __typename: "ModelInstitutionConnection";
  items?: Array<Institution | null> | null;
  nextToken?: string | null;
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelClassFilterInput | null> | null;
  or?: Array<ModelClassFilterInput | null> | null;
  not?: ModelClassFilterInput | null;
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelGroupFilterInput | null> | null;
  or?: Array<ModelGroupFilterInput | null> | null;
  not?: ModelGroupFilterInput | null;
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection";
  items?: Array<Group | null> | null;
  nextToken?: string | null;
};

export type ModelLearnerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelLearnerFilterInput | null> | null;
  or?: Array<ModelLearnerFilterInput | null> | null;
  not?: ModelLearnerFilterInput | null;
};

export type ModelInstitutionAdminFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelInstitutionAdminFilterInput | null> | null;
  or?: Array<ModelInstitutionAdminFilterInput | null> | null;
  not?: ModelInstitutionAdminFilterInput | null;
};

export type ModelInstitutionAdminConnection = {
  __typename: "ModelInstitutionAdminConnection";
  items?: Array<InstitutionAdmin | null> | null;
  nextToken?: string | null;
};

export type ModelClassAdminFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelClassAdminFilterInput | null> | null;
  or?: Array<ModelClassAdminFilterInput | null> | null;
  not?: ModelClassAdminFilterInput | null;
};

export type ModelClassAdminConnection = {
  __typename: "ModelClassAdminConnection";
  items?: Array<ClassAdmin | null> | null;
  nextToken?: string | null;
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  creditHours?: ModelIntInput | null;
  and?: Array<ModelCourseFilterInput | null> | null;
  or?: Array<ModelCourseFilterInput | null> | null;
  not?: ModelCourseFilterInput | null;
};

export type ModelCourseSectionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  index?: ModelFloatInput | null;
  and?: Array<ModelCourseSectionFilterInput | null> | null;
  or?: Array<ModelCourseSectionFilterInput | null> | null;
  not?: ModelCourseSectionFilterInput | null;
};

export type ModelCourseSectionConnection = {
  __typename: "ModelCourseSectionConnection";
  items?: Array<CourseSection | null> | null;
  nextToken?: string | null;
};

export type ModelAssignmentFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  deadline?: ModelStringInput | null;
  points?: ModelIntInput | null;
  instructions?: ModelStringInput | null;
  and?: Array<ModelAssignmentFilterInput | null> | null;
  or?: Array<ModelAssignmentFilterInput | null> | null;
  not?: ModelAssignmentFilterInput | null;
};

export type ModelAssignmentConnection = {
  __typename: "ModelAssignmentConnection";
  items?: Array<Assignment | null> | null;
  nextToken?: string | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  task?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items?: Array<Task | null> | null;
  nextToken?: string | null;
};

export type ModelInstructorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelInstructorFilterInput | null> | null;
  or?: Array<ModelInstructorFilterInput | null> | null;
  not?: ModelInstructorFilterInput | null;
};

export type ModelInstructorConnection = {
  __typename: "ModelInstructorConnection";
  items?: Array<Instructor | null> | null;
  nextToken?: string | null;
};

export type ModelAssistantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAssistantFilterInput | null> | null;
  or?: Array<ModelAssistantFilterInput | null> | null;
  not?: ModelAssistantFilterInput | null;
};

export type ModelAssistantConnection = {
  __typename: "ModelAssistantConnection";
  items?: Array<Assistant | null> | null;
  nextToken?: string | null;
};

export type ModelCourseAssistantFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelCourseAssistantFilterInput | null> | null;
  or?: Array<ModelCourseAssistantFilterInput | null> | null;
  not?: ModelCourseAssistantFilterInput | null;
};

export type CreateInstitutionMutation = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInstitutionMutation = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInstitutionMutation = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClassMutation = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClassMutation = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClassMutation = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateLearnerMutation = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateLearnerMutation = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteLearnerMutation = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateInstitutionAdminMutation = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateInstitutionAdminMutation = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteInstitutionAdminMutation = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateClassAdminMutation = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateClassAdminMutation = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteClassAdminMutation = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateCourseMutation = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseMutation = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseMutation = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseSectionMutation = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseSectionMutation = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseSectionMutation = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateAssignmentMutation = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAssignmentMutation = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAssignmentMutation = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateInstructorMutation = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateInstructorMutation = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteInstructorMutation = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateAssistantMutation = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateAssistantMutation = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteAssistantMutation = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateCourseAssistantMutation = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseAssistantMutation = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseAssistantMutation = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetInstitutionQuery = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListInstitutionsQuery = {
  __typename: "ModelInstitutionConnection";
  items?: Array<{
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetClassQuery = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClasssQuery = {
  __typename: "ModelClassConnection";
  items?: Array<{
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetGroupQuery = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListGroupsQuery = {
  __typename: "ModelGroupConnection";
  items?: Array<{
    __typename: "Group";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetLearnerQuery = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListLearnersQuery = {
  __typename: "ModelLearnerConnection";
  items?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetInstitutionAdminQuery = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListInstitutionAdminsQuery = {
  __typename: "ModelInstitutionAdminConnection";
  items?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetClassAdminQuery = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListClassAdminsQuery = {
  __typename: "ModelClassAdminConnection";
  items?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseQuery = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCoursesQuery = {
  __typename: "ModelCourseConnection";
  items?: Array<{
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseSectionQuery = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListCourseSectionsQuery = {
  __typename: "ModelCourseSectionConnection";
  items?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAssignmentQuery = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAssignmentsQuery = {
  __typename: "ModelAssignmentConnection";
  items?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetInstructorQuery = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListInstructorsQuery = {
  __typename: "ModelInstructorConnection";
  items?: Array<{
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAssistantQuery = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListAssistantsQuery = {
  __typename: "ModelAssistantConnection";
  items?: Array<{
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseAssistantQuery = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCourseAssistantsQuery = {
  __typename: "ModelCourseAssistantConnection";
  items?: Array<{
    __typename: "CourseAssistant";
    id: string;
    course?: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    assistant?: {
      __typename: "Assistant";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateInstitutionSubscription = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInstitutionSubscription = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInstitutionSubscription = {
  __typename: "Institution";
  id: string;
  name: string;
  location: string;
  city: string;
  website?: string | null;
  phone?: string | null;
  logo?: string | null;
  bio?: string | null;
  admins?: Array<{
    __typename: "InstitutionAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    title?: string | null;
    bio?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  classes?: {
    __typename: "ModelClassConnection";
    items?: Array<{
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClassSubscription = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClassSubscription = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClassSubscription = {
  __typename: "Class";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "ClassAdmin";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: {
    __typename: "ModelLearnerConnection";
    items?: Array<{
      __typename: "Learner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  learners?: Array<{
    __typename: "Learner";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    class?: {
      __typename: "Class";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLearnerSubscription = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateLearnerSubscription = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteLearnerSubscription = {
  __typename: "Learner";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateInstitutionAdminSubscription = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateInstitutionAdminSubscription = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteInstitutionAdminSubscription = {
  __typename: "InstitutionAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title?: string | null;
  bio?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateClassAdminSubscription = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateClassAdminSubscription = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteClassAdminSubscription = {
  __typename: "ClassAdmin";
  id: string;
  name: string;
  institution?: {
    __typename: "Institution";
    id: string;
    name: string;
    location: string;
    city: string;
    website?: string | null;
    phone?: string | null;
    logo?: string | null;
    bio?: string | null;
    admins?: Array<{
      __typename: "InstitutionAdmin";
      id: string;
      name: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    institution?: {
      __typename: "Institution";
      id: string;
      name: string;
      location: string;
      city: string;
      website?: string | null;
      phone?: string | null;
      logo?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "ClassAdmin";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    learners?: {
      __typename: "ModelLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateCourseSubscription = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseSubscription = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseSubscription = {
  __typename: "Course";
  id: string;
  instructor?: {
    __typename: "Instructor";
    id: string;
    name: string;
    title?: string | null;
    courses?: {
      __typename: "ModelCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  assistant?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<{
    __typename: "Assignment";
    id: string;
    title: string;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    section: {
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    };
    deadline?: string | null;
    points?: number | null;
    instructions?: string | null;
    tasks?: Array<{
      __typename: "Task";
      id: string;
      task: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  sections?: Array<{
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseSectionSubscription = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseSectionSubscription = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseSectionSubscription = {
  __typename: "CourseSection";
  id: string;
  name: string;
  index: number;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAssignmentSubscription = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAssignmentSubscription = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAssignmentSubscription = {
  __typename: "Assignment";
  id: string;
  title: string;
  course: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  section: {
    __typename: "CourseSection";
    id: string;
    name: string;
    index: number;
    course: {
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  deadline?: string | null;
  points?: number | null;
  instructions?: string | null;
  tasks?: Array<{
    __typename: "Task";
    id: string;
    task: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  task: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateInstructorSubscription = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateInstructorSubscription = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteInstructorSubscription = {
  __typename: "Instructor";
  id: string;
  name: string;
  title?: string | null;
  courses?: {
    __typename: "ModelCourseConnection";
    items?: Array<{
      __typename: "Course";
      id: string;
      start?: string | null;
      end?: string | null;
      creditHours?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateAssistantSubscription = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateAssistantSubscription = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteAssistantSubscription = {
  __typename: "Assistant";
  id: string;
  name: string;
  course?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateCourseAssistantSubscription = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseAssistantSubscription = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseAssistantSubscription = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructor?: {
      __typename: "Instructor";
      id: string;
      name: string;
      title?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    creditHours?: number | null;
    assignments?: Array<{
      __typename: "Assignment";
      id: string;
      title: string;
      deadline?: string | null;
      points?: number | null;
      instructions?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    sections?: Array<{
      __typename: "CourseSection";
      id: string;
      name: string;
      index: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  assistant?: {
    __typename: "Assistant";
    id: string;
    name: string;
    course?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInstitution(
    input: CreateInstitutionInput,
    condition?: ModelInstitutionConditionInput
  ): Promise<CreateInstitutionMutation> {
    const statement = `mutation CreateInstitution($input: CreateInstitutionInput!, $condition: ModelInstitutionConditionInput) {
        createInstitution(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInstitutionMutation>response.data.createInstitution;
  }
  async UpdateInstitution(
    input: UpdateInstitutionInput,
    condition?: ModelInstitutionConditionInput
  ): Promise<UpdateInstitutionMutation> {
    const statement = `mutation UpdateInstitution($input: UpdateInstitutionInput!, $condition: ModelInstitutionConditionInput) {
        updateInstitution(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInstitutionMutation>response.data.updateInstitution;
  }
  async DeleteInstitution(
    input: DeleteInstitutionInput,
    condition?: ModelInstitutionConditionInput
  ): Promise<DeleteInstitutionMutation> {
    const statement = `mutation DeleteInstitution($input: DeleteInstitutionInput!, $condition: ModelInstitutionConditionInput) {
        deleteInstitution(input: $input, condition: $condition) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInstitutionMutation>response.data.deleteInstitution;
  }
  async CreateClass(
    input: CreateClassInput,
    condition?: ModelClassConditionInput
  ): Promise<CreateClassMutation> {
    const statement = `mutation CreateClass($input: CreateClassInput!, $condition: ModelClassConditionInput) {
        createClass(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClassMutation>response.data.createClass;
  }
  async UpdateClass(
    input: UpdateClassInput,
    condition?: ModelClassConditionInput
  ): Promise<UpdateClassMutation> {
    const statement = `mutation UpdateClass($input: UpdateClassInput!, $condition: ModelClassConditionInput) {
        updateClass(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClassMutation>response.data.updateClass;
  }
  async DeleteClass(
    input: DeleteClassInput,
    condition?: ModelClassConditionInput
  ): Promise<DeleteClassMutation> {
    const statement = `mutation DeleteClass($input: DeleteClassInput!, $condition: ModelClassConditionInput) {
        deleteClass(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClassMutation>response.data.deleteClass;
  }
  async CreateGroup(
    input: CreateGroupInput,
    condition?: ModelGroupConditionInput
  ): Promise<CreateGroupMutation> {
    const statement = `mutation CreateGroup($input: CreateGroupInput!, $condition: ModelGroupConditionInput) {
        createGroup(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupMutation>response.data.createGroup;
  }
  async UpdateGroup(
    input: UpdateGroupInput,
    condition?: ModelGroupConditionInput
  ): Promise<UpdateGroupMutation> {
    const statement = `mutation UpdateGroup($input: UpdateGroupInput!, $condition: ModelGroupConditionInput) {
        updateGroup(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupMutation>response.data.updateGroup;
  }
  async DeleteGroup(
    input: DeleteGroupInput,
    condition?: ModelGroupConditionInput
  ): Promise<DeleteGroupMutation> {
    const statement = `mutation DeleteGroup($input: DeleteGroupInput!, $condition: ModelGroupConditionInput) {
        deleteGroup(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupMutation>response.data.deleteGroup;
  }
  async CreateLearner(
    input: CreateLearnerInput,
    condition?: ModelLearnerConditionInput
  ): Promise<CreateLearnerMutation> {
    const statement = `mutation CreateLearner($input: CreateLearnerInput!, $condition: ModelLearnerConditionInput) {
        createLearner(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLearnerMutation>response.data.createLearner;
  }
  async UpdateLearner(
    input: UpdateLearnerInput,
    condition?: ModelLearnerConditionInput
  ): Promise<UpdateLearnerMutation> {
    const statement = `mutation UpdateLearner($input: UpdateLearnerInput!, $condition: ModelLearnerConditionInput) {
        updateLearner(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLearnerMutation>response.data.updateLearner;
  }
  async DeleteLearner(
    input: DeleteLearnerInput,
    condition?: ModelLearnerConditionInput
  ): Promise<DeleteLearnerMutation> {
    const statement = `mutation DeleteLearner($input: DeleteLearnerInput!, $condition: ModelLearnerConditionInput) {
        deleteLearner(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLearnerMutation>response.data.deleteLearner;
  }
  async CreateInstitutionAdmin(
    input: CreateInstitutionAdminInput,
    condition?: ModelInstitutionAdminConditionInput
  ): Promise<CreateInstitutionAdminMutation> {
    const statement = `mutation CreateInstitutionAdmin($input: CreateInstitutionAdminInput!, $condition: ModelInstitutionAdminConditionInput) {
        createInstitutionAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInstitutionAdminMutation>response.data.createInstitutionAdmin;
  }
  async UpdateInstitutionAdmin(
    input: UpdateInstitutionAdminInput,
    condition?: ModelInstitutionAdminConditionInput
  ): Promise<UpdateInstitutionAdminMutation> {
    const statement = `mutation UpdateInstitutionAdmin($input: UpdateInstitutionAdminInput!, $condition: ModelInstitutionAdminConditionInput) {
        updateInstitutionAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInstitutionAdminMutation>response.data.updateInstitutionAdmin;
  }
  async DeleteInstitutionAdmin(
    input: DeleteInstitutionAdminInput,
    condition?: ModelInstitutionAdminConditionInput
  ): Promise<DeleteInstitutionAdminMutation> {
    const statement = `mutation DeleteInstitutionAdmin($input: DeleteInstitutionAdminInput!, $condition: ModelInstitutionAdminConditionInput) {
        deleteInstitutionAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInstitutionAdminMutation>response.data.deleteInstitutionAdmin;
  }
  async CreateClassAdmin(
    input: CreateClassAdminInput,
    condition?: ModelClassAdminConditionInput
  ): Promise<CreateClassAdminMutation> {
    const statement = `mutation CreateClassAdmin($input: CreateClassAdminInput!, $condition: ModelClassAdminConditionInput) {
        createClassAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClassAdminMutation>response.data.createClassAdmin;
  }
  async UpdateClassAdmin(
    input: UpdateClassAdminInput,
    condition?: ModelClassAdminConditionInput
  ): Promise<UpdateClassAdminMutation> {
    const statement = `mutation UpdateClassAdmin($input: UpdateClassAdminInput!, $condition: ModelClassAdminConditionInput) {
        updateClassAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClassAdminMutation>response.data.updateClassAdmin;
  }
  async DeleteClassAdmin(
    input: DeleteClassAdminInput,
    condition?: ModelClassAdminConditionInput
  ): Promise<DeleteClassAdminMutation> {
    const statement = `mutation DeleteClassAdmin($input: DeleteClassAdminInput!, $condition: ModelClassAdminConditionInput) {
        deleteClassAdmin(input: $input, condition: $condition) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClassAdminMutation>response.data.deleteClassAdmin;
  }
  async CreateCourse(
    input: CreateCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<CreateCourseMutation> {
    const statement = `mutation CreateCourse($input: CreateCourseInput!, $condition: ModelCourseConditionInput) {
        createCourse(input: $input, condition: $condition) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCourseMutation>response.data.createCourse;
  }
  async UpdateCourse(
    input: UpdateCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<UpdateCourseMutation> {
    const statement = `mutation UpdateCourse($input: UpdateCourseInput!, $condition: ModelCourseConditionInput) {
        updateCourse(input: $input, condition: $condition) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCourseMutation>response.data.updateCourse;
  }
  async DeleteCourse(
    input: DeleteCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<DeleteCourseMutation> {
    const statement = `mutation DeleteCourse($input: DeleteCourseInput!, $condition: ModelCourseConditionInput) {
        deleteCourse(input: $input, condition: $condition) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCourseMutation>response.data.deleteCourse;
  }
  async CreateCourseSection(
    input: CreateCourseSectionInput,
    condition?: ModelCourseSectionConditionInput
  ): Promise<CreateCourseSectionMutation> {
    const statement = `mutation CreateCourseSection($input: CreateCourseSectionInput!, $condition: ModelCourseSectionConditionInput) {
        createCourseSection(input: $input, condition: $condition) {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCourseSectionMutation>response.data.createCourseSection;
  }
  async UpdateCourseSection(
    input: UpdateCourseSectionInput,
    condition?: ModelCourseSectionConditionInput
  ): Promise<UpdateCourseSectionMutation> {
    const statement = `mutation UpdateCourseSection($input: UpdateCourseSectionInput!, $condition: ModelCourseSectionConditionInput) {
        updateCourseSection(input: $input, condition: $condition) {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCourseSectionMutation>response.data.updateCourseSection;
  }
  async DeleteCourseSection(
    input: DeleteCourseSectionInput,
    condition?: ModelCourseSectionConditionInput
  ): Promise<DeleteCourseSectionMutation> {
    const statement = `mutation DeleteCourseSection($input: DeleteCourseSectionInput!, $condition: ModelCourseSectionConditionInput) {
        deleteCourseSection(input: $input, condition: $condition) {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCourseSectionMutation>response.data.deleteCourseSection;
  }
  async CreateAssignment(
    input: CreateAssignmentInput,
    condition?: ModelAssignmentConditionInput
  ): Promise<CreateAssignmentMutation> {
    const statement = `mutation CreateAssignment($input: CreateAssignmentInput!, $condition: ModelAssignmentConditionInput) {
        createAssignment(input: $input, condition: $condition) {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAssignmentMutation>response.data.createAssignment;
  }
  async UpdateAssignment(
    input: UpdateAssignmentInput,
    condition?: ModelAssignmentConditionInput
  ): Promise<UpdateAssignmentMutation> {
    const statement = `mutation UpdateAssignment($input: UpdateAssignmentInput!, $condition: ModelAssignmentConditionInput) {
        updateAssignment(input: $input, condition: $condition) {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAssignmentMutation>response.data.updateAssignment;
  }
  async DeleteAssignment(
    input: DeleteAssignmentInput,
    condition?: ModelAssignmentConditionInput
  ): Promise<DeleteAssignmentMutation> {
    const statement = `mutation DeleteAssignment($input: DeleteAssignmentInput!, $condition: ModelAssignmentConditionInput) {
        deleteAssignment(input: $input, condition: $condition) {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAssignmentMutation>response.data.deleteAssignment;
  }
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreateInstructor(
    input: CreateInstructorInput,
    condition?: ModelInstructorConditionInput
  ): Promise<CreateInstructorMutation> {
    const statement = `mutation CreateInstructor($input: CreateInstructorInput!, $condition: ModelInstructorConditionInput) {
        createInstructor(input: $input, condition: $condition) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInstructorMutation>response.data.createInstructor;
  }
  async UpdateInstructor(
    input: UpdateInstructorInput,
    condition?: ModelInstructorConditionInput
  ): Promise<UpdateInstructorMutation> {
    const statement = `mutation UpdateInstructor($input: UpdateInstructorInput!, $condition: ModelInstructorConditionInput) {
        updateInstructor(input: $input, condition: $condition) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInstructorMutation>response.data.updateInstructor;
  }
  async DeleteInstructor(
    input: DeleteInstructorInput,
    condition?: ModelInstructorConditionInput
  ): Promise<DeleteInstructorMutation> {
    const statement = `mutation DeleteInstructor($input: DeleteInstructorInput!, $condition: ModelInstructorConditionInput) {
        deleteInstructor(input: $input, condition: $condition) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInstructorMutation>response.data.deleteInstructor;
  }
  async CreateAssistant(
    input: CreateAssistantInput,
    condition?: ModelAssistantConditionInput
  ): Promise<CreateAssistantMutation> {
    const statement = `mutation CreateAssistant($input: CreateAssistantInput!, $condition: ModelAssistantConditionInput) {
        createAssistant(input: $input, condition: $condition) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAssistantMutation>response.data.createAssistant;
  }
  async UpdateAssistant(
    input: UpdateAssistantInput,
    condition?: ModelAssistantConditionInput
  ): Promise<UpdateAssistantMutation> {
    const statement = `mutation UpdateAssistant($input: UpdateAssistantInput!, $condition: ModelAssistantConditionInput) {
        updateAssistant(input: $input, condition: $condition) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAssistantMutation>response.data.updateAssistant;
  }
  async DeleteAssistant(
    input: DeleteAssistantInput,
    condition?: ModelAssistantConditionInput
  ): Promise<DeleteAssistantMutation> {
    const statement = `mutation DeleteAssistant($input: DeleteAssistantInput!, $condition: ModelAssistantConditionInput) {
        deleteAssistant(input: $input, condition: $condition) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAssistantMutation>response.data.deleteAssistant;
  }
  async CreateCourseAssistant(
    input: CreateCourseAssistantInput,
    condition?: ModelCourseAssistantConditionInput
  ): Promise<CreateCourseAssistantMutation> {
    const statement = `mutation CreateCourseAssistant($input: CreateCourseAssistantInput!, $condition: ModelCourseAssistantConditionInput) {
        createCourseAssistant(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCourseAssistantMutation>response.data.createCourseAssistant;
  }
  async UpdateCourseAssistant(
    input: UpdateCourseAssistantInput,
    condition?: ModelCourseAssistantConditionInput
  ): Promise<UpdateCourseAssistantMutation> {
    const statement = `mutation UpdateCourseAssistant($input: UpdateCourseAssistantInput!, $condition: ModelCourseAssistantConditionInput) {
        updateCourseAssistant(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCourseAssistantMutation>response.data.updateCourseAssistant;
  }
  async DeleteCourseAssistant(
    input: DeleteCourseAssistantInput,
    condition?: ModelCourseAssistantConditionInput
  ): Promise<DeleteCourseAssistantMutation> {
    const statement = `mutation DeleteCourseAssistant($input: DeleteCourseAssistantInput!, $condition: ModelCourseAssistantConditionInput) {
        deleteCourseAssistant(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCourseAssistantMutation>response.data.deleteCourseAssistant;
  }
  async GetInstitution(id: string): Promise<GetInstitutionQuery> {
    const statement = `query GetInstitution($id: ID!) {
        getInstitution(id: $id) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInstitutionQuery>response.data.getInstitution;
  }
  async ListInstitutions(
    filter?: ModelInstitutionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInstitutionsQuery> {
    const statement = `query ListInstitutions($filter: ModelInstitutionFilterInput, $limit: Int, $nextToken: String) {
        listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInstitutionsQuery>response.data.listInstitutions;
  }
  async GetClass(id: string): Promise<GetClassQuery> {
    const statement = `query GetClass($id: ID!) {
        getClass(id: $id) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClassQuery>response.data.getClass;
  }
  async ListClasss(
    filter?: ModelClassFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClasssQuery> {
    const statement = `query ListClasss($filter: ModelClassFilterInput, $limit: Int, $nextToken: String) {
        listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClasssQuery>response.data.listClasss;
  }
  async GetGroup(id: string): Promise<GetGroupQuery> {
    const statement = `query GetGroup($id: ID!) {
        getGroup(id: $id) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupQuery>response.data.getGroup;
  }
  async ListGroups(
    filter?: ModelGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupsQuery> {
    const statement = `query ListGroups($filter: ModelGroupFilterInput, $limit: Int, $nextToken: String) {
        listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupsQuery>response.data.listGroups;
  }
  async GetLearner(id: string): Promise<GetLearnerQuery> {
    const statement = `query GetLearner($id: ID!) {
        getLearner(id: $id) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLearnerQuery>response.data.getLearner;
  }
  async ListLearners(
    filter?: ModelLearnerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLearnersQuery> {
    const statement = `query ListLearners($filter: ModelLearnerFilterInput, $limit: Int, $nextToken: String) {
        listLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLearnersQuery>response.data.listLearners;
  }
  async GetInstitutionAdmin(id: string): Promise<GetInstitutionAdminQuery> {
    const statement = `query GetInstitutionAdmin($id: ID!) {
        getInstitutionAdmin(id: $id) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInstitutionAdminQuery>response.data.getInstitutionAdmin;
  }
  async ListInstitutionAdmins(
    filter?: ModelInstitutionAdminFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInstitutionAdminsQuery> {
    const statement = `query ListInstitutionAdmins($filter: ModelInstitutionAdminFilterInput, $limit: Int, $nextToken: String) {
        listInstitutionAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInstitutionAdminsQuery>response.data.listInstitutionAdmins;
  }
  async GetClassAdmin(id: string): Promise<GetClassAdminQuery> {
    const statement = `query GetClassAdmin($id: ID!) {
        getClassAdmin(id: $id) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClassAdminQuery>response.data.getClassAdmin;
  }
  async ListClassAdmins(
    filter?: ModelClassAdminFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClassAdminsQuery> {
    const statement = `query ListClassAdmins($filter: ModelClassAdminFilterInput, $limit: Int, $nextToken: String) {
        listClassAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClassAdminsQuery>response.data.listClassAdmins;
  }
  async GetCourse(id: string): Promise<GetCourseQuery> {
    const statement = `query GetCourse($id: ID!) {
        getCourse(id: $id) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCourseQuery>response.data.getCourse;
  }
  async ListCourses(
    filter?: ModelCourseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoursesQuery> {
    const statement = `query ListCourses($filter: ModelCourseFilterInput, $limit: Int, $nextToken: String) {
        listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoursesQuery>response.data.listCourses;
  }
  async GetCourseSection(id: string): Promise<GetCourseSectionQuery> {
    const statement = `query GetCourseSection($id: ID!) {
        getCourseSection(id: $id) {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCourseSectionQuery>response.data.getCourseSection;
  }
  async ListCourseSections(
    filter?: ModelCourseSectionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCourseSectionsQuery> {
    const statement = `query ListCourseSections($filter: ModelCourseSectionFilterInput, $limit: Int, $nextToken: String) {
        listCourseSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCourseSectionsQuery>response.data.listCourseSections;
  }
  async GetAssignment(id: string): Promise<GetAssignmentQuery> {
    const statement = `query GetAssignment($id: ID!) {
        getAssignment(id: $id) {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAssignmentQuery>response.data.getAssignment;
  }
  async ListAssignments(
    filter?: ModelAssignmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAssignmentsQuery> {
    const statement = `query ListAssignments($filter: ModelAssignmentFilterInput, $limit: Int, $nextToken: String) {
        listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAssignmentsQuery>response.data.listAssignments;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetInstructor(id: string): Promise<GetInstructorQuery> {
    const statement = `query GetInstructor($id: ID!) {
        getInstructor(id: $id) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInstructorQuery>response.data.getInstructor;
  }
  async ListInstructors(
    filter?: ModelInstructorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInstructorsQuery> {
    const statement = `query ListInstructors($filter: ModelInstructorFilterInput, $limit: Int, $nextToken: String) {
        listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInstructorsQuery>response.data.listInstructors;
  }
  async GetAssistant(id: string): Promise<GetAssistantQuery> {
    const statement = `query GetAssistant($id: ID!) {
        getAssistant(id: $id) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAssistantQuery>response.data.getAssistant;
  }
  async ListAssistants(
    filter?: ModelAssistantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAssistantsQuery> {
    const statement = `query ListAssistants($filter: ModelAssistantFilterInput, $limit: Int, $nextToken: String) {
        listAssistants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAssistantsQuery>response.data.listAssistants;
  }
  async GetCourseAssistant(id: string): Promise<GetCourseAssistantQuery> {
    const statement = `query GetCourseAssistant($id: ID!) {
        getCourseAssistant(id: $id) {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCourseAssistantQuery>response.data.getCourseAssistant;
  }
  async ListCourseAssistants(
    filter?: ModelCourseAssistantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCourseAssistantsQuery> {
    const statement = `query ListCourseAssistants($filter: ModelCourseAssistantFilterInput, $limit: Int, $nextToken: String) {
        listCourseAssistants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            assistant {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCourseAssistantsQuery>response.data.listCourseAssistants;
  }
  OnCreateInstitutionListener(
    admins: string
  ): Observable<SubscriptionResponse<OnCreateInstitutionSubscription>> {
    const statement = `subscription OnCreateInstitution($admins: String!) {
        onCreateInstitution(admins: $admins) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateInstitutionSubscription>>;
  }

  OnUpdateInstitutionListener(
    admins: string
  ): Observable<SubscriptionResponse<OnUpdateInstitutionSubscription>> {
    const statement = `subscription OnUpdateInstitution($admins: String!) {
        onUpdateInstitution(admins: $admins) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateInstitutionSubscription>>;
  }

  OnDeleteInstitutionListener(
    admins: string
  ): Observable<SubscriptionResponse<OnDeleteInstitutionSubscription>> {
    const statement = `subscription OnDeleteInstitution($admins: String!) {
        onDeleteInstitution(admins: $admins) {
          __typename
          id
          name
          location
          city
          website
          phone
          logo
          bio
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            title
            bio
            createdAt
            updatedAt
            owner
          }
          classes {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteInstitutionSubscription>>;
  }

  OnCreateClassListener(
    admins: string
  ): Observable<SubscriptionResponse<OnCreateClassSubscription>> {
    const statement = `subscription OnCreateClass($admins: String!) {
        onCreateClass(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateClassSubscription>>;
  }

  OnUpdateClassListener(
    admins: string
  ): Observable<SubscriptionResponse<OnUpdateClassSubscription>> {
    const statement = `subscription OnUpdateClass($admins: String!) {
        onUpdateClass(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateClassSubscription>>;
  }

  OnDeleteClassListener(
    admins: string
  ): Observable<SubscriptionResponse<OnDeleteClassSubscription>> {
    const statement = `subscription OnDeleteClass($admins: String!) {
        onDeleteClass(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteClassSubscription>>;
  }

  OnCreateGroupListener(
    admins: string
  ): Observable<SubscriptionResponse<OnCreateGroupSubscription>> {
    const statement = `subscription OnCreateGroup($admins: String!) {
        onCreateGroup(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateGroupSubscription>>;
  }

  OnUpdateGroupListener(
    admins: string
  ): Observable<SubscriptionResponse<OnUpdateGroupSubscription>> {
    const statement = `subscription OnUpdateGroup($admins: String!) {
        onUpdateGroup(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateGroupSubscription>>;
  }

  OnDeleteGroupListener(
    admins: string
  ): Observable<SubscriptionResponse<OnDeleteGroupSubscription>> {
    const statement = `subscription OnDeleteGroup($admins: String!) {
        onDeleteGroup(admins: $admins) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          admins {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          learners {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            class {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      admins
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteGroupSubscription>>;
  }

  OnCreateLearnerListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateLearnerSubscription>> {
    const statement = `subscription OnCreateLearner($owner: String!) {
        onCreateLearner(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateLearnerSubscription>>;
  }

  OnUpdateLearnerListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateLearnerSubscription>> {
    const statement = `subscription OnUpdateLearner($owner: String!) {
        onUpdateLearner(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateLearnerSubscription>>;
  }

  OnDeleteLearnerListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteLearnerSubscription>> {
    const statement = `subscription OnDeleteLearner($owner: String!) {
        onDeleteLearner(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteLearnerSubscription>>;
  }

  OnCreateInstitutionAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateInstitutionAdminSubscription>> {
    const statement = `subscription OnCreateInstitutionAdmin($owner: String!) {
        onCreateInstitutionAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateInstitutionAdminSubscription>>;
  }

  OnUpdateInstitutionAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateInstitutionAdminSubscription>> {
    const statement = `subscription OnUpdateInstitutionAdmin($owner: String!) {
        onUpdateInstitutionAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateInstitutionAdminSubscription>>;
  }

  OnDeleteInstitutionAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteInstitutionAdminSubscription>> {
    const statement = `subscription OnDeleteInstitutionAdmin($owner: String!) {
        onDeleteInstitutionAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          title
          bio
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteInstitutionAdminSubscription>>;
  }

  OnCreateClassAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateClassAdminSubscription>> {
    const statement = `subscription OnCreateClassAdmin($owner: String!) {
        onCreateClassAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateClassAdminSubscription>>;
  }

  OnUpdateClassAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateClassAdminSubscription>> {
    const statement = `subscription OnUpdateClassAdmin($owner: String!) {
        onUpdateClassAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateClassAdminSubscription>>;
  }

  OnDeleteClassAdminListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteClassAdminSubscription>> {
    const statement = `subscription OnDeleteClassAdmin($owner: String!) {
        onDeleteClassAdmin(owner: $owner) {
          __typename
          id
          name
          institution {
            __typename
            id
            name
            location
            city
            website
            phone
            logo
            bio
            admins {
              __typename
              id
              name
              title
              bio
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          class {
            __typename
            id
            name
            institution {
              __typename
              id
              name
              location
              city
              website
              phone
              logo
              bio
              createdAt
              updatedAt
            }
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            learners {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteClassAdminSubscription>>;
  }

  OnCreateCourseListener(
    instructor: string
  ): Observable<SubscriptionResponse<OnCreateCourseSubscription>> {
    const statement = `subscription OnCreateCourse($instructor: String!) {
        onCreateCourse(instructor: $instructor) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      instructor
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateCourseSubscription>>;
  }

  OnUpdateCourseListener(
    instructor: string
  ): Observable<SubscriptionResponse<OnUpdateCourseSubscription>> {
    const statement = `subscription OnUpdateCourse($instructor: String!) {
        onUpdateCourse(instructor: $instructor) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      instructor
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateCourseSubscription>>;
  }

  OnDeleteCourseListener(
    instructor: string
  ): Observable<SubscriptionResponse<OnDeleteCourseSubscription>> {
    const statement = `subscription OnDeleteCourse($instructor: String!) {
        onDeleteCourse(instructor: $instructor) {
          __typename
          id
          instructor {
            __typename
            id
            name
            title
            courses {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          assistant {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          start
          end
          creditHours
          assignments {
            __typename
            id
            title
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            section {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            deadline
            points
            instructions
            tasks {
              __typename
              id
              task
              type
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          sections {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      instructor
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteCourseSubscription>>;
  }

  OnCreateCourseSectionListener: Observable<
    SubscriptionResponse<OnCreateCourseSectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourseSection {
        onCreateCourseSection {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCourseSectionSubscription>>;

  OnUpdateCourseSectionListener: Observable<
    SubscriptionResponse<OnUpdateCourseSectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCourseSection {
        onUpdateCourseSection {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCourseSectionSubscription>>;

  OnDeleteCourseSectionListener: Observable<
    SubscriptionResponse<OnDeleteCourseSectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCourseSection {
        onDeleteCourseSection {
          __typename
          id
          name
          index
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCourseSectionSubscription>>;

  OnCreateAssignmentListener: Observable<
    SubscriptionResponse<OnCreateAssignmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAssignment {
        onCreateAssignment {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAssignmentSubscription>>;

  OnUpdateAssignmentListener: Observable<
    SubscriptionResponse<OnUpdateAssignmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAssignment {
        onUpdateAssignment {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAssignmentSubscription>>;

  OnDeleteAssignmentListener: Observable<
    SubscriptionResponse<OnDeleteAssignmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAssignment {
        onDeleteAssignment {
          __typename
          id
          title
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          section {
            __typename
            id
            name
            index
            course {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          deadline
          points
          instructions
          tasks {
            __typename
            id
            task
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAssignmentSubscription>>;

  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          task
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreateInstructorListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateInstructorSubscription>> {
    const statement = `subscription OnCreateInstructor($owner: String!) {
        onCreateInstructor(owner: $owner) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateInstructorSubscription>>;
  }

  OnUpdateInstructorListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateInstructorSubscription>> {
    const statement = `subscription OnUpdateInstructor($owner: String!) {
        onUpdateInstructor(owner: $owner) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateInstructorSubscription>>;
  }

  OnDeleteInstructorListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteInstructorSubscription>> {
    const statement = `subscription OnDeleteInstructor($owner: String!) {
        onDeleteInstructor(owner: $owner) {
          __typename
          id
          name
          title
          courses {
            __typename
            items {
              __typename
              id
              start
              end
              creditHours
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteInstructorSubscription>>;
  }

  OnCreateAssistantListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateAssistantSubscription>> {
    const statement = `subscription OnCreateAssistant($owner: String!) {
        onCreateAssistant(owner: $owner) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateAssistantSubscription>>;
  }

  OnUpdateAssistantListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateAssistantSubscription>> {
    const statement = `subscription OnUpdateAssistant($owner: String!) {
        onUpdateAssistant(owner: $owner) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateAssistantSubscription>>;
  }

  OnDeleteAssistantListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteAssistantSubscription>> {
    const statement = `subscription OnDeleteAssistant($owner: String!) {
        onDeleteAssistant(owner: $owner) {
          __typename
          id
          name
          course {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteAssistantSubscription>>;
  }

  OnCreateCourseAssistantListener: Observable<
    SubscriptionResponse<OnCreateCourseAssistantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourseAssistant {
        onCreateCourseAssistant {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCourseAssistantSubscription>>;

  OnUpdateCourseAssistantListener: Observable<
    SubscriptionResponse<OnUpdateCourseAssistantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCourseAssistant {
        onUpdateCourseAssistant {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCourseAssistantSubscription>>;

  OnDeleteCourseAssistantListener: Observable<
    SubscriptionResponse<OnDeleteCourseAssistantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCourseAssistant {
        onDeleteCourseAssistant {
          __typename
          id
          course {
            __typename
            id
            instructor {
              __typename
              id
              name
              title
              createdAt
              updatedAt
              owner
            }
            assistant {
              __typename
              nextToken
            }
            start
            end
            creditHours
            assignments {
              __typename
              id
              title
              deadline
              points
              instructions
              createdAt
              updatedAt
            }
            sections {
              __typename
              id
              name
              index
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          assistant {
            __typename
            id
            name
            course {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCourseAssistantSubscription>>;
}
