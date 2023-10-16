import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplyFormModel } from "../model/apply-form.model";


const getapplyformstate = createFeatureSelector<ApplyFormModel>('applyform');

export const getapply = createSelector(getapplyformstate, (state) =>{
  return state;
})
