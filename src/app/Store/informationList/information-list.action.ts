import { createAction, props } from "@ngrx/store";


export const LOAD_SELECTED_DATA = '[Information List] load selected data';
export const LOAD_SELECTED_FACTORY = '[Information List] load selected factory';
export const LOAD_SELECTED_PRODUCTIONLine = '[Information List] load selected productionLine';
export const LOAD_SELECTED_MACHINE = '[Information List] load selected machine';
export const RESET_SELECTED = '[Information List] reset selected';

export const loadselecteddata = createAction(LOAD_SELECTED_DATA, props<{data:any}>());
export const loadselectedfactory = createAction(LOAD_SELECTED_FACTORY, props<{value:string, data:any}>());
export const loadselectedproductionline = createAction(LOAD_SELECTED_PRODUCTIONLine, props<{value:string, data:any}>());
export const loadselectedmachine = createAction(LOAD_SELECTED_MACHINE, props<{value:string, data:any}>());
export const reserselected = createAction(RESET_SELECTED);





    // ************************************************************ 測試版本二

// export const LOAD_SELECTED_INPUT = '[Information List] load selected input';

// export const loadselectedinput = createAction(LOAD_SELECTED_INPUT, props<{value:any}>());

 // ************************************************************
