import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { RequirementsComponent } from './requirements.component';

const routes: Routes = [
  { path: '', component: RequirementsComponent }
];

@NgModule({
  declarations: [
    RequirementsComponent
  ],
  imports: [
    CommonModule,
    RequirementsRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class RequirementsModule { }
