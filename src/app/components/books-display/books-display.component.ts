import { Component, Input, OnInit } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';
@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.scss']
})
export class BooksDisplayComponent implements OnInit {
  p: number = 1 ;
  @Input() books: any ;
  
  id:any
  cartBooks: Array<any> =[];
  cart1:any
  cart: any
  token: any
  bookId: any
  homeBook: any
  cartBook: any

  constructor(private router: Router, private service: BookServiceService,  private route: ActivatedRoute , private count: CountService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')    
    // console.log(this.token);
   
}
getCount(){
  this.service.getCart(this.token).subscribe((data:any)=>{
    this.cartBooks=data['result']
    this.count.communicateMessage(this.cartBooks.length) 
  })

  for(this.homeBook of this.books){
    console.log("homeId ", this.homeBook._id)
  }
}

isAddedToCart(cart: any){
  
  cart.displaybag = false;

  console.log("cart in home ",this.cartBooks)

  let reqData = {
    "id": cart._id,
    "token": this.token
  }
  this.service.addCart(reqData, this.token).subscribe((response) => {
    console.log(response)
  },error => {
      console.log(error);
  } );    
}
bookPage(id: any){
  this.id = id
  this.router.navigate(['bookpage/'], {state: {value: id }})
}

}
