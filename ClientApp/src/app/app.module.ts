import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { typeReducer } from './type/state/type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TypeEffect } from './type/state/type.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ type: typeReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    EffectsModule.forRoot([TypeEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
