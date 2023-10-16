

import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadselectedfactory, loadselectedmachine, loadselectedproductionline } from 'src/app/Store/informationList/information-list.action';
import { getdropdownselected } from 'src/app/Store/informationList/information-list.selector';
import { dropDownSelectedModel } from 'src/app/Store/model/information-list.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})

export class InformationListComponent implements OnInit{

  // data$:Observable<any>;
  datas:Array<any> = [];

  selectedfactory!:any;
  selectedproduction!:any;
  selectedmachine!:any;

  factoryList:Array<any> = [];
  productionList:Array<any> = [];
  machineList:Array<any> = [];

  // factoryName!:string;
  // productionName!:string;
  // machineName!:string;

  constructor(private datasvc:DataService, private store:Store<{dropdownselected:dropDownSelectedModel}>){}

  ngOnInit(): void {

    this.getDataList();
    this.getFactoryList();

    this.store.select(getdropdownselected).subscribe(res =>{
      if(this.selectedfactory && this.selectedproduction && this.selectedmachine){
       this.selectedfactory.factoryName = res.selectedfactory;
       this.selectedproduction.productionName = res.selectedproduction;
       this.selectedmachine.machineName = res.selectedmachine;
      }
      console.log(res)
      console.log(this.selectedfactory)
      console.log(this.selectedproduction)
      console.log(this.selectedmachine)

    })

  }

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


  getProductionList(factoryName:string) {
    this.productionList = this.factoryList
      .filter((item) => {return item.factoryName == factoryName })
      .map(item => {return item = item.production });
    this.store.dispatch(loadselectedfactory({value:this.selectedfactory.factoryName}));
  }


  getMachineList(name:string) {
    this.machineList = [
      this.productionList[0]
      .filter((item:any) => { return item.productionName == name })
      .map((item:any) => { return item = item.machine })
      ];
    this.store.dispatch(loadselectedproductionline({value:this.selectedproduction.productionName}));
  }

  // 讓datas重設為未篩選
  reset(){
    this.getDataList();
    this.getFactoryList();
  }


  // 清空查詢
  clearQuery(){
    this.selectedfactory = '';
    this.selectedproduction = '';
    this.selectedmachine = '';
    this.reset()
  }

  queryButton(){
    // this.getDataList();
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

  setState(){
    this.store.dispatch(loadselectedmachine({value:this.selectedmachine.machineName}));
  }


}




