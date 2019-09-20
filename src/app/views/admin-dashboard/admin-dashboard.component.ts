import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/admin.service';
 

declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dataPoint:any
   t1:any;
  transactions:any;
  citizen:any;
  gender1:any;
  c1:any;
  g1:any;
  constructor(private route:Router,public service:AdminService) { }

  ngOnInit() {
    // this.gender(data);
    this.districts();
    this.registeredCitizen()
    this.totalTransaction()
    this.genderData()
  }
  
  districts() {
    var ctx = document.getElementById("districtData");
    var chart = new CanvasJS.Chart(ctx, {
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
 
 
  gender(data) {
    console.log("GenderData",data);
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
        toolTipContent: "<b>{name}</b>: {y}",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: data.male, name: "Male", color: 'green' },
          { y: data.female, name: "Female", color: 'pink' },
          { y: data.TotalGenderCount, name: "Total", color: 'blue' },
       
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
registeredCitizen(){
  console.log("=================")
  this.service.getRegisteredCitizen().subscribe(data=>{
    
      this.citizen=data
      this.c1=this.citizen.Count
      console.log("registerdCitizen",this.c1)
  })
 
}

totalTransaction(){
  
  this.service.getTotalTransaction().subscribe(data=>{
   
      this.transactions=data
      // this.result=this.transactions.result[0]
      this.t1=this.transactions.Count
      console.log("totalTransaction",this.t1)
  })
 
}

  genderData() {

    this.service.getGender().subscribe(data => {
      this.gender1 = data
      console.log("GenderData", this.gender1)
      this.gender(this.gender1)
    })
  }




}




