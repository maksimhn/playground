import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap';
import { MomentModule } from 'angular2-moment';
import { TilesModule } from './tiles/tiles.module';
import { AppletsModule } from './applets/applets.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    MomentModule,
    AppletsModule,
    TilesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
