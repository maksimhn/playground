import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotAppletComponent } from './bot-applet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotAppletComponent],
  exports: [BotAppletComponent]
})
export class BotAppletModule { }
