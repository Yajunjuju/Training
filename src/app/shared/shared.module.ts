import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    ShareDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    ShareDialogComponent
  ],
  providers:[DataService],
})
export class SharedModule {

}
