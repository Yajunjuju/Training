import { createAction, props } from "@ngrx/store";



export const LOAD_SELECTED_FACTORY = '[Information List] load selected factory';
export const LOAD_SELECTED_PRODUCTIONLine = '[Information List] load selected productionLine';
export const LOAD_SELECTED_MACHINE = '[Information List] load selected machine';
export const RESET_SELECTED = '[Information List] reset selected';

export const loadselectedfactory = createAction(LOAD_SELECTED_FACTORY, props<{data:any}>());
export const loadselectedproductionline = createAction(LOAD_SELECTED_PRODUCTIONLine, props<{data:any}>());
export const loadselectedmachine = createAction(LOAD_SELECTED_MACHINE, props<{data:any}>());
export const reserselected = createAction(RESET_SELECTED);

// export const LOAD_SELECTED_DROPDOWN = '[Information List] load selected dropdown';
// export const loadselecteddropdown = createAction(LOAD_SELECTED_DROPDOWN, props<{data:any}>())
