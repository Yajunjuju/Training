
import { Component, OnInit} from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})

export class InformationListComponent implements OnInit{

  // data$:Observable<any>;
  datas:Array<any> = [];

  selectedfactory:any;
  selectedproduction:any;
  selectedmachine:any;

  factoryList:Array<any> = [];
  productionList:Array<any> = [];
  machineList:Array<any> = [];

  constructor(private datasvc:DataService){}

  ngOnInit(): void {

    // 從service取得資料
    // this.data$ = this.datasvc.getData();
    this.getDataList();
    this.getFactoryList();

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
  }

  getMachineList(name:string) {
    this.machineList = [
      this.productionList[0]
      .filter((item:any) => { return item.productionName == name })
      .map((item:any) => { return item = item.machine })
      ];
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
    let filterData = this.datas.filter((item) =>{
      if(this.selectedfactory && this.selectedproduction && this.selectedmachine){
        return item.factory_area == this.selectedfactory.factoryName && item.production_line == this.selectedproduction.productionName && item.machineName == this.selectedmachine.machineName;
      }else if(this.selectedfactory && this.selectedproduction){
        return item.factory_area == this.selectedfactory.factoryName && item.production_line == this.selectedproduction.productionName
      }else{
        return item.factory_area == this.selectedfactory.factoryName ;
      }
    })
    this.datas = filterData;

  }


}




