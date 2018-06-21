import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BiddingExComponent} from './bidding-ex/bidding-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    BiddingExComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
