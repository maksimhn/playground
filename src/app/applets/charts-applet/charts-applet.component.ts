import { Component } from '@angular/core';
import { StaticTextService } from '../../services/static-text.service';


@Component({
  selector: 'app-charts-applet',
  templateUrl: './charts-applet.component.html',
  styleUrls: [ './charts-applet.component.css' ],
  providers: [StaticTextService]
})
export class ChartsAppletComponent {
  intro: string;
  single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(staticTextService: StaticTextService) {
    Object.assign(this, {
      single: staticTextService.getChartsDataSingle(),
      multi: staticTextService.getChartsDataMulti()
    });

    this.intro = staticTextService.getChartsIntro();
  }

  onSelect(event) {
    console.log(event);
  }

  addRandomDatapoint() {
    let randomIndex = Math.floor(Math.random() * 3);
    let year = this.multi[randomIndex].series.length + 2010;
    let tempMultiArray = this.multi;
    tempMultiArray.forEach((item) => {
      item.series.push({
        'name': year.toString(),
        'value': Math.floor(Math.random() * 9000000)
      });
    });
    this.multi = [...tempMultiArray];

    let tempSingleObject = this.single;
    let tempName =  tempSingleObject[0].name;
    tempSingleObject.shift();
    tempSingleObject.push({
      'name': tempName,
      'value': Math.floor(Math.random() * 9000000)
    });
    this.single = [...tempSingleObject];
  }

}
