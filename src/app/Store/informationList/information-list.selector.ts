import { dropDownSelectedModel } from './../model/information-list.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getdropdownselectedstate = createFeatureSelector<dropDownSelectedModel>('dropdownselected');

export const getdropdownselected = createSelector(getdropdownselectedstate, (state) =>{
  return state;
})
