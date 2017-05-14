import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsAppletComponent } from '../applets/charts-applet/charts-applet.component';
import { BotAppletComponent } from '../applets/bot-applet/bot-applet.component';
import { ImageAppletComponent } from '../applets/image-applet/image-applet.component';
import { VoiceAppletComponent } from '../applets/voice-applet/voice-applet.component';
import { ReportAppletComponent } from '../applets/report-applet/report-applet.component';
import { PlayerAppletComponent } from '../applets/player-applet/player-applet.component';
import { TilesComponent } from '../tiles/tiles.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { ErrorPageModule } from '../shared/error-page/error-page.module';

const appRoutes: Routes = [
  {path: 'charts', component: ChartsAppletComponent},
  {path: 'bot', component: BotAppletComponent},
  {path: 'image', component: ImageAppletComponent},
  {path: 'voice', component: VoiceAppletComponent},
  {path: 'report', component: ReportAppletComponent},
  {path: 'player', component: PlayerAppletComponent},
  {path: 'tiles', component: TilesComponent},
  {
    path: '',
    redirectTo: '/tiles',
    pathMatch: 'prefix'
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), ErrorPageModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
