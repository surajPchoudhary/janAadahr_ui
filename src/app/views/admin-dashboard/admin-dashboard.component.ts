import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.gender();
    this.districts();
    this.Blocks();
  }

  Blocks() {
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
        dataPoints: [
          { label: "Ajmer", y: 1266000.21 },
          { label: "Jaipur", y: 1302890.25 },
          { label: "Kota", y: 1157980.20 },
          { label: "Bikaner", y: 1480000.77 },
          { label: "Alwar", y: 1010000.50 },
          { label: "Hanumangarh", y: 970000.8 }
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
          { label: "Ajmer", y: 1367080.21 },
          { label: "Jaipur", y: 1403900.25 },
          { label: "Kota", y: 1259980.20 },
          { label: "Bikaner", y: 1585000.77 },
          { label: "Alwar", y: 1210100.50 },
          { label: "Hanumangarh", y: 1074500.8 }
        ]
      }]
    });
    chart.render();
  }
  districts() {
    var chart = new CanvasJS.Chart("districtData", {
      animationEnabled: true,
      title: {
        text: "Districts"
      },
      axisY: {
        title: "Number of Families",
        titleFontColor: "#40d640",
        lineColor: "#40d640",
        labelFontColor: "#40d640",
        tickColor: "#40d640"
      },
      axisY2: {
        title: "Number of Members ",
        titleFontColor: "#593aa6",
        lineColor: "#593aa6",
        labelFontColor: "#593aa6",
        tickColor: "#593aa6"
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
        color: '#40d640',
        dataPoints: [
          { label: "Ajmer", y: 1266000.21 },
          { label: "Jaipur", y: 1302890.25 },
          { label: "Kota", y: 1157980.20 },
          { label: "Bikaner", y: 1480000.77 },
          { label: "Alwar", y: 1010000.50 },
          { label: "Hanumangarh", y: 970000.8 }
        ]
      },
      {
        type: "column",
        name: "Number of Members",
        legendText: "Number of Members",
        axisYType: "secondary",
        showInLegend: true,
        color: '#593aa6',
        dataPoints: [
          { label: "Ajmer", y: 1367080.21 },
          { label: "Jaipur", y: 1403900.25 },
          { label: "Kota", y: 1259980.20 },
          { label: "Bikaner", y: 1585000.77 },
          { label: "Alwar", y: 1210100.50 },
          { label: "Hanumangarh", y: 1074500.8 }
        ]
      }]
    });
    chart.render();
  }


  gender() {
    let chart = new CanvasJS.Chart("genderData", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Gender Data"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 51.08, name: "Male", color: 'green' },
          { y: 27.34, name: "Female", color: 'pink' },
          { y: 10.34, name: "Others", color: 'blue' },

        ]
      }]
    });

    chart.render();
  }
}


