import { createAction, props } from "@ngrx/store";


// 設定action type
export const LOAD_MACHINE_NAME = '[Apply Form] load machine name';
export const LOAD_PERSON_NAME = '[Apply Form] load person name';
export const LOAD_PHONE_NUMBER = '[Apply Form] load phone number';
export const LOAD_DATE = '[Apply Form] load date';
export const RESET_APPLY_FORM = '[Applu Form] reset apply form';

// createaction
export const loadmachinename = createAction(LOAD_MACHINE_NAME, props<{typing:string}>());
export const loadpersonname = createAction(LOAD_PERSON_NAME, props<{typing:string}>());
export const loadphonenumber = createAction(LOAD_PHONE_NUMBER, props<{typing:string}>());
export const loaddate = createAction(LOAD_DATE, props<{typing:string}>());
export const resetapplyform = createAction(RESET_APPLY_FORM);


