import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { TypeListComponent } from './type-list/type-list.component';
import { typeReducer } from './reducers/type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TypeEffect } from './effects/type.effect';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FormTypeComponent,
    TypeListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'type/new', component: FormTypeComponent },
      { path: 'type/list', component: TypeListComponent },
    ]),
    StoreModule.forRoot({ types: typeReducer }),
    EffectsModule.forRoot([TypeEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
