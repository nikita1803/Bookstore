import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginDisplayComponent } from './components/login-display/login-display.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageDisplayComponent } from './components/homepage-display/homepage-display.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: LoginDisplayComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'home', component: HomepageDisplayComponent},
  { path: 'bookpage',component: BookPageComponent},
  { path: 'cart',component: AddCartComponent },
  { path: 'placedorder', component: PlacedOrderComponent },
  { path: 'wishlist', component: WishlistComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
