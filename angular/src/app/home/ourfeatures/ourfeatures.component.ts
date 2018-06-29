import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourfeatures',
  templateUrl: './ourfeatures.component.html',
  styleUrls: ['./ourfeatures.component.scss']
})
export class OurfeaturesComponent implements OnInit {

  header_pre_title = "Lorem ipsum Do?";
  header_title ="Our Features";
  header_description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";

  ourfeature_text1 = "ORGANIZATION SETUP";
  ourfeature_text2 = "ORGANOGRAM";
  ourfeature_text3 = "DATA MAPPING";
  ourfeature_text4 = "MULTIPLE ASSESSMENTS";
  ourfeature_text5 = "GAP ANALYSIS";
  ourfeature_text6 = "TOLERANCE INSIGHT";


  ourfeature_image1 = "../../../assets/img/organisation.png";
  ourfeature_image2 = "../../../assets/img/organogram.png";
  ourfeature_image3 = "../../../assets/img/mapping.png";
  ourfeature_image4 = "../../../assets/img/assesment.png";
  ourfeature_image5 = "../../../assets/img/tollerence.png";  
  ourfeature_image6 = "../../../assets/img/gap-=analysis.png";
  
  constructor() { }

  ngOnInit() { 
  }

}
