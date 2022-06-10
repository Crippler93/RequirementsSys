import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { typeReducer } from './type/data/type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TypeEffect } from './type/data/type.effect';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'type',
        loadChildren: () =>
          import('./type/type.module').then((m) => m.TypeModule),
      },
    ]),
    StoreModule.forRoot({ types: typeReducer }),
    EffectsModule.forRoot([TypeEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
