import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
import { AdminService } from 'src/app/admin.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
district:any

  constructor(public service : AdminService,public routes:ActivatedRoute) { }

  ngOnInit() {
    this.district =this.routes.snapshot.queryParamMap.get('district')
  this.getblock()
  }

  

block(result){
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
     
      { label: result[0].data.Blocks, y: result[0].data.TOTAL_FAMILIES },
          { label:result[1].data.Blocks, y: result[1].data.TOTAL_FAMILIES },
          { label: result[2].data.Blocks, y: result[2].data.TOTAL_FAMILIES },
          { label: result[3].data.Blocks, y: result[3].data.TOTAL_FAMILIES },
          { label: result[4].data.Blocks, y: result[4].data.TOTAL_FAMILIES },
          { label: result[5].data.Blocks, y: result[5].data.TOTAL_FAMILIES },
          { label: result[6].data.Blocks, y: result[6].data.TOTAL_FAMILIES },
          { label: result[7].data.Blocks, y: result[7].data.TOTAL_FAMILIES },
          { label: result[8].data.Blocks, y: result[8].data.TOTAL_FAMILIES },
          { label: result[9].data.Blocks, y: result[9].data.TOTAL_FAMILIES },
          { label: result[10].data.Blocks, y: result[10].data.TOTAL_FAMILIES },
          { label: result[11].data.Blocks, y: result[11].data.TOTAL_FAMILIES },
          { label: result[12].data.Blocks, y: result[12].data.TOTAL_FAMILIES },
         
          
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
      { label: result[0].data.Blocks, y: result[0].data.TOTAL_MEMBERS },
          { label:result[1].data.Blocks, y: result[1].data.TOTAL_MEMBERS },
          { label: result[2].data.Blocks, y: result[2].data.TOTAL_MEMBERS },
          { label: result[3].data.Blocks, y: result[3].data.TOTAL_MEMBERS },
          { label: result[4].data.Blocks, y: result[4].data.TOTAL_MEMBERS },
          { label: result[5].data.Blocks, y: result[5].data.TOTAL_MEMBERS },
          { label: result[6].data.Blocks, y: result[6].data.TOTAL_MEMBERS },
          { label:result[7].data.Blocks, y: result[7].data.TOTAL_MEMBERS },
          { label: result[8].data.Blocks, y: result[8].data.TOTAL_MEMBERS },
          { label: result[9].data.Blocks, y: result[9].data.TOTAL_MEMBERS },
          { label: result[10].data.Blocks, y: result[10].data.TOTAL_MEMBERS },
          { label: result[11].data.Blocks, y: result[11].data.TOTAL_MEMBERS },
          { label: result[12].data.Blocks, y: result[12].data.TOTAL_MEMBERS },
         
    ]
  }]
});
chart.render();
}

getblock(){
this.service.getblockCount(this.district).subscribe(data=>{
  console.log("Blocks Data",data)
  this.block(data)
})
  
}
  }


