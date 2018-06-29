import { Component, OnInit } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-products-features',
  templateUrl: './products-features.component.html',
  styleUrls: ['./products-features.component.scss']
})
export class ProductsFeaturesComponent implements OnInit {

  product: Product[] = [
    {
      id: 1,
      title:'Foundation',
      priceperannum: 4999,
      numberofemployee: 100,
      pricepermonth: 30,
    },
    {
      id: 2,
      title:'Strength',
      priceperannum: 6999,
      numberofemployee: 100,
      pricepermonth: 60,
    },
    {
      id: 3,
      title:'Growth',
      priceperannum: 9999,
      numberofemployee: 100,
      pricepermonth: 90, 
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
