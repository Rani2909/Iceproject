import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavoursComponent } from './flavours/flavours.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DrinksComponent } from './drinks/drinks.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'flavours', component: FlavoursComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'specialMenu', component: SpecialMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
