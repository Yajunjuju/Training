
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

  factories:Array<any> = [];
  productionOptions:Array<any> = [];

  constructor(private datasvc:DataService){}

  ngOnInit(): void {

    // 從service取得資料
    // this.data$ = this.datasvc.getData();
    this.getDataList();
    this.getFactoryList();

  }

  getDataList(factoryName?: string){
    this.datasvc.getData().subscribe(res =>{
      this.datas = res;
    });

  }

  // 取得下拉選單資料
  getFactoryList(){
    this.datasvc.getFactory().subscribe(res =>{
      this.factories = res;
    });
  }

  // 讓datas重設為未篩選
  reset(){
    this.getDataList();
    this.getFactoryList();
  }

  selectFactory(factoryName:string) {
    this.productionOptions = this.factories
      .filter((item) => { return item.factoryName == factoryName })
      .map(item => { return item = item.production });
  }

  quireButton(){
    let filterData = this.datas.filter((item) =>{
      if(!(this.selectedproduction == undefined)){
        return item.factory_area == this.selectedfactory.factoryName && item.production_line == this.selectedproduction.name;
      }else{
        return item.factory_area == this.selectedfactory.factoryName ;
      }
    })
    this.datas = filterData;

  }


}




