import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginModel } from '../Store/model/login.model';
import { loadloginstate } from '../Store/login/login.action';
import { getLogin } from '../Store/login/login.selector';
import { dropDownSelectedModel } from '../Store/model/information-list.model';
import { resetapplyform } from '../Store/applyForm/apply-form.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogin:boolean;

  constructor(private store:Store<{login:loginModel, dropdownselected:dropDownSelectedModel}> ){}



  ngOnInit(): void {
    this.isLogin=false;
    this.store.select(getLogin).subscribe(res =>{
      res
    })
  }

  logInandOut() {
    this.isLogin = !this.isLogin;
    this.store.dispatch(loadloginstate({value:this.isLogin}));

    // 登出清空表單欄位
    if(!this.isLogin){
      this.store.dispatch(resetapplyform());
    }
  }


}

