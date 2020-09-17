import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';


const routes: Routes = [{path:'home', component: HomeComponent},
                        {path:'blog', component: BlogComponent},
                        {path:'contact', component: ContactComponent},
                        {path:'offer', component: OfferComponent},
                        {path:'about', component: AboutComponent},
                        {path:'faq', component: FAQComponent},




                       
                        {path: '**', redirectTo: '/home'}
                       ];



@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
