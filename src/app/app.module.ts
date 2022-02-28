import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
