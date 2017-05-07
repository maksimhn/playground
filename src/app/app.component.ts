import { Component } from '@angular/core';
import { StaticTextService } from './services/static-text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ StaticTextService ]
})
export class AppComponent {
  copyRight: string;
  title: string;
  aboutMe: string;

  constructor(staticTextService: StaticTextService, private _router: Router) {
    this.aboutMe = staticTextService.getAboutMe();
    this.title = staticTextService.getTitle();
    this.copyRight = staticTextService.getCopyRight();
  }

  showBackToTilesButton() {
    return this._router.url !== '/tiles';
  }
}
