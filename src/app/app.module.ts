import { AppMaterial} from './app-material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDisplayComponent } from './components/login-display/login-display.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageDisplayComponent } from './components/homepage-display/homepage-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeadDisplayComponent } from './components/sub-head-display/sub-head-display.component';
import { BooksDisplayComponent } from './components/books-display/books-display.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StarsComponent } from './components/stars/stars.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDisplayComponent,
    SignupComponent,
    HeaderComponent,
    HomepageDisplayComponent,
    FooterComponent,
    SubHeadDisplayComponent,
    BooksDisplayComponent,
    BookPageComponent,
    AddCartComponent,
    PlacedOrderComponent,
    WishlistComponent,
    FilterPipe,
    StarsComponent,
    MyprofileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterial,
    HttpClientModule,
    //Ng2SearchPipeModule
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
