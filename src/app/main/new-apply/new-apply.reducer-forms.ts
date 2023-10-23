
import { FormGroupState, createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate} from "ngrx-forms";
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

export interface AppState{
  newApplyForm:FormGroupState<AppForm>;
}

export interface AppForm{
  newApplyForm:ApplyForm
}

export const INITIAL_STATE = createFormGroupState<AppForm>('NewApplyForm', {
  newApplyForm:initialApplyForm
})

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

export const appReducer = {
  newApplyForm:formReducer
}

export const initialState:AppState = {
  newApplyForm:INITIAL_STATE
}



