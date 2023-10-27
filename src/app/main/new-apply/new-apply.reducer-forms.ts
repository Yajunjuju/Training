

import { Action } from "@ngrx/store";
import { FormGroupState, createFormGroupState, createFormStateReducerWithUpdate, onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate} from "ngrx-forms";
import { minLength, pattern, required } from 'ngrx-forms/validation';


export interface ApplyForm{
  machine_name:string ;
  person_name:string ;
  phone_number:string;
  date:string;
}

export const initialApplyForm:ApplyForm = {
  machine_name:'',
  person_name:'',
  phone_number:'',
  date:'',
}

export interface AppForm{
  newApplyForm:ApplyForm
}

export interface AppState{
  newApplyForm:FormGroupState<AppForm>;
}

const FORM_ID = 'NewApplyForm';

export const INITIAL_STATE = createFormGroupState<AppForm>(FORM_ID, {
  newApplyForm:initialApplyForm
})

export const initialState:AppState={
  newApplyForm:INITIAL_STATE
}

export const newApplyFormValidation = updateGroup<ApplyForm>({
  machine_name:validate([required,minLength(2)]),
  person_name:validate([required,minLength(2)]),
  phone_number:validate([required,pattern(/[0-9]/)]),
  date:validate([required,pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])

})

export const formReducer = createFormStateReducerWithUpdate<AppForm>(
  updateGroup<AppForm>({
    newApplyForm:newApplyFormValidation
  })
)

export function appReducer(state = initialState, action:Action): AppState{
  const newApplyForm = formReducer(state.newApplyForm, action);
  if(newApplyForm !== state.newApplyForm){
    state = {...state,newApplyForm};
  }

  switch(action.type){
    // case '[New Apply Form] load ngrx forms data':
    //   return state;
    default:{
      return state
    }
  }
}

// export const appReducer = {
//   newApplyForm:formReducer
// }

// const _applyReducer = createReducer(
//   INITIAL_STATE,
//   onNgrxForms()
// )

// export  const applyReducer = wrapReducerWithFormStateUpdate(
//   _applyReducer,
//   (state) => state.ApplyForm,
//   newApplyFormValidation
// );




