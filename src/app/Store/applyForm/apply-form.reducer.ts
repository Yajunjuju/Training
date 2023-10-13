import { loaddate, loadmachinename, loadpersonname, loadphonenumber } from './apply-form.action';
import { applyFormInitialState } from './apply-form.state';
import { createReducer, on } from "@ngrx/store";


const _applyFormReducer = createReducer(
  applyFormInitialState,

  on(loadmachinename, (state, action) =>{
    return {
      ...state,
      machine_name:action.typing
    };
  }),
  on(loadpersonname, (state, action) =>{
    return {
      ...state,
      person_name:action.typing
    };
  }),
  on(loadphonenumber, (state, action) =>{
    return {
      ...state,
      phone_number:action.typing
    };
  }),
  on(loaddate, (state, action) =>{
    return {
      ...state,
      date:action.typing
    };
  }),
)
