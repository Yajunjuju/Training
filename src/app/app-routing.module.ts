import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationListComponent } from './main/information-list/information-list.component';
import { NewApplyComponent } from './main/new-apply/new-apply.component';


const routes: Routes = [
  {
    path:'information-list',
    component:InformationListComponent
  },
  {
    path:'new-apply',
    component:NewApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing: true,
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
