
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadselectedfactory, loadselectedmachine, loadselectedproductionline, reserselected } from 'src/app/Store/informationList/information-list.action';
import { getselectedfactory, getselectedmachine, getselectedproduction } from 'src/app/Store/informationList/information-list.selector';
import { dropDownSelectedModel} from 'src/app/Store/model/information-list.model';

import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})

export class InformationListComponent implements OnInit{

  datas:Array<any> = [];

  selectedfactory!:any;
  selectedproduction!:any;
  selectedmachine!:any;

  // dropdownList:dropdownListModel = {
  //   selectedFactory:this.selectedfactory,
  //   selectedProduction:this.selectedproduction,
  //   selectedMachine:this.selectedmachine
  // }

  factoryList:Array<any> = [];
  productionList:Array<any> = [];
  machineList:Array<any> = [];

  constructor(private datasvc:DataService, private store:Store<{dropdownselected:dropDownSelectedModel}>){}

  ngOnInit(): void {

    // 取得下拉選單及表單
    this.getDataList();
    this.getFactoryList();

    // 取得暫存之選擇欄位
    this.store.select(getselectedfactory).subscribe(res =>{
      this.selectedfactory = res;
    })
    this.store.select(getselectedproduction).subscribe(res =>{
      this.selectedproduction = res;
    })
    this.store.select(getselectedmachine).subscribe(res =>{
      this.selectedmachine = res;
    })

    // 當欄位有值產生相對應的list
    if(this.selectedfactory){
      this.productionList = this.selectedfactory.production
      if(this.selectedproduction){
        this.machineList = this.selectedproduction.machine
      }
    }
  }

  // 取得完整資料
  getDataList(){
    this.datasvc.getData().subscribe(res =>{
      this.datas = res;
    });
  }

  // 取得下拉選單資料
  getFactoryList(){
    this.datasvc.getFactory().subscribe(res =>{
      this.factoryList = res;
    });
  }

  // 取得產線下拉選單
  getProductionList(factoryName:string) {
    this.productionList = this.factoryList
      .filter((item) => {return item.factoryName == factoryName })
      .map(item => {return item = item.production })[0];

      this.selectedproduction = null;
      this.selectedmachine = null;

      this.store.dispatch(loadselectedfactory({data:this.selectedfactory}));
      this.store.dispatch(loadselectedproductionline({data:this.selectedproduction}));
      this.store.dispatch(loadselectedmachine({data:this.selectedmachine}));
  }

  // 取得機台下拉選單
  getMachineList(name:string) {
    this.machineList = this.productionList
      .filter((item:any) => { return item.productionName == name })
      .map((item:any) => { return item = item.machine })[0];

      this.selectedmachine = null;

      this.store.dispatch(loadselectedproductionline({data:this.selectedproduction}));
      this.store.dispatch(loadselectedmachine({data:this.selectedmachine}));
  }

  // 選擇欄位暫存
  setState(){
    this.store.dispatch(loadselectedmachine({data:this.selectedmachine}));
  }

  // 讓datas重設為未篩選
  reset(){
    this.getDataList();
    this.getFactoryList();
  }

  // 清空查詢
  clearQuery(){
    this.selectedfactory = null;
    this.selectedproduction = null;
    this.selectedmachine = null;
    this.reset();
    this.store.dispatch(reserselected());
  }

  // 查詢:比對選擇欄位過濾顯示資料
  queryButton(){
    let filterData = this.datas.filter((item) =>{
      if(this.selectedfactory && this.selectedproduction && this.selectedmachine){
        return item.factory_area == this.selectedfactory.factoryName && item.production_line == this.selectedproduction.productionName && item.machineName == this.selectedmachine.machineName;
      }else if(this.selectedfactory && this.selectedproduction){
        return item.factory_area == this.selectedfactory.factoryName && item.production_line == this.selectedproduction.productionName
      }else if(this.selectedfactory){
        return item.factory_area == this.selectedfactory.factoryName ;
      }else{
        return
      }
    })
    this.datas = filterData;
  }



}





