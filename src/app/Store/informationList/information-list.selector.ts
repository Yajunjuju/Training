import { productions } from './../model/information-list.model';

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dropDownSelectedModel,
  selecteddata,
  // selectedinput
} from "../model/information-list.model";


const getdropdownselectedstate = createFeatureSelector<dropDownSelectedModel>('dropdownselected');

export const getdatalist = createSelector(getdropdownselectedstate, (state) =>{
  return state.datalist;
})

export const getselectedfactory = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedFactory;
})

export const getselectedproduction = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedProduction;
})

export const getselectedmachine = createSelector(getdropdownselectedstate, (state) =>{
  return state.selectedMachine;
})

export const selectedFilterProduction = createSelector(
  getdatalist,
  getselectedfactory,
  (datalist, selectedFactory) =>{
    const selectedFactoryData = datalist.find(datalist => datalist.factoryName === selectedFactory);
    return selectedFactoryData ? selectedFactoryData.prodiction || [] : [];
  }
)

export const selectedFilterMachine = createSelector(
  selectedFilterProduction,
  getselectedproduction,
  (productions, selectedProduction) =>{
    const selectedProductionData = productions.find(productions.productionName === selectedProduction);
    return selectedProductionData ? selectedProductionData.machine || [] : [];
  }
)



// ************************************************************ 測試版本二



// const getselectedinputstate = createFeatureSelector<selectedinput>('input');

const getselecteddatastate = createFeatureSelector<selecteddata>('data');



// export const getselectedinput = createSelector(getselectedinputstate, (state) =>{
//   // console.log(state)
//   return state.selectedfactory;
// })

export const getselecteddata = createSelector(getselecteddatastate, (state) =>{
  return state.datalist;
})

// ************************************************************ 測試版本二

