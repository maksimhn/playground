import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppletsComponent } from './applets.component';
import { ChartsAppletComponent } from './charts-applet/charts-applet.component';
import { BotAppletComponent } from './bot-applet/bot-applet.component';
import { ReportAppletComponent } from './report-applet/report-applet.component';
import { PlayerAppletComponent } from './player-applet/player-applet.component';
import { VoiceAppletComponent } from './voice-applet/voice-applet.component';
import { ImageAppletComponent } from './image-applet/image-applet.component';
import { D3Service } from 'd3-ng2-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppletsComponent, ChartsAppletComponent, BotAppletComponent, ReportAppletComponent, PlayerAppletComponent, VoiceAppletComponent, ImageAppletComponent],
  providers: [D3Service]
})
export class AppletsModule { }
