import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TypeRoutingModule } from './type-routing.module';
import { TypeComponent } from './type.component';
import { ListComponent } from './components/list/list.component';
import { TypeListComponent } from './containers/type-list/type-list.component';
import { FormTypeComponent } from './containers/form-type/form-type.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [

    TypeComponent,
    ListComponent,
    TypeListComponent,
    FormTypeComponent,
    FormComponent,
  ],
  imports: [CommonModule, TypeRoutingModule, ReactiveFormsModule],
})
export class TypeModule {}
