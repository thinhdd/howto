import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SecondaryModule} from './secondary/secondary.module';
import {ShareModule} from './share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Provides services that are essential to launch and run a browser app.
    BrowserModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
