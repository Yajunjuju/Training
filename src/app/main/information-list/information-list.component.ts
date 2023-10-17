import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadselectedfactory, loadselecteddata, loadselectedmachine, loadselectedproductionline } from 'src/app/Store/informationList/information-list.action';
import { getdatalist, getselecteddata, getselectedfactory, getselectedproduction } from 'src/app/Store/informationList/information-list.selector';
import { dropDownSelectedModel, selecteddata } from 'src/app/Store/model/information-list.model';

// import { loadselectedfactory, loadselectedmachine, loadselectedproductionline } from 'src/app/Store/informationList/information-list.action';
// import { getselectedfactory, getselectedproduction } from 'src/app/Store/informationList/information-list.selector';
// import { dropDownSelectedModel, productionModel } from 'src/app/Store/model/information-list.model';

import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})

export class InformationListComponent implements OnInit, OnChanges{



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

  ngOnChanges(changes: SimpleChanges): void {
    // 返回頁面應該從哪撈取資料？

  }

  constructor(private datasvc:DataService,
    // private store:Store<{input:selectedinput}>
    private store:Store<{dropdownselected:dropDownSelectedModel}>
    ){}

  ngOnInit(): void {

    // 取得下拉選單及表單
    this.getDataList();
    this.getFactoryList();

    // 取得暫存狀態
    this.store.select(getselectedfactory).subscribe(res =>{
      // this.selectedfactory = res;
      // this.factoryList = res;
    });

    this.store.select(getselectedproduction).subscribe(res =>{
      // this.returndata = res;
      // this.selectedproduction.setValue({id:this.returndata.id, productionName:this.returndata.productionName, machine:this.returndata.machine})
      // this.selectedproduction = res;
      // console.log(res)
    })

    // ************************************************************ 測試版本二

    // this.store.select(getselectedinput).subscribe(res =>{
    //   // this.selectedfactory.factoryName = res.selectedfactory
    //   console.log(res)
    // })
    // 取得暫存之下拉選單資料
    // this.store.select(getdatalist).subscribe(res =>{
    //     // this.datalist = res
    //   console.log(res);
    // })
    // ************************************************************ 測試版本二


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
      .map(item => {return item = item.production });

    // ************************************************************ 測試版本二
    // // 下拉選單資料進暫存
    this.store.dispatch(loadselecteddata({data:this.factoryList}));

    // if(this.selectedfactory){
    //   const _selectedinput:selectedinput ={
    //     selectedfactory:this.selectedfactory,
    //     selectedproduction:[],
    //     selectedmachine:[]
    //   }
    //   this.store.dispatch(loadselectedinput({value:_selectedinput}))
    // }else{

    // }
    // **************************************************************

    // 廠區欄位暫存
    this.store.dispatch(loadselectedfactory({value:this.selectedfactory.factoryName, data:this.selectedfactory}));
  }

  // 取得機台下拉選單
  getMachineList(name:string) {
    this.machineList = [
      this.productionList[0]
      .filter((item:any) => { return item.productionName == name })
      .map((item:any) => { return item = item.machine })
      ];
    // 產線欄位暫存
    this.store.dispatch(loadselectedproductionline({value:this.selectedproduction.productionName, data:this.productionList}));
  }

  // 機台欄位暫存
  setState(){
    this.store.dispatch(loadselectedmachine({value:this.selectedmachine.machineName, data:this.selectedmachine}));
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

  // 比對選擇欄位過濾顯示資料
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




