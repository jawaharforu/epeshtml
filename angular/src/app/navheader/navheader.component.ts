import { Component, OnInit } from '@angular/core';
import { Navheader } from './navheader';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.scss']
})
export class NavheaderComponent implements OnInit {


  nav : Navheader[] = [
    {id:1,name:"Products",routing:"products"},
    {id:2,name:"Company",routing:""},
    {id:3,name:"Customer Experience",routing:"faqs"},
    {id:4,name:"Support & Services",routing:""},
    {id:5,name:"Resources",routing:""},
  ];
  
  constructor() { }  

  ngOnInit() {
  }

}
