import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PlanComponent } from './plan/plan.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// For MDB Angular Pro
// import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {HttpClientModule} from '@angular/common/http';
import { PlaceComponent } from './place/place.component';
import { BookComponent } from './book/book.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { BhimupiComponent } from './bhimupi/bhimupi.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PlanComponent,
    PlaceComponent,
    BookComponent,
    CheckoutComponent,
    RegisterComponent,
    PaymentComponent,
    CreditcardComponent,
    DebitcardComponent,
    BhimupiComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbPaginationModule, NgbAlertModule,
  
    HttpClientModule,
    FormsModule,
    // MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvSmNPBXicvZukxnryOwyhu-hP44_u1Bo'
    }), 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
