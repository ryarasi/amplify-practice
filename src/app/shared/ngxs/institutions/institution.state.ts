import { State, Action, Selector, Store, StateContext } from '@ngxs/store';
import {
  defaultInstitutionState,
  InstitutionStateModel,
} from './institution.model';
import { FetchInstitutions } from './institution.actions';
import { Injectable } from '@angular/core';
import { client } from '../../api/appsync.service';
import * as queries from './../../../../../../graphql/queries.graphql';
@State<InstitutionStateModel>({
  name: 'institutionState',
  defaults: defaultInstitutionState,
})
@Injectable()
export class InstitutionState {
  gridApi;

  constructor(private store: Store) {}

  @Selector()
  static listInstitutions(state: InstitutionStateModel) {
    return state.institutions;
  }

  showLoading() {
    if (this.gridApi) {
      this.gridApi.showLoadingOverlay();
    }
  }

  hideLoading() {
    if (this.gridApi) {
      this.gridApi.hideOverlay();
    }
  }

  @Action(FetchInstitutions)
  fetchInstitutions(
    { getState, patchState }: StateContext<InstitutionStateModel>,
    { payload }: FetchInstitutions
  ) {
    const gridApi = payload;
    this.gridApi = gridApi;
    const state = getState();
    let { institutions } = state;
    client
      .query({
        query: queries.ListInstitutions,
      })
      .then((res: any) => {
        this.hideLoading();
        const institutions = res.data.listInstitutions.items;
        patchState({ ...institutions });
      })
      .catch((err) => {
        console.error(err);
        this.hideLoading();
        institutions = [];
        this.overlayNoRowsTemplate = this.overlayErrorTemplate;
      });
  }
}
