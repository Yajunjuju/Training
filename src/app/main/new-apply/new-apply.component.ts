import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-apply',
  templateUrl: './new-apply.component.html',
  styleUrls: ['./new-apply.component.css']
})

export class NewApplyComponent implements OnInit  {


  // 綁定表單名稱及型別
  newApplyForm:FormGroup;

  @Input() isLogin:boolean;

  // 透過DI取得FormBuilder物件，用以建立表單
  constructor(private formBuilder:FormBuilder){}

  // 當Component初始化時初始化表單
  ngOnInit(): void {
    this.newApplyForm = this.formBuilder.group({
      machine_name:['',[Validators.required,Validators.minLength(2)]],
      person_name:['',[Validators.required,Validators.minLength(2)]],
      phone_number:['',[Validators.required,Validators.pattern(/[0-9]/)]],
      date:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
    })
  }

  submit(){
    if(!this.isLogin){
      console.log(this.isLogin)
      alert("請先登入會員");
    }
  }

  onSubmit(){
    console.log(this.newApplyForm.value)
  }
}
