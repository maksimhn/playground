import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TilesComponent],
  exports: [TilesComponent]
})
export class TilesModule { }
