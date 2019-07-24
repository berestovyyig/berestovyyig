import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../header/component';
import { AppFooterComponent } from '../footer/component';
import { AppMainComponent } from '../main/component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      AppHeaderComponent,
      AppFooterComponent,
      AppMainComponent
  ]
})
export class AppModule { }
