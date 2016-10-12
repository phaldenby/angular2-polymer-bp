import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('iron-icon'),
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-menu'),
    PolymerElement('paper-item'),
    PolymerElement('paper-menu-button'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-input'),
    PolymerElement('paper-button'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-spinner'),
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(ROUTES, { useHash: false }),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
