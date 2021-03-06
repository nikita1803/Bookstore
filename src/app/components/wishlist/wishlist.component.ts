import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  token: any
  wishlistBook: Array<any> =[];

  constructor(private bookService: BookServiceService , public router : Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getwishlist();
  }

  getwishlist(){
    this.bookService.getWishlist(this.token).subscribe((data:any)=>{
      this.wishlistBook=data['result']
      console.log(this.wishlistBook)
    })
  }

  removeItem=(data: any)=>{
    console.log(data.product_id._id)
    this.bookService.deleteWishlist(data.product_id._id, this.token).subscribe((response)=>{
      console.log(response);
      
      this.getwishlist()
    },
    error => {
      console.log(error);
    });
  }
  homepage(){
    this.router.navigate(['home']);
  }
}
