import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTypeComponent } from './containers/form-type/form-type.component';
import { TypeListComponent } from './containers/type-list/type-list.component';
import { TypeComponent } from './type.component';

const routes: Routes = [
  { path: '', component: TypeComponent },
  { path: 'list', component: TypeListComponent },
  { path: 'new', component: FormTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRoutingModule {}
