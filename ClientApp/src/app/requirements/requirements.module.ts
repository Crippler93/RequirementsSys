import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { RequirementsComponent } from './requirements.component';
import { ListComponent } from './container/list/list.component';
import { CreateComponent } from './container/create/create.component';

@NgModule({
  declarations: [
    RequirementsComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RequirementsRoutingModule
  ]
})
export class RequirementsModule { }
