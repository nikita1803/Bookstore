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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterial,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
