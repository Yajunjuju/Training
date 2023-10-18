import { createAction, props } from "@ngrx/store";


export const LOAD_LOGIN_STATE = '[Login] load login state';

export const loadloginstate = createAction(LOAD_LOGIN_STATE, props<{value:any}>());
