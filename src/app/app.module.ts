import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserMainPageComponent} from "./user-main-page/user-main-page.component";

@NgModule({
  declarations: [
    AppComponent,
    UserMainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
