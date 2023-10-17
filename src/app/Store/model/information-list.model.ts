

export interface dropDownSelectedModel{
  // selectedfactory:[],
  // selectedproduction:[],
  // selectedmachine:[]
  datalist:any[];
  selectedFactory:string | null;
  selectedProduction:string | null;
  selectedMachine:string | null;
}

// export interface dropDownSelectedModel{
//   factory:factories,
//   production:productions,
//   machine:machines
// }

export interface factories{
  factoryList:factoryModel[]
}
export interface factoryModel{
  factoryName:string,
  production:[]
}

// ----------------------------------------
export interface productions{
  productionList:productionModel[]
}
export interface productionModel{
  id:number,
  productionName:string,
  machine:[]
}
// ------------------------------------------
export interface machines{
  machineList:machineModel[]
}
export interface machineModel{
  id:number,
  machineName:string
}




// ************************************************************ 測試版本二


// export interface selectedinput{
//   selectedfactory:[],
//   selectedproduction:[],
//   selectedmachine:[]
// }

export interface selecteddata{
  datalist:[]
}

// ************************************************************ 測試版本二



// export interface DropdownListState{
//   datalist:any[];
//   selectedFactory:string | null;
//   selectedProduction:string | null;
//   selectedMechine:string | null;
// }
