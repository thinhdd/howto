import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryComponent } from './secondary/secondary.component';

@NgModule({
  imports: [
    // part of the BrowserModule, (all the basics of Angular templating: bindings, *ngIf, *ngFor…
    CommonModule
  ],
  exports: [SecondaryComponent],
  providers: [],
  declarations: [SecondaryComponent],
  bootstrap: [SecondaryComponent]
})
export class SecondaryModule { }
