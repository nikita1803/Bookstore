import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  
})
export class BookPageComponent implements OnInit {
  data: any
  @Input() books: any ;
  
  id:any
  cartBooks: Array<any> =[];
  cart1:any
  cart: any
  token: any
  bookId: any
  homeBook: any
  cartBook: any

  title = 'My Angular Project!';
  todaydate: any;
   componentproperty: any;
   comment: any;
   formdata: any;
   currentVal : any;
   //countItem:any
   //badgeContent: any;
  constructor(private router: Router,private service: BookServiceService,private count: CountService) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data)
  }
  getVal(val:any){
    console.warn(val);
    this.currentVal=val
  }
  ngOnInit(): void {
    
    this.token = localStorage.getItem('token') 
    this.getData()
    //this.count.sendMessage.subscribe((message: any) =>{
     // this.countItem = message
     // console.log("Header count "+ this.countItem)
    //  this.badgeContent = this.countItem;
    //},
    //error => {
    //  console.log(error);
    //});
  }
  getData = () => {
    this.data = this.data['value']
  }
  isAddedToCart(cart: any){
    
    cart.displaybag = false;

    console.log("cart in home ",this.cartBooks)

    let reqData = {
      "id": cart._id ,
      "token": this.token
    }
    this.service.addCart(reqData, this.token).subscribe((response) => {
      console.log(response)
    },error => {
        console.log(error);
    } );    
  }
  homepage(){
    this.router.navigate(['home']);
  }
  whishlist(cart: any){
    let wishlistData = {
      "id": cart._id,
      "token": this.token
    }
    this.service.addwishlist(wishlistData, this.token).subscribe((response)=>{
      console.log(response)
    },
    error => {
      console.log(error);
    });
  }
  

}
