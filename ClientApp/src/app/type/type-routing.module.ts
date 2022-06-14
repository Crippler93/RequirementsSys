import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTypeComponent } from './containers/form-type/form-type.component';
import { TypeListComponent } from './containers/type-list/type-list.component';
import { TypeComponent } from './type.component';

const routes: Routes = [
  { path: '', component: TypeComponent, children: [
    { path: '', redirectTo: 'list'},
    { path: 'list', component: TypeListComponent },
    { path: 'new', component: FormTypeComponent },
    { path: '**', redirectTo: 'list'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRoutingModule {}
