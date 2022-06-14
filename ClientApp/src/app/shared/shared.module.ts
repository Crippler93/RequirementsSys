import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDetailComponent } from './layout/master-detail/master-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MasterDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MasterDetailComponent
  ]
})
export class SharedModule { }
