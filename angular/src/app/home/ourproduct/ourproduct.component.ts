import { Component, OnInit } from '@angular/core';
import { Ourproduct } from './ourproduct';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.scss']
})
export class OurproductComponent implements OnInit {

  header_pre_text = "Awesome placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";
  header_text = "Our Product Features";
  header_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";

  our_product: Ourproduct[] = [
    {
      id: 1,
      title: "FOUNDATION",
      priceperannum: 4999,
      numberofemployee: 100,
      pricepermonth: 30,
      themeclass: "product_bg1"
    },
    {
      id: 2,
      title: "STRENGTH",
      priceperannum: 6999,
      numberofemployee: 100,
      pricepermonth: 60,
      themeclass: "product_bg2"
    },
    {
      id: 3,
      title: "GROWTH",
      priceperannum: 9999,
      numberofemployee: 100,
      pricepermonth: 90,
      themeclass: "product_bg3"
    }
  ];

  list_of_services:any[] = ["ADVANCED ANALYSIS","ADVANCED REPORTS","NOTIFICATIONS","PRIORITY SUPPORT ASSISTANCE"];

  constructor() { }

  ngOnInit() {
  }

}
