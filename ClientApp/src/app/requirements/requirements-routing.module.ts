import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './container/create/create.component';
import { ListComponent } from './container/list/list.component';
import { RequirementsComponent } from './requirements.component';

const routes: Routes = [
  { path: '', component: RequirementsComponent, children: [
    {path: 'list', component: ListComponent},
    {path: 'create', component: CreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementsRoutingModule { }
