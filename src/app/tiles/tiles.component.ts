import { Component, OnInit } from '@angular/core';
import { StaticTextService } from '../services/static-text.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
  providers: [StaticTextService]
})
export class TilesComponent implements OnInit {
  private tilesList: Array<{id: number, name: string, link: string}>;

  constructor(staticTextService: StaticTextService) {
    this.tilesList = staticTextService.getTilesList();
  }

  ngOnInit() {
  }

}
