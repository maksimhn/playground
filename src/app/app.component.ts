import { Component } from '@angular/core';
import { StaticTextService } from './services/static-text.service';

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

  constructor(staticTextService: StaticTextService) {
    this.aboutMe = staticTextService.getAboutMe();
    this.title = staticTextService.getTitle();
    this.copyRight = staticTextService.getCopyRight();
  }
}
