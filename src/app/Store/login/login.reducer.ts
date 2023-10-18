
import { createReducer, on } from "@ngrx/store";
import { isLoginInitialState } from "./login.state";
import { loadloginstate } from "./login.action";

const _loginReducer = createReducer(
  isLoginInitialState,
  on(loadloginstate, (state,action) =>{
    return{
      ...state,
      isLogin:action.value
    }
  })
)

export function loginReducer(state:any, action:any){
  return _loginReducer(state, action)
}
