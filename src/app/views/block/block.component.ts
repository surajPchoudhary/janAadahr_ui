import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
declare var $: any;
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
category:any
  constructor() { }

  ngOnInit() {
   this.block()
  }

  

block(){
var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title: {
    text: "Blocks"
  },
  axisY: {
    title: "Number of Families",
    titleFontColor: "#4F81BC",
    lineColor: "#4F81BC",
    labelFontColor: "#4F81BC",
    tickColor: "#4F81BC"
  },
  axisY2: {
    title: "Number of Members ",
    titleFontColor: "#a2aba2",
    lineColor: "#a2aba2",
    labelFontColor: "#a2aba2",
    tickColor: "#a2aba2"
  },
  toolTip: {
    shared: true
  },
  legend: {
    cursor: "pointer",
    // itemclick: toggleDataSeries
  },
  data: [{
    type: "column",
    
    name: "Number of Families",
    legendText: "Number of Families",
    showInLegend: true,
    dataPoints:
     [
      { label: "JAWAJA", y: 1266000.21 },
      { label: "KEKRI", y: 1302890.25 },
      { label: "KISHANGARH", y: 1157980.20 },
      { label: "MASUDA", y: 1480000.77 },
      { label: "PEESANGAN", y: 1010000.50 },
      { label: "SARWAR", y: 970000.8 }
    ]
  },
  {
    type: "column",
    
    name: "Number of Members",
    legendText: "Number of Members",
    axisYType: "secondary",
    showInLegend: true,
    color: '#a2aba2',
    dataPoints: [
      { label: "JAWAJA", y: 1367080.21 },
      { label: "KEKRI", y: 1403900.25 },
      { label: "KISHANGARH", y: 1259980.20 },
      { label: "MASUDA", y: 1585000.77 },
      { label: "PEESANGAN", y: 1210100.50 },
      { label: "SARWAR", y: 1074500.8 }
    ]
  }]
});
chart.render();
}
  }


