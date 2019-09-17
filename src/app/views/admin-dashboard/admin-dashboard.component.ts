import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
import { Router } from '@angular/router';


 
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dataPoint:any
  display:any;
  constructor(private route:Router) { }
  ngOnInit() {
    this.gender();
    this.districts();
    // this.registeredCitizen()
    
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
        click: this.onClick,
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
        click: this.onClick,
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
onClick(e) {
  if(e.dataPoint.label=='Ajmer'){
 window.location.href='/blocks'
 }
}
// registeredCitizen(){
//   console.log("=================")
//   this.service.getRegisteredCitizen().subscribe(data=>{
//     console.log("registerdCitizen",data)
  
//   })
 
// }
}
