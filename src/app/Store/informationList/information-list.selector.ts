import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dropDownSelectedModel } from "../model/information-list.model";

const getdropdownselectedstate = createFeatureSelector<dropDownSelectedModel>('dropdownselected');

export const getselectedfactory = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedFactory;
})

export const getselectedproduction = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedProduction;
})

export const getselectedmachine = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedMachine;
})


