import { Component, OnInit } from '@angular/core';
import { Faq } from './faqs';

@Component({
  selector: 'app-faqs-category',
  templateUrl: './faqs-category.component.html',
  styleUrls: ['./faqs-category.component.scss']
})
export class FaqsCategoryComponent implements OnInit {

  FAQS: Faq[] = [
    { id: 1, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 2, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 3, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 4, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 5, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 6, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 7, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 8, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 9, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
    { id: 10, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
