import { Component, OnInit } from '@angular/core';
import { Registration_content } from './registration-content';
import { Job } from './registration-job';
import { Employee } from './registration-job';
import { Country } from './registration-job';

@Component({
  selector: 'app-registration-content',
  templateUrl: './registration-content.component.html',
  styleUrls: ['./registration-content.component.scss']
})
export class RegistrationContentComponent implements OnInit {

  content_image = "../../../assets/img/360 EPES.png";

  registration_content1: Registration_content[] = [
    {
      id:1,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-gavel'
    },
    {
      id:2,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-globe'
    }    
  ];

  registration_content2: Registration_content[] = [
    {
      id:1,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-share-alt'
    },
    {
      id:2,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-calculator'
    }    
  ];


  classmyclass = "col-my-1";
  select_list_job: Job[]= [
    {id:0,label:"Find Job"},
    {id:1,label:"Option 1"},
    {id:2,label:"Option 2"},
    {id:3,label:"Option 3"},
    {id:4,label:"Option 4"},
    {id:5,label:"Option 5"}
  ];
  
  select_list_employee: Employee[]= [
    {id:0,label:"Employee"},
    {id:1,label:"Option 1"},
    {id:2,label:"Option 2"},
    {id:3,label:"Option 3"},
    {id:4,label:"Option 4"},
    {id:5,label:"Option 5"}
  ];

  select_list_country: Country[]= [
    {id:0,label:"Country"},
    {id:1,label:"Option 1"},
    {id:2,label:"Option 2"},
    {id:3,label:"Option 3"},
    {id:4,label:"Option 4"},
    {id:5,label:"Option 5"}
  ];

  contact_us:any = "0088 3325 5545";
  constructor() { }

  ngOnInit() {
  }

}
