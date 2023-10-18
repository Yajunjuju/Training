import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loginModel } from "../model/login.model";


const getLoginState = createFeatureSelector<loginModel>('login');

export const getLogin = createSelector(getLoginState, (state) =>{
  return state.isLogin;
})
