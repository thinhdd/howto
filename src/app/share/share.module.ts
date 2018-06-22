import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondaryModule} from '../secondary/secondary.module';
import {ThirdModule} from '../third/third.module';
import {SecondaryComponent} from '../secondary/secondary/secondary.component';
import {ThirdComponent} from '../third/third/third.component';

@NgModule({
  imports: [
    CommonModule,
    SecondaryModule,
    ThirdModule
  ],
  exports: [SecondaryComponent, ThirdComponent],
  declarations: []
})
export class ShareModule { }
