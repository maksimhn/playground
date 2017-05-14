import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageModule } from './error-page/error-page.module';

@NgModule({
  imports: [
    CommonModule, ErrorPageModule
  ],
  declarations: []
})
export class SharedModule { }
