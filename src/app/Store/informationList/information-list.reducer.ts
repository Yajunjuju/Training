
import { createReducer, on } from "@ngrx/store";
import { loadselectedfactory, loadselectedmachine, loadselectedproductionline, reserselected } from "./information-list.action";
import { dropDownInitialState } from "./information-list.state";


const _dropDownSelectedReducer = createReducer(
  dropDownInitialState,
  on(loadselectedfactory, (state, action) =>{
    return{
      ...state,
      selectedFactory:action.data
    };
  }),
  on(loadselectedproductionline, (state, action) =>{
    return{
      ...state,
      selectedProduction:action.data
    };
  }),
  on(loadselectedmachine, (state, action) =>{
    return{
      ...state,
      selectedMachine:action.data
    };
  }),
  // on(loadselecteddropdown, (state, action) =>{
  //   return{
  //     ...state,
  //     dropdownList:action.data
  //   }
  // }),
  on(reserselected, (state) =>{
    return{
      ...state,
      datalist:[],
      selectedFactory:null,
      selectedProduction:null,
      selectedMachine:null
    }
  })
)

export function dropDownSelectedReducer(state:any, action:any){
  return _dropDownSelectedReducer(state, action);
}





