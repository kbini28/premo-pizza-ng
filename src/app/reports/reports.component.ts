import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})



export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ordersByYear = [
    { name: "2017", value: 85000 },
    { name: "2018", value: 82000 },
    { name: "2019", value: 94000 },
    { name: "2020", value: 110000 },
    { name: "2021", value: 43000 }
 ];
 ordersByEmployee = [
  { name: "Raghu Schnell", value: 100 },
  { name: "Will Cooper", value: 80 },
  { name: "Kevin Elias", value: 120 },
  { name: "John Wick", value: 250 },
  { name: "Chuck Cheese", value: 90 }
];
ordersByZipcode = [
  { name: "55501", value: 105000 },
  { name: "55502", value: 40000 },
  { name: "55503", value: 53000 },
  { name: "55504", value: 115000 }
];

}
