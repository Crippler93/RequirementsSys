import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'requirement', pathMatch: 'full' },
  {
    path: 'type',
    loadChildren: () =>
      import('./type/type.module').then((m) => m.TypeModule),
  },
  { path: 'requirement', loadChildren: () => import('./requirements/requirements.module').then(m => m.RequirementsModule) },
  { path: '**', redirectTo: 'requirement'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
