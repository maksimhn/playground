import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TilesModule } from './tiles/tiles.module';
import { ChartsAppletComponent } from './applets/charts-applet/charts-applet.component';
import { AppletsModule } from './applets/applets.module';
import { TilesComponent } from './tiles/tiles.component';

const appRoutes: Routes = [
    { path: 'charts', component: ChartsAppletComponent },
    { path: 'tiles', component: TilesComponent },
    { path: '',
      redirectTo: '/tiles',
      pathMatch: 'prefix'
    }
  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    MomentModule,
    AppletsModule,
    TilesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
