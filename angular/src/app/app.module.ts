import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { OurfeaturesComponent } from './home/ourfeatures/ourfeatures.component';
import { OurproductComponent } from './home/ourproduct/ourproduct.component';
import { VoluptatemComponent } from './home/voluptatem/voluptatem.component';
import { OurcustomersComponent } from './home/ourcustomers/ourcustomers.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductBannerComponent } from './products/product-banner/product-banner.component';
import { ProductsFeaturesComponent } from './products/products-features/products-features.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqsBannerComponent } from './faqs/faqs-banner/faqs-banner.component';
import { FaqsQuestionsComponent } from './faqs/faqs-questions/faqs-questions.component';
import { FaqsCategoryComponent } from './faqs/faqs-category/faqs-category.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationBannerComponent } from './registration/registration-banner/registration-banner.component';
import { RegistrationContentComponent } from './registration/registration-content/registration-content.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    OurfeaturesComponent,
    OurproductComponent,
    VoluptatemComponent,
    OurcustomersComponent,
    TestimonialsComponent,
    FooterComponent,
    FooterTopComponent,
    FooterBottomComponent,
    NavheaderComponent,
    ProductsComponent,
    ProductBannerComponent,
    ProductsFeaturesComponent,
    FaqsComponent,
    FaqsBannerComponent,
    FaqsQuestionsComponent,
    FaqsCategoryComponent,
    RegistrationComponent,
    RegistrationBannerComponent,
    RegistrationContentComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
