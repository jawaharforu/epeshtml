import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RegistrationComponent } from './registration/registration.component';
import {PaymentComponent} from './payment/payment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'faqs', component: FaqsComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }