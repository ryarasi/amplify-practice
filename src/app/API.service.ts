/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateSchoolInput = {
  id?: string | null;
  name: string;
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelSchoolConditionInput | null> | null;
  or?: Array<ModelSchoolConditionInput | null> | null;
  not?: ModelSchoolConditionInput | null;
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

export type School = {
  __typename: "School";
  id?: string;
  name?: string;
  admins?: Array<Member | null> | null;
  classes?: ModelClassConnection;
  members?: ModelMemberConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type Member = {
  __typename: "Member";
  id?: string;
  name?: string;
  school?: School;
  class?: Class;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type Class = {
  __typename: "Class";
  id?: string;
  name?: string;
  school?: School;
  admins?: Array<Member | null> | null;
  members?: ModelMemberConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection";
  items?: Array<Member | null> | null;
  nextToken?: string | null;
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection";
  items?: Array<Class | null> | null;
  nextToken?: string | null;
};

export type UpdateSchoolInput = {
  id: string;
  name?: string | null;
};

export type DeleteSchoolInput = {
  id?: string | null;
};

export type CreateClassInput = {
  id?: string | null;
  name: string;
  classSchoolId?: string | null;
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
  classSchoolId?: string | null;
};

export type DeleteClassInput = {
  id?: string | null;
};

export type CreateMemberInput = {
  id?: string | null;
  name: string;
  memberSchoolId?: string | null;
  memberClassId?: string | null;
};

export type ModelMemberConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelMemberConditionInput | null> | null;
  or?: Array<ModelMemberConditionInput | null> | null;
  not?: ModelMemberConditionInput | null;
};

export type UpdateMemberInput = {
  id: string;
  name?: string | null;
  memberSchoolId?: string | null;
  memberClassId?: string | null;
};

export type DeleteMemberInput = {
  id?: string | null;
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelSchoolFilterInput | null> | null;
  or?: Array<ModelSchoolFilterInput | null> | null;
  not?: ModelSchoolFilterInput | null;
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

export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection";
  items?: Array<School | null> | null;
  nextToken?: string | null;
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelClassFilterInput | null> | null;
  or?: Array<ModelClassFilterInput | null> | null;
  not?: ModelClassFilterInput | null;
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelMemberFilterInput | null> | null;
  or?: Array<ModelMemberFilterInput | null> | null;
  not?: ModelMemberFilterInput | null;
};

export type CreateSchoolMutation = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type UpdateSchoolMutation = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type DeleteSchoolMutation = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type CreateMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteMemberMutation = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetSchoolQuery = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type ListSchoolsQuery = {
  __typename: "ModelSchoolConnection";
  items?: Array<{
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListMembersQuery = {
  __typename: "ModelMemberConnection";
  items?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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

export type OnCreateSchoolSubscription = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type OnUpdateSchoolSubscription = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type OnDeleteSchoolSubscription = {
  __typename: "School";
  id: string;
  name: string;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  admins?: Array<{
    __typename: "Member";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
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
  members?: {
    __typename: "ModelMemberConnection";
    items?: Array<{
      __typename: "Member";
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

export type OnCreateMemberSubscription = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateMemberSubscription = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteMemberSubscription = {
  __typename: "Member";
  id: string;
  name: string;
  school?: {
    __typename: "School";
    id: string;
    name: string;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    classes?: {
      __typename: "ModelClassConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  class?: {
    __typename: "Class";
    id: string;
    name: string;
    school?: {
      __typename: "School";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    admins?: Array<{
      __typename: "Member";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateSchool(
    input: CreateSchoolInput,
    condition?: ModelSchoolConditionInput
  ): Promise<CreateSchoolMutation> {
    const statement = `mutation CreateSchool($input: CreateSchoolInput!, $condition: ModelSchoolConditionInput) {
        createSchool(input: $input, condition: $condition) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    return <CreateSchoolMutation>response.data.createSchool;
  }
  async UpdateSchool(
    input: UpdateSchoolInput,
    condition?: ModelSchoolConditionInput
  ): Promise<UpdateSchoolMutation> {
    const statement = `mutation UpdateSchool($input: UpdateSchoolInput!, $condition: ModelSchoolConditionInput) {
        updateSchool(input: $input, condition: $condition) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    return <UpdateSchoolMutation>response.data.updateSchool;
  }
  async DeleteSchool(
    input: DeleteSchoolInput,
    condition?: ModelSchoolConditionInput
  ): Promise<DeleteSchoolMutation> {
    const statement = `mutation DeleteSchool($input: DeleteSchoolInput!, $condition: ModelSchoolConditionInput) {
        deleteSchool(input: $input, condition: $condition) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    return <DeleteSchoolMutation>response.data.deleteSchool;
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
  async CreateMember(
    input: CreateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<CreateMemberMutation> {
    const statement = `mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
        createMember(input: $input, condition: $condition) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
    return <DeleteMemberMutation>response.data.deleteMember;
  }
  async GetSchool(id: string): Promise<GetSchoolQuery> {
    const statement = `query GetSchool($id: ID!) {
        getSchool(id: $id) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    return <GetSchoolQuery>response.data.getSchool;
  }
  async ListSchools(
    filter?: ModelSchoolFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSchoolsQuery> {
    const statement = `query ListSchools($filter: ModelSchoolFilterInput, $limit: Int, $nextToken: String) {
        listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
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
    return <ListSchoolsQuery>response.data.listSchools;
  }
  async GetClass(id: string): Promise<GetClassQuery> {
    const statement = `query GetClass($id: ID!) {
        getClass(id: $id) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
            school {
              __typename
              id
              name
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
    return <ListClasssQuery>response.data.listClasss;
  }
  async GetMember(id: string): Promise<GetMemberQuery> {
    const statement = `query GetMember($id: ID!) {
        getMember(id: $id) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
            school {
              __typename
              id
              name
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
    return <ListMembersQuery>response.data.listMembers;
  }
  OnCreateSchoolListener(
    admins: string
  ): Observable<SubscriptionResponse<OnCreateSchoolSubscription>> {
    const statement = `subscription OnCreateSchool($admins: String!) {
        onCreateSchool(admins: $admins) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    ) as Observable<SubscriptionResponse<OnCreateSchoolSubscription>>;
  }

  OnUpdateSchoolListener(
    admins: string
  ): Observable<SubscriptionResponse<OnUpdateSchoolSubscription>> {
    const statement = `subscription OnUpdateSchool($admins: String!) {
        onUpdateSchool(admins: $admins) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    ) as Observable<SubscriptionResponse<OnUpdateSchoolSubscription>>;
  }

  OnDeleteSchoolListener(
    admins: string
  ): Observable<SubscriptionResponse<OnDeleteSchoolSubscription>> {
    const statement = `subscription OnDeleteSchool($admins: String!) {
        onDeleteSchool(admins: $admins) {
          __typename
          id
          name
          admins {
            __typename
            id
            name
            school {
              __typename
              id
              name
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
          members {
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
    ) as Observable<SubscriptionResponse<OnDeleteSchoolSubscription>>;
  }

  OnCreateClassListener(
    admins: string
  ): Observable<SubscriptionResponse<OnCreateClassSubscription>> {
    const statement = `subscription OnCreateClass($admins: String!) {
        onCreateClass(admins: $admins) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
          members {
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

  OnCreateMemberListener(
    owner: string
  ): Observable<SubscriptionResponse<OnCreateMemberSubscription>> {
    const statement = `subscription OnCreateMember($owner: String!) {
        onCreateMember(owner: $owner) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
    ) as Observable<SubscriptionResponse<OnCreateMemberSubscription>>;
  }

  OnUpdateMemberListener(
    owner: string
  ): Observable<SubscriptionResponse<OnUpdateMemberSubscription>> {
    const statement = `subscription OnUpdateMember($owner: String!) {
        onUpdateMember(owner: $owner) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
    ) as Observable<SubscriptionResponse<OnUpdateMemberSubscription>>;
  }

  OnDeleteMemberListener(
    owner: string
  ): Observable<SubscriptionResponse<OnDeleteMemberSubscription>> {
    const statement = `subscription OnDeleteMember($owner: String!) {
        onDeleteMember(owner: $owner) {
          __typename
          id
          name
          school {
            __typename
            id
            name
            admins {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            classes {
              __typename
              nextToken
            }
            members {
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
            school {
              __typename
              id
              name
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
            members {
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
    ) as Observable<SubscriptionResponse<OnDeleteMemberSubscription>>;
  }
}
