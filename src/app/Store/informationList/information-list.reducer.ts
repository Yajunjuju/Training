import { createReducer, on } from "@ngrx/store";
import { dropDownInitialState } from "./information-list.state";
import { loadselectedfactory, loadselectedmachine, loadselectedproductionline, reserselected } from "./information-list.action";

const _dropDownSelectedReducer = createReducer(
  dropDownInitialState,
  on(loadselectedfactory, (state, action) =>{
    return{
      ...state,
      selectedfactory:action.value
    };
  }),
  on(loadselectedproductionline, (state, action) =>{
    return{
      ...state,
      selectedproduction:action.value
    };
  }),
  on(loadselectedmachine, (state, action) =>{
    return{
      ...state,
      selectedmachine:action.value
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
