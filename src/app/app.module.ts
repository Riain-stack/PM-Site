import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TnavbarComponent } from './tnavbar/tnavbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { Slideshow1Component } from './slideshow1/slideshow1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TnavbarComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    OfferComponent,
    AboutComponent,
    FAQComponent,
    Slideshow1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
