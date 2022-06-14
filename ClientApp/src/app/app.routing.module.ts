import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'type',
    loadChildren: () =>
      import('./type/type.module').then((m) => m.TypeModule),
  },
  { path: 'requirement', loadChildren: () => import('./requirements/requirements.module').then(m => m.RequirementsModule) },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
