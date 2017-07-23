import { Component } from '@angular/core';
import { StaticTextService } from './services/static-text.service';
import { Router } from '@angular/router';
import { DynamicDataService } from './services/dynamic-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ StaticTextService, DynamicDataService ]
})
export class AppComponent {
  copyRight: string;
  title: string;
  aboutMe: string;

  constructor(_staticTextService: StaticTextService, private _router: Router) {
    this.aboutMe = _staticTextService.getAboutMe();
    this.title = _staticTextService.getTitle();
    this.copyRight = _staticTextService.getCopyRight();
  }

  showBackToTilesButton() {
    return this._router.url !== '/tiles';
  }
}
