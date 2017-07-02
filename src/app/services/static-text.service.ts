import { Injectable } from '@angular/core';

@Injectable()
export class StaticTextService {
  multi: { 'name': string; 'series': { 'name': string; 'value': number; }[]; }[];
  single: { 'name': string; 'value': number; }[];
  botDescription: string;
  tilesList: Array<{ id: number, name: string, link: string }>;
  copyRight: string;
  title: string;
  aboutMe: string;



  constructor() {
    this.title = 'This is a demo app and it showcases Pika\'s powers!';
    this.copyRight = 'Maksim Hranin - 2017';
    this.aboutMe = 'I gathered here some examples of things that I enjoyed putting together. Of course, there is an infinite amount of those I left out, but this is a tiny fraction of what\'s possible in the world of web-apps these days. I will probably add more widgets here as I discover interesting ones. Design isn\'t my strongest suite, I am first to admit that. So please forgive me the audacity of using some bootstrap here.';
    this.tilesList = [
      {
        id: 1,
        name: 'Charts',
        link: '/charts'
      },
      {
        id: 2,
        name: 'Bot',
        link: '/bot'
      },
      {
        id: 3,
        name: 'Image',
        link: '/image'
      },
      {
        id: 4,
        name: 'Voice',
        link: '/voice'
      },
      {
        id: 5,
        name: 'Report',
        link: '/report'
      },
      {
        id: 6,
        name: 'Player',
        link: '/player'
      }
    ];
    this.botDescription = 'Yes, his name is quite original, I\'m well aware! But frankly he doesn\'t deserve a better name yet for he is not the sharpest knife in the drawer... Ask him about weather, he seems to like this topic for some reason... He also has a memory of a goldfish so if you reload this page he\'ll forget everything.';

    this.single = [
      {
        'name': 'Germany',
        'value': 8940000
      },
      {
        'name': 'USA',
        'value': 5000000
      },
      {
        'name': 'France',
        'value': 7200000
      }
    ];

    this.multi = [
      {
        'name': 'Germany',
        'series': [
          {
            'name': '2010',
            'value': 7300000
          },
          {
            'name': '2011',
            'value': 8940000
          }
        ]
      },

      {
        'name': 'USA',
        'series': [
          {
            'name': '2010',
            'value': 7870000
          },
          {
            'name': '2011',
            'value': 8270000
          }
        ]
      },

      {
        'name': 'France',
        'series': [
          {
            'name': '2010',
            'value': 5000002
          },
          {
            'name': '2011',
            'value': 5800000
          }
        ]
      }
    ];
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

  getTilesList() {
    return this.tilesList;
  }

  getBotDescription() {
    return this.botDescription;
  }

  getChartsDataSingle() {
    return this.single;
  }

  getChartsDataMulti() {
    return this.multi;
  }

}
