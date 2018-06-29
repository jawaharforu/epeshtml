import { Component, OnInit } from '@angular/core';
import { Testimonial } from './testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  test : Testimonial[] = [
    {
      id:1, 
      title:"Testimonial1",
      body:
      "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
    },
    {
      id:2, 
      title:"Testimonial2",
      body:
      "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
    },
    {
      id:3, 
      title:"Testimonial3",
      body:
      "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
