import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts-tile',
  templateUrl: './charts-tile.component.html',
  styleUrls: [ './charts-tile.component.css' ]
})
export class ChartsTileComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  goToApplet() {
    this.router.navigate([ './charts' ]);
  }

}
