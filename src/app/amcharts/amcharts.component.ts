import { Component, OnInit } from '@angular/core';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.css']
})
export class AmchartsComponent implements OnInit {
  private chart: any;

  constructor(private AmCharts: AmChartsService)  {

  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': ['123', '456', '789']
    });
  }
}
