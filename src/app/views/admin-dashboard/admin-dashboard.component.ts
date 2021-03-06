import { Component, OnInit, Inject } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/admin.service';
 

declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dataPoint:any
   t1:any = {}
  transactions:any;
  district:any;
  gender1:any;
  d1:any;
  g1:any;
  showLoadingIndicator=true;
  constructor(public ngxuiservice:NgxUiLoaderService,private route:Router,public service:AdminService) { }

  ngOnInit() {
   
    // this.ngxuiservice.start()
    this.totalDistrict();
    this.totalTransaction()
    this.genderData() 
    // this.ngxuiservice.stop()
  }


  districts(result) {
    // $('#showLoadingIndicator').show();
    this.ngxuiservice.start()
    console.log(result)
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
        click: function(e) {
          console.log("result", result)
          for (var i = 0; i < 34; i++) {
            if (e.dataPoint.label == result[i].data.DISTRICT) {
              window.location.href = '/blocks?district=' + e.dataPoint.label
  
            }
          }
  
        },
        name: "Number of Families",
        legendText: "Number of Families",
        showInLegend: true,
        color: '#40d640',
        dataPoints: result.map((obj,index) =>{
          let ret = { label: obj.data.DISTRICT, y: obj.data.TOTAL_FAMILIES };
          return ret;
         })
      //   dataPoints: [
      //     { label: result[0].data.DISTRICT, y: result[0].data.TOTAL_FAMILIES },
      //     { label:result[1].data.DISTRICT, y: result[1].data.TOTAL_FAMILIES },
      //     { label: result[2].data.DISTRICT, y: result[2].data.TOTAL_FAMILIES },
      //     { label: result[3].data.DISTRICT, y: result[3].data.TOTAL_FAMILIES },
      //     { label: result[4].data.DISTRICT, y: result[4].data.TOTAL_FAMILIES },
      //     { label: result[5].data.DISTRICT, y: result[5].data.TOTAL_FAMILIES },
      //     { label: result[6].data.DISTRICT, y: result[6].data.TOTAL_FAMILIES },
      //     { label:result[7].data.DISTRICT, y: result[7].data.TOTAL_FAMILIES },
      //     { label: result[8].data.DISTRICT, y: result[8].data.TOTAL_FAMILIES },
      //     { label: result[9].data.DISTRICT, y: result[9].data.TOTAL_FAMILIES },
      //     { label: result[10].data.DISTRICT, y: result[10].data.TOTAL_FAMILIES },
      //     { label: result[11].data.DISTRICT, y: result[11].data.TOTAL_FAMILIES },
      //     { label: result[12].data.DISTRICT, y: result[12].data.TOTAL_FAMILIES },
      //     { label:result[13].data.DISTRICT, y: result[13].data.TOTAL_FAMILIES },
      //     { label: result[14].data.DISTRICT, y: result[14].data.TOTAL_FAMILIES },
      //     { label: result[15].data.DISTRICT, y: result[15].data.TOTAL_FAMILIES },
      //     { label: result[16].data.DISTRICT, y: result[16].data.TOTAL_FAMILIES },
      //     { label: result[17].data.DISTRICT, y: result[17].data.TOTAL_FAMILIES },
      //     { label: result[18].data.DISTRICT, y: result[18].data.TOTAL_FAMILIES },
      //     { label:result[19].data.DISTRICT, y: result[19].data.TOTAL_FAMILIES },
      //     { label: result[20].data.DISTRICT, y: result[20].data.TOTAL_FAMILIES },
      //     { label: result[21].data.DISTRICT, y: result[21].data.TOTAL_FAMILIES },
      //     { label: result[22].data.DISTRICT, y: result[22].data.TOTAL_FAMILIES },
      //     { label: result[23].data.DISTRICT, y: result[23].data.TOTAL_FAMILIES },
      //     { label: result[24].data.DISTRICT, y: result[24].data.TOTAL_FAMILIES },
      //     { label:result[25].data.DISTRICT, y: result[25].data.TOTAL_FAMILIES },
      //     { label: result[26].data.DISTRICT, y: result[26].data.TOTAL_FAMILIES },
      //     { label: result[27].data.DISTRICT, y: result[27].data.TOTAL_FAMILIES },
      //     { label: result[28].data.DISTRICT, y: result[28].data.TOTAL_FAMILIES },
      //     { label: result[29].data.DISTRICT, y: result[29].data.TOTAL_FAMILIES },
      //     { label: result[30].data.DISTRICT, y: result[30].data.TOTAL_FAMILIES },
      //     { label:result[31].data.DISTRICT, y: result[31].data.TOTAL_FAMILIES },
      //     { label: result[32].data.DISTRICT, y: result[32].data.TOTAL_FAMILIES },
      //     { label: result[33].data.DISTRICT, y: result[33].data.TOTAL_FAMILIES }
          
      //   ]
      },
      {
        type: "column",
        click: function(e) {
          console.log("result", result)
          for (var i = 0; i < 34; i++) {
            if (e.dataPoint.label == result[i].data.DISTRICT) {
              window.location.href = '/blocks?district=' + e.dataPoint.label
  
            }
          }
  
        },
        name: "Number of Members",
        legendText: "Number of Members",
        axisYType: "secondary",
        showInLegend: true,
        color: '#593aa6',
        dataPoints: result.map((obj,index) =>{
          let ret = { label: obj.data.DISTRICT, y: obj.data.TOTAL_MEMBERS };
          return ret;
         })
        // dataPoints: [
        //   { label: result[0].data.DISTRICT, y: result[0].data.TOTAL_MEMBERS },
        //   { label:result[1].data.DISTRICT, y: result[1].data.TOTAL_MEMBERS },
        //   { label: result[2].data.DISTRICT, y: result[2].data.TOTAL_MEMBERS },
        //   { label: result[3].data.DISTRICT, y: result[3].data.TOTAL_MEMBERS },
        //   { label: result[4].data.DISTRICT, y: result[4].data.TOTAL_MEMBERS },
        //   { label: result[5].data.DISTRICT, y: result[5].data.TOTAL_MEMBERS },
        //   { label: result[6].data.DISTRICT, y: result[6].data.TOTAL_MEMBERS },
        //   { label:result[7].data.DISTRICT, y: result[7].data.TOTAL_MEMBERS },
        //   { label: result[8].data.DISTRICT, y: result[8].data.TOTAL_MEMBERS },
        //   { label: result[9].data.DISTRICT, y: result[9].data.TOTAL_MEMBERS },
        //   { label: result[10].data.DISTRICT, y: result[10].data.TOTAL_MEMBERS },
        //   { label: result[11].data.DISTRICT, y: result[11].data.TOTAL_MEMBERS },
        //   { label: result[12].data.DISTRICT, y: result[12].data.TOTAL_MEMBERS },
        //   { label:result[13].data.DISTRICT, y: result[13].data.TOTAL_MEMBERS },
        //   { label: result[14].data.DISTRICT, y: result[14].data.TOTAL_MEMBERS },
        //   { label: result[15].data.DISTRICT, y: result[15].data.TOTAL_MEMBERS },
        //   { label: result[16].data.DISTRICT, y: result[16].data.TOTAL_MEMBERS },
        //   { label: result[17].data.DISTRICT, y: result[17].data.TOTAL_MEMBERS },
        //   { label: result[18].data.DISTRICT, y: result[18].data.TOTAL_MEMBERS },
        //   { label:result[19].data.DISTRICT, y: result[19].data.TOTAL_MEMBERS },
        //   { label: result[20].data.DISTRICT, y: result[20].data.TOTAL_MEMBERS },
        //   { label: result[21].data.DISTRICT, y: result[21].data.TOTAL_MEMBERS },
        //   { label: result[22].data.DISTRICT, y: result[22].data.TOTAL_MEMBERS },
        //   { label: result[23].data.DISTRICT, y: result[23].data.TOTAL_MEMBERS },
        //   { label: result[24].data.DISTRICT, y: result[24].data.TOTAL_MEMBERS },
        //   { label:result[25].data.DISTRICT, y: result[25].data.TOTAL_MEMBERS },
        //   { label: result[26].data.DISTRICT, y: result[26].data.TOTAL_MEMBERS },
        //   { label: result[27].data.DISTRICT, y: result[27].data.TOTAL_MEMBERS },
        //   { label: result[28].data.DISTRICT, y: result[28].data.TOTAL_MEMBERS },
        //   { label: result[29].data.DISTRICT, y: result[29].data.TOTAL_MEMBERS },
        //   { label: result[30].data.DISTRICT, y: result[30].data.TOTAL_MEMBERS },
        //   { label:result[31].data.DISTRICT, y: result[31].data.TOTAL_MEMBERS },
        //   { label: result[32].data.DISTRICT, y: result[32].data.TOTAL_MEMBERS },
        //   { label: result[33].data.DISTRICT, y: result[33].data.TOTAL_MEMBERS }
        // ]
      }]
    });
    chart.render();
    this.ngxuiservice.stop()
    // $('#showLoadingIndicator').hide();
  }
 
 
  gender(data) {

    this.ngxuiservice.start();
    console.log("GenderDatagraph",data);
    let chart = new CanvasJS.Chart("genderData", {
      theme: "light2",
      
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Gender Data"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y}",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: data[0].data.MALE, name: "Male", color: 'green' },
          { y: data[0].data.FEMALE, name: "Female", color: 'blue' },
          // { y: data.TotalGenderCount, name: "Total", color: 'blue' },
       
        ]
      }]
    });

    chart.render();
    this.ngxuiservice.stop();
  }
  

// onClick(e,result) {
//   console.log("result",result)
//   for(var i=0; i<5 ; i++){
//   if(e.dataPoint.label==result[i].data.DISTRICT){
//  window.location.href='/blocks?district='+e.dataPoint.label

//    } }

// }


totalTransaction(){
  this.ngxuiservice.start();
  this.service.getTotalTransaction().subscribe(data=>{
   
      this.transactions=data
      // this.result=this.transactions.result[0]
       this.t1=this.transactions.data
      console.log("totalTransaction",this.t1)

      this.ngxuiservice.stop();
  })
 
}

totalDistrict(){
  this.ngxuiservice.start();
  this.service.getDistrictCount().subscribe(data=>{
   
      this.district=data
   
      console.log("districts",this.district);
      this.ngxuiservice.stop();
      
      this.districts(this.district)

      
  })
 
}

  genderData() {
    this.ngxuiservice.start();
    this.service.getGender().subscribe(data => {
      this.gender1 = data
      console.log("GenderData", this.gender1)
 
      this.gender(this.gender1);
      this.ngxuiservice.stop();
     
    })
  }




}




