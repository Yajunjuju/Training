

import { createReducer, on } from "@ngrx/store";
import { loadselectedfactory,
  loadselecteddata,
  // loadselectedinput,
  loadselectedmachine, loadselectedproductionline, reserselected } from "./information-list.action";
import { datainitialstate, dropDownInitialState } from "./information-list.state";


// 版本三


const _dropDownSelectedReducer = createReducer(
  dropDownInitialState,
  on(loadselecteddata, (state, action) =>{
    return{
      ...state,
      datalist:action.data
    }
  }),
  on(loadselectedfactory, (state, action) =>{
    return{
      ...state,
      selectedFactory:action.value
    };
  }),
  on(loadselectedproductionline, (state, action) =>{
    // const _selectedproduct = {...action.data} ;
    // console.log(_selectedproduct)
    // const _selectedproduction = Object.assign({}, action.data)
    return{
      ...state,
      // selectedproduction:[action.data].map((item:any) => {return item = item })
      // selectedproduction:_selectedproduction
      selectedProduction:action.value
    };
  }),
  on(loadselectedmachine, (state, action) =>{
    return{
      ...state,
      selectedMachine:action.value
    };
  }),
  on(reserselected, (state) =>{
    return{
      ...state,
      // selectedfactory:'',
      // selectedproduction:'',
      // selectedmachine:''
    }
  })
)

export function dropDownSelectedReducer(state:any, action:any){
  return _dropDownSelectedReducer(state, action);
}




// ************************************************************ 測試版本二
// const _selectedInputReducer = createReducer(
//   dataintialinput,
//   on(loadselectedinput, (state, action) =>{
//     const _inputvalue = {...action.value}
//     return{
//       ...state,
//       selectedfactory:_inputvalue
//     }
//   })
// )

// const _selectedDataReducer = createReducer(
//   datainitialstate,
//   on(loadselecteddata, (state, action) =>{
//     return{
//       ...state,
//       datalist:action.data
//     }
//   })
// )

// export function selectedInputReducer(stata:any, aciton:any){
//   return _selectedInputReducer(stata, aciton);
// }

// export function selectedDataReducer(state:any, action:any){
//   return _selectedDataReducer(state, action);
// }
// ************************************************************ 測試版本二



