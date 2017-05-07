import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TilesComponent } from './tiles.component';
import { ChartsTileComponent } from './charts-tile/charts-tile.component';
import { BotTileComponent } from './bot-tile/bot-tile.component';
import { ReportTileComponent } from './report-tile/report-tile.component';
import { PlayerTileComponent } from './player-tile/player-tile.component';
import { VoiceTileComponent } from './voice-tile/voice-tile.component';
import { ImageTileComponent } from './image-tile/image-tile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ TilesComponent, ChartsTileComponent, BotTileComponent, ReportTileComponent, PlayerTileComponent, VoiceTileComponent, ImageTileComponent ],
  exports: [ TilesComponent ]
})
export class TilesModule {
}
