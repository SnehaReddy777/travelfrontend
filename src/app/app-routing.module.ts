import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PlanComponent } from './plan/plan.component';
import { PlaceComponent } from './place/place.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookComponent } from './book/book.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component'
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { BhimupiComponent } from './bhimupi/bhimupi.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full" },
  {path:"home", component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"header",component:HeaderComponent},
  {path: "aboutus", component:AboutusComponent},
  {path:"creditcard",component:CreditcardComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"debitcard",component:DebitcardComponent},
  {path:"bhimupi",component:BhimupiComponent},
  {path:"plan",component:PlanComponent},
  {path:"place",component:PlaceComponent},
  {path:"payment",component:PaymentComponent},
  {path:"book",component:BookComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
