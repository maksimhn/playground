import { Injectable } from '@angular/core';

@Injectable()
export class StaticTextService {
  copyRight: any;
  title: string;
  aboutMe: string;

  constructor() {
    this.title = 'This is a demo app and it showcases Pika\'s powers!';
    this.copyRight = 'Maksim Hranin - 2017';
    this.aboutMe = 'I gathered here some examples of things that I enjoyed putting together. Of course, there is an infinite amount of those I left out, but this is a tiny fraction of what\'s possible in the world of web-apps these days. I will probably add more widgets here as I discover interesting ones. Design isn\'t my strongest suite, I am first to admit that. So please forgive me the audacity of using some bootstrap here.';
  }

  getAboutMe() {
    return this.aboutMe;
  }

  getTitle() {
    return this.title;
  }

  getCopyRight() {
    return this.copyRight;
  }

}
