import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogin:boolean;

  constructor(){}


  ngOnInit(): void {
    this.isLogin=false;
  }

  logInandOut() {
    this.isLogin = !this.isLogin;
  }


}

