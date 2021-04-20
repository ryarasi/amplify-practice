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
  admins?: Array<Member | null> | null;
  members?: Array<Member | null> | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Member = {
  __typename: "Member";
  id?: string;
  name?: string;
  email?: string;
  type?: string;
  title?: string | null;
  bio?: string | null;
  institution?: Institution;
  groups?: ModelGroupMemberConnection;
  instructor?: ModelCourseInstructorConnection;
  assistant?: ModelCourseAssistantConnection;
  learner?: ModelCourseLearnerConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelGroupMemberConnection = {
  __typename: "ModelGroupMemberConnection";
  items?: Array<GroupMember | null> | null;
  nextToken?: string | null;
};

export type GroupMember = {
  __typename: "GroupMember";
  id?: string;
  group?: Group;
  member?: Member;
  createdAt?: string;
  updatedAt?: string;
};

export type Group = {
  __typename: "Group";
  id?: string;
  name?: string;
  institution?: Institution;
  type?: string;
  admins?: Array<Member | null> | null;
  members?: ModelGroupMemberConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCourseInstructorConnection = {
  __typename: "ModelCourseInstructorConnection";
  items?: Array<CourseInstructor | null> | null;
  nextToken?: string | null;
};

export type CourseInstructor = {
  __typename: "CourseInstructor";
  id?: string;
  course?: Course;
  instructor?: Member;
  createdAt?: string;
  updatedAt?: string;
};

export type Course = {
  __typename: "Course";
  id?: string;
  instructors?: ModelCourseInstructorConnection;
  assistants?: ModelCourseAssistantConnection;
  learners?: ModelCourseLearnerConnection;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
  assignments?: Array<Assignment | null> | null;
  sections?: Array<CourseSection | null> | null;
  createdAt?: string;
  updatedAt?: string;
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
  assistant?: Member;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCourseLearnerConnection = {
  __typename: "ModelCourseLearnerConnection";
  items?: Array<CourseLearner | null> | null;
  nextToken?: string | null;
};

export type CourseLearner = {
  __typename: "CourseLearner";
  id?: string;
  course?: Course;
  learner?: Member;
  createdAt?: string;
  updatedAt?: string;
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

export type CreateGroupInput = {
  id?: string | null;
  name: string;
  type: string;
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelGroupConditionInput | null> | null;
  or?: Array<ModelGroupConditionInput | null> | null;
  not?: ModelGroupConditionInput | null;
};

export type UpdateGroupInput = {
  id: string;
  name?: string | null;
  type?: string | null;
};

export type DeleteGroupInput = {
  id?: string | null;
};

export type CreateMemberInput = {
  id?: string | null;
  name: string;
  email: string;
  type: string;
  title?: string | null;
  bio?: string | null;
};

export type ModelMemberConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  type?: ModelStringInput | null;
  title?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelMemberConditionInput | null> | null;
  or?: Array<ModelMemberConditionInput | null> | null;
  not?: ModelMemberConditionInput | null;
};

export type UpdateMemberInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  type?: string | null;
  title?: string | null;
  bio?: string | null;
};

export type DeleteMemberInput = {
  id?: string | null;
};

export type CreateCourseInput = {
  id?: string | null;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
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

export type UpdateCourseInput = {
  id: string;
  start?: string | null;
  end?: string | null;
  creditHours?: number | null;
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

export type CreateCourseInstructorInput = {
  id?: string | null;
  courseInstructorCourseId?: string | null;
  courseInstructorInstructorId?: string | null;
};

export type ModelCourseInstructorConditionInput = {
  and?: Array<ModelCourseInstructorConditionInput | null> | null;
  or?: Array<ModelCourseInstructorConditionInput | null> | null;
  not?: ModelCourseInstructorConditionInput | null;
};

export type UpdateCourseInstructorInput = {
  id: string;
  courseInstructorCourseId?: string | null;
  courseInstructorInstructorId?: string | null;
};

export type DeleteCourseInstructorInput = {
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

export type CreateCourseLearnerInput = {
  id?: string | null;
  courseLearnerCourseId?: string | null;
  courseLearnerLearnerId?: string | null;
};

export type ModelCourseLearnerConditionInput = {
  and?: Array<ModelCourseLearnerConditionInput | null> | null;
  or?: Array<ModelCourseLearnerConditionInput | null> | null;
  not?: ModelCourseLearnerConditionInput | null;
};

export type UpdateCourseLearnerInput = {
  id: string;
  courseLearnerCourseId?: string | null;
  courseLearnerLearnerId?: string | null;
};

export type DeleteCourseLearnerInput = {
  id?: string | null;
};

export type CreateGroupMemberInput = {
  id?: string | null;
  groupMemberGroupId?: string | null;
  groupMemberMemberId?: string | null;
};

export type ModelGroupMemberConditionInput = {
  and?: Array<ModelGroupMemberConditionInput | null> | null;
  or?: Array<ModelGroupMemberConditionInput | null> | null;
  not?: ModelGroupMemberConditionInput | null;
};

export type UpdateGroupMemberInput = {
  id: string;
  groupMemberGroupId?: string | null;
  groupMemberMemberId?: string | null;
};

export type DeleteGroupMemberInput = {
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

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelGroupFilterInput | null> | null;
  or?: Array<ModelGroupFilterInput | null> | null;
  not?: ModelGroupFilterInput | null;
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection";
  items?: Array<Group | null> | null;
  nextToken?: string | null;
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  type?: ModelStringInput | null;
  title?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  and?: Array<ModelMemberFilterInput | null> | null;
  or?: Array<ModelMemberFilterInput | null> | null;
  not?: ModelMemberFilterInput | null;
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection";
  items?: Array<Member | null> | null;
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

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection";
  items?: Array<Course | null> | null;
  nextToken?: string | null;
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

export type ModelCourseInstructorFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelCourseInstructorFilterInput | null> | null;
  or?: Array<ModelCourseInstructorFilterInput | null> | null;
  not?: ModelCourseInstructorFilterInput | null;
};

export type ModelCourseAssistantFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelCourseAssistantFilterInput | null> | null;
  or?: Array<ModelCourseAssistantFilterInput | null> | null;
  not?: ModelCourseAssistantFilterInput | null;
};

export type ModelCourseLearnerFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelCourseLearnerFilterInput | null> | null;
  or?: Array<ModelCourseLearnerFilterInput | null> | null;
  not?: ModelCourseLearnerFilterInput | null;
};

export type ModelGroupMemberFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelGroupMemberFilterInput | null> | null;
  or?: Array<ModelGroupMemberFilterInput | null> | null;
  not?: ModelGroupMemberFilterInput | null;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGroupMutation = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  email: string;
  type: string;
  title?: string | null;
  bio?: string | null;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  groups?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  instructor?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
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
  learner?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  email: string;
  type: string;
  title?: string | null;
  bio?: string | null;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  groups?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  instructor?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
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
  learner?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  email: string;
  type: string;
  title?: string | null;
  bio?: string | null;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  groups?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  instructor?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
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
  learner?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseMutation = {
  __typename: "Course";
  id: string;
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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

export type CreateCourseInstructorMutation = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseInstructorMutation = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseInstructorMutation = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseAssistantMutation = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCourseLearnerMutation = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseLearnerMutation = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCourseLearnerMutation = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateGroupMemberMutation = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGroupMemberMutation = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGroupMemberMutation = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetGroupQuery = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListGroupsQuery = {
  __typename: "ModelGroupConnection";
  items?: Array<{
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMemberQuery = {
  __typename: "Member";
  id: string;
  name: string;
  email: string;
  type: string;
  title?: string | null;
  bio?: string | null;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  groups?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  instructor?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
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
  learner?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMembersQuery = {
  __typename: "ModelMemberConnection";
  items?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseQuery = {
  __typename: "Course";
  id: string;
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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

export type GetCourseInstructorQuery = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCourseInstructorsQuery = {
  __typename: "ModelCourseInstructorConnection";
  items?: Array<{
    __typename: "CourseInstructor";
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
    instructor?: {
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseAssistantQuery = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCourseLearnerQuery = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCourseLearnersQuery = {
  __typename: "ModelCourseLearnerConnection";
  items?: Array<{
    __typename: "CourseLearner";
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
    learner?: {
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetGroupMemberQuery = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListGroupMembersQuery = {
  __typename: "ModelGroupMemberConnection";
  items?: Array<{
    __typename: "GroupMember";
    id: string;
    group?: {
      __typename: "Group";
      id: string;
      name: string;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGroupSubscription = {
  __typename: "Group";
  id: string;
  name: string;
  institution: {
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
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  };
  type: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  members?: {
    __typename: "ModelGroupMemberConnection";
    items?: Array<{
      __typename: "GroupMember";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseSubscription = {
  __typename: "Course";
  id: string;
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
  instructors?: {
    __typename: "ModelCourseInstructorConnection";
    items?: Array<{
      __typename: "CourseInstructor";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  assistants?: {
    __typename: "ModelCourseAssistantConnection";
    items?: Array<{
      __typename: "CourseAssistant";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  learners?: {
    __typename: "ModelCourseLearnerConnection";
    items?: Array<{
      __typename: "CourseLearner";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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

export type OnCreateCourseInstructorSubscription = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseInstructorSubscription = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseInstructorSubscription = {
  __typename: "CourseInstructor";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  instructor?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseAssistantSubscription = {
  __typename: "CourseAssistant";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCourseLearnerSubscription = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCourseLearnerSubscription = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCourseLearnerSubscription = {
  __typename: "CourseLearner";
  id: string;
  course?: {
    __typename: "Course";
    id: string;
    instructors?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistants?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learners?: {
      __typename: "ModelCourseLearnerConnection";
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
  learner?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateGroupMemberSubscription = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGroupMemberSubscription = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGroupMemberSubscription = {
  __typename: "GroupMember";
  id: string;
  group?: {
    __typename: "Group";
    id: string;
    name: string;
    institution: {
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
    };
    type: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      email: string;
      type: string;
      title?: string | null;
      bio?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    members?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    name: string;
    email: string;
    type: string;
    title?: string | null;
    bio?: string | null;
    institution: {
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
    };
    groups?: {
      __typename: "ModelGroupMemberConnection";
      nextToken?: string | null;
    } | null;
    instructor?: {
      __typename: "ModelCourseInstructorConnection";
      nextToken?: string | null;
    } | null;
    assistant?: {
      __typename: "ModelCourseAssistantConnection";
      nextToken?: string | null;
    } | null;
    learner?: {
      __typename: "ModelCourseLearnerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async AddMember(
    name?: string,
    username?: string,
    email?: string,
    institution?: string,
    type?: string,
    title?: string,
    bio?: string
  ): Promise<string | null> {
    const statement = `mutation AddMember($name: String, $username: String, $email: String, $institution: String, $type: String, $title: String, $bio: String) {
        addMember(name: $name, username: $username, email: $email, institution: $institution, type: $type, title: $title, bio: $bio)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (institution) {
      gqlAPIServiceArguments.institution = institution;
    }
    if (type) {
      gqlAPIServiceArguments.type = type;
    }
    if (title) {
      gqlAPIServiceArguments.title = title;
    }
    if (bio) {
      gqlAPIServiceArguments.bio = bio;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.addMember;
  }
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <DeleteInstitutionMutation>response.data.deleteInstitution;
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
  async CreateMember(
    input: CreateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<CreateMemberMutation> {
    const statement = `mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
        createMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          type
          title
          bio
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          groups {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          instructor {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
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
          learner {
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
    return <CreateMemberMutation>response.data.createMember;
  }
  async UpdateMember(
    input: UpdateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<UpdateMemberMutation> {
    const statement = `mutation UpdateMember($input: UpdateMemberInput!, $condition: ModelMemberConditionInput) {
        updateMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          type
          title
          bio
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          groups {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          instructor {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
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
          learner {
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
    return <UpdateMemberMutation>response.data.updateMember;
  }
  async DeleteMember(
    input: DeleteMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<DeleteMemberMutation> {
    const statement = `mutation DeleteMember($input: DeleteMemberInput!, $condition: ModelMemberConditionInput) {
        deleteMember(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          type
          title
          bio
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          groups {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          instructor {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
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
          learner {
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
    return <DeleteMemberMutation>response.data.deleteMember;
  }
  async CreateCourse(
    input: CreateCourseInput,
    condition?: ModelCourseConditionInput
  ): Promise<CreateCourseMutation> {
    const statement = `mutation CreateCourse($input: CreateCourseInput!, $condition: ModelCourseConditionInput) {
        createCourse(input: $input, condition: $condition) {
          __typename
          id
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
  async CreateCourseInstructor(
    input: CreateCourseInstructorInput,
    condition?: ModelCourseInstructorConditionInput
  ): Promise<CreateCourseInstructorMutation> {
    const statement = `mutation CreateCourseInstructor($input: CreateCourseInstructorInput!, $condition: ModelCourseInstructorConditionInput) {
        createCourseInstructor(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <CreateCourseInstructorMutation>response.data.createCourseInstructor;
  }
  async UpdateCourseInstructor(
    input: UpdateCourseInstructorInput,
    condition?: ModelCourseInstructorConditionInput
  ): Promise<UpdateCourseInstructorMutation> {
    const statement = `mutation UpdateCourseInstructor($input: UpdateCourseInstructorInput!, $condition: ModelCourseInstructorConditionInput) {
        updateCourseInstructor(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <UpdateCourseInstructorMutation>response.data.updateCourseInstructor;
  }
  async DeleteCourseInstructor(
    input: DeleteCourseInstructorInput,
    condition?: ModelCourseInstructorConditionInput
  ): Promise<DeleteCourseInstructorMutation> {
    const statement = `mutation DeleteCourseInstructor($input: DeleteCourseInstructorInput!, $condition: ModelCourseInstructorConditionInput) {
        deleteCourseInstructor(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <DeleteCourseInstructorMutation>response.data.deleteCourseInstructor;
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <DeleteCourseAssistantMutation>response.data.deleteCourseAssistant;
  }
  async CreateCourseLearner(
    input: CreateCourseLearnerInput,
    condition?: ModelCourseLearnerConditionInput
  ): Promise<CreateCourseLearnerMutation> {
    const statement = `mutation CreateCourseLearner($input: CreateCourseLearnerInput!, $condition: ModelCourseLearnerConditionInput) {
        createCourseLearner(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <CreateCourseLearnerMutation>response.data.createCourseLearner;
  }
  async UpdateCourseLearner(
    input: UpdateCourseLearnerInput,
    condition?: ModelCourseLearnerConditionInput
  ): Promise<UpdateCourseLearnerMutation> {
    const statement = `mutation UpdateCourseLearner($input: UpdateCourseLearnerInput!, $condition: ModelCourseLearnerConditionInput) {
        updateCourseLearner(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <UpdateCourseLearnerMutation>response.data.updateCourseLearner;
  }
  async DeleteCourseLearner(
    input: DeleteCourseLearnerInput,
    condition?: ModelCourseLearnerConditionInput
  ): Promise<DeleteCourseLearnerMutation> {
    const statement = `mutation DeleteCourseLearner($input: DeleteCourseLearnerInput!, $condition: ModelCourseLearnerConditionInput) {
        deleteCourseLearner(input: $input, condition: $condition) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <DeleteCourseLearnerMutation>response.data.deleteCourseLearner;
  }
  async CreateGroupMember(
    input: CreateGroupMemberInput,
    condition?: ModelGroupMemberConditionInput
  ): Promise<CreateGroupMemberMutation> {
    const statement = `mutation CreateGroupMember($input: CreateGroupMemberInput!, $condition: ModelGroupMemberConditionInput) {
        createGroupMember(input: $input, condition: $condition) {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <CreateGroupMemberMutation>response.data.createGroupMember;
  }
  async UpdateGroupMember(
    input: UpdateGroupMemberInput,
    condition?: ModelGroupMemberConditionInput
  ): Promise<UpdateGroupMemberMutation> {
    const statement = `mutation UpdateGroupMember($input: UpdateGroupMemberInput!, $condition: ModelGroupMemberConditionInput) {
        updateGroupMember(input: $input, condition: $condition) {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <UpdateGroupMemberMutation>response.data.updateGroupMember;
  }
  async DeleteGroupMember(
    input: DeleteGroupMemberInput,
    condition?: ModelGroupMemberConditionInput
  ): Promise<DeleteGroupMemberMutation> {
    const statement = `mutation DeleteGroupMember($input: DeleteGroupMemberInput!, $condition: ModelGroupMemberConditionInput) {
        deleteGroupMember(input: $input, condition: $condition) {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <DeleteGroupMemberMutation>response.data.deleteGroupMember;
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
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
    return <ListInstitutionsQuery>response.data.listInstitutions;
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
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
    return <ListGroupsQuery>response.data.listGroups;
  }
  async GetMember(id: string): Promise<GetMemberQuery> {
    const statement = `query GetMember($id: ID!) {
        getMember(id: $id) {
          __typename
          id
          name
          email
          type
          title
          bio
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          groups {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          instructor {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
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
          learner {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMemberQuery>response.data.getMember;
  }
  async ListMembers(
    filter?: ModelMemberFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMembersQuery> {
    const statement = `query ListMembers($filter: ModelMemberFilterInput, $limit: Int, $nextToken: String) {
        listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
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
    return <ListMembersQuery>response.data.listMembers;
  }
  async GetCourse(id: string): Promise<GetCourseQuery> {
    const statement = `query GetCourse($id: ID!) {
        getCourse(id: $id) {
          __typename
          id
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
  async GetCourseInstructor(id: string): Promise<GetCourseInstructorQuery> {
    const statement = `query GetCourseInstructor($id: ID!) {
        getCourseInstructor(id: $id) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <GetCourseInstructorQuery>response.data.getCourseInstructor;
  }
  async ListCourseInstructors(
    filter?: ModelCourseInstructorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCourseInstructorsQuery> {
    const statement = `query ListCourseInstructors($filter: ModelCourseInstructorFilterInput, $limit: Int, $nextToken: String) {
        listCourseInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            instructor {
              __typename
              id
              name
              email
              type
              title
              bio
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
    return <ListCourseInstructorsQuery>response.data.listCourseInstructors;
  }
  async GetCourseAssistant(id: string): Promise<GetCourseAssistantQuery> {
    const statement = `query GetCourseAssistant($id: ID!) {
        getCourseAssistant(id: $id) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
              email
              type
              title
              bio
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
    return <ListCourseAssistantsQuery>response.data.listCourseAssistants;
  }
  async GetCourseLearner(id: string): Promise<GetCourseLearnerQuery> {
    const statement = `query GetCourseLearner($id: ID!) {
        getCourseLearner(id: $id) {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <GetCourseLearnerQuery>response.data.getCourseLearner;
  }
  async ListCourseLearners(
    filter?: ModelCourseLearnerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCourseLearnersQuery> {
    const statement = `query ListCourseLearners($filter: ModelCourseLearnerFilterInput, $limit: Int, $nextToken: String) {
        listCourseLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            learner {
              __typename
              id
              name
              email
              type
              title
              bio
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
    return <ListCourseLearnersQuery>response.data.listCourseLearners;
  }
  async GetGroupMember(id: string): Promise<GetGroupMemberQuery> {
    const statement = `query GetGroupMember($id: ID!) {
        getGroupMember(id: $id) {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
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
    return <GetGroupMemberQuery>response.data.getGroupMember;
  }
  async ListGroupMembers(
    filter?: ModelGroupMemberFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupMembersQuery> {
    const statement = `query ListGroupMembers($filter: ModelGroupMemberFilterInput, $limit: Int, $nextToken: String) {
        listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            group {
              __typename
              id
              name
              type
              createdAt
              updatedAt
            }
            member {
              __typename
              id
              name
              email
              type
              title
              bio
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
    return <ListGroupMembersQuery>response.data.listGroupMembers;
  }
  OnCreateInstitutionListener: Observable<
    SubscriptionResponse<OnCreateInstitutionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInstitution {
        onCreateInstitution {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateInstitutionSubscription>>;

  OnUpdateInstitutionListener: Observable<
    SubscriptionResponse<OnUpdateInstitutionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInstitution {
        onUpdateInstitution {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateInstitutionSubscription>>;

  OnDeleteInstitutionListener: Observable<
    SubscriptionResponse<OnDeleteInstitutionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInstitution {
        onDeleteInstitution {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteInstitutionSubscription>>;

  OnCreateGroupListener(
    admins?: string
  ): Observable<SubscriptionResponse<OnCreateGroupSubscription>> {
    const statement = `subscription OnCreateGroup($admins: String) {
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (admins) {
      gqlAPIServiceArguments.admins = admins;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateGroupSubscription>>;
  }

  OnUpdateGroupListener(
    admins?: string
  ): Observable<SubscriptionResponse<OnUpdateGroupSubscription>> {
    const statement = `subscription OnUpdateGroup($admins: String) {
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (admins) {
      gqlAPIServiceArguments.admins = admins;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateGroupSubscription>>;
  }

  OnDeleteGroupListener(
    admins?: string
  ): Observable<SubscriptionResponse<OnDeleteGroupSubscription>> {
    const statement = `subscription OnDeleteGroup($admins: String) {
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
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          type
          admins {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          members {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (admins) {
      gqlAPIServiceArguments.admins = admins;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteGroupSubscription>>;
  }

  OnCreateCourseListener(
    instructors?: string
  ): Observable<SubscriptionResponse<OnCreateCourseSubscription>> {
    const statement = `subscription OnCreateCourse($instructors: String) {
        onCreateCourse(instructors: $instructors) {
          __typename
          id
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
    const gqlAPIServiceArguments: any = {};
    if (instructors) {
      gqlAPIServiceArguments.instructors = instructors;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateCourseSubscription>>;
  }

  OnUpdateCourseListener(
    instructors?: string
  ): Observable<SubscriptionResponse<OnUpdateCourseSubscription>> {
    const statement = `subscription OnUpdateCourse($instructors: String) {
        onUpdateCourse(instructors: $instructors) {
          __typename
          id
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
    const gqlAPIServiceArguments: any = {};
    if (instructors) {
      gqlAPIServiceArguments.instructors = instructors;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateCourseSubscription>>;
  }

  OnDeleteCourseListener(
    instructors?: string
  ): Observable<SubscriptionResponse<OnDeleteCourseSubscription>> {
    const statement = `subscription OnDeleteCourse($instructors: String) {
        onDeleteCourse(instructors: $instructors) {
          __typename
          id
          instructors {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          assistants {
            __typename
            items {
              __typename
              id
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
    const gqlAPIServiceArguments: any = {};
    if (instructors) {
      gqlAPIServiceArguments.instructors = instructors;
    }
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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

  OnCreateCourseInstructorListener: Observable<
    SubscriptionResponse<OnCreateCourseInstructorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourseInstructor {
        onCreateCourseInstructor {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCourseInstructorSubscription>>;

  OnUpdateCourseInstructorListener: Observable<
    SubscriptionResponse<OnUpdateCourseInstructorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCourseInstructor {
        onUpdateCourseInstructor {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCourseInstructorSubscription>>;

  OnDeleteCourseInstructorListener: Observable<
    SubscriptionResponse<OnDeleteCourseInstructorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCourseInstructor {
        onDeleteCourseInstructor {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          instructor {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCourseInstructorSubscription>>;

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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
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
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCourseAssistantSubscription>>;

  OnCreateCourseLearnerListener: Observable<
    SubscriptionResponse<OnCreateCourseLearnerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCourseLearner {
        onCreateCourseLearner {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCourseLearnerSubscription>>;

  OnUpdateCourseLearnerListener: Observable<
    SubscriptionResponse<OnUpdateCourseLearnerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCourseLearner {
        onUpdateCourseLearner {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCourseLearnerSubscription>>;

  OnDeleteCourseLearnerListener: Observable<
    SubscriptionResponse<OnDeleteCourseLearnerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCourseLearner {
        onDeleteCourseLearner {
          __typename
          id
          course {
            __typename
            id
            instructors {
              __typename
              nextToken
            }
            assistants {
              __typename
              nextToken
            }
            learners {
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
          learner {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCourseLearnerSubscription>>;

  OnCreateGroupMemberListener: Observable<
    SubscriptionResponse<OnCreateGroupMemberSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGroupMember {
        onCreateGroupMember {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateGroupMemberSubscription>>;

  OnUpdateGroupMemberListener: Observable<
    SubscriptionResponse<OnUpdateGroupMemberSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGroupMember {
        onUpdateGroupMember {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateGroupMemberSubscription>>;

  OnDeleteGroupMemberListener: Observable<
    SubscriptionResponse<OnDeleteGroupMemberSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGroupMember {
        onDeleteGroupMember {
          __typename
          id
          group {
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
            type
            admins {
              __typename
              id
              name
              email
              type
              title
              bio
              createdAt
              updatedAt
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          member {
            __typename
            id
            name
            email
            type
            title
            bio
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
            groups {
              __typename
              nextToken
            }
            instructor {
              __typename
              nextToken
            }
            assistant {
              __typename
              nextToken
            }
            learner {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteGroupMemberSubscription>>;
}
