import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  displayAddress = true;
  displayButton = true;
  displayCart = true;
  displayContinueButton = true;

  labelPosition: 'before' | 'after' = 'after';
  
  cartBooks: Array<any> =[];
  cartBook:any
  addressDetails: any
  address: any
  removeById: any
  token: any
  length: any

  public contactForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private bookService: BookServiceService,private count:CountService ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getItems();

    this.contactForm = this.formBuilder.group({
      fullName: new FormControl(),
      phone: new FormControl(),
      fullAddress: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      addressType: new FormControl(),
    })
  }
  addressToggles(){
    this.displayAddress = false
    this.displayButton = false
  }

  continue(){
    this.displayCart = false
    this.displayContinueButton = false
  }
  getItems = () => {
    console.log("get cart API")
    this.bookService.getCart(this.token).subscribe((data:any)=>{
      this.cartBooks=data['result']
      console.log(this.cartBooks);
      for (this.cartBook of this.cartBooks){
        // console.log(this.cartBook.user_id.address);
        console.log(this.cartBook.product_id._id);
        for (let ad of this.cartBook.user_id.address){
          // console.log(ad);
          this.address = {
            "fullName": this.cartBook.user_id.fullName,
            "phone": this.cartBook.user_id.phone,
            "addressType": ad.addressType,
            "city": ad.city,
            "fullAddress": ad.fullAddress,
            "state": ad.state
          }
          // console.log(this.address);
        }
          
      }
      // this.length = this.cartBooks.length;

      this.count.communicateMessage(this.cartBooks.length)
      // console.log(this.address);  
      // patching:- (joint) not for hardcore   
      this.contactForm.patchValue({
        "fullName": this.address.fullName,
        "phone": this.address.phone,
        "addressType": this.address.addressType,
        "city": this.address.city,
        "fullAddress": this.address.fullAddress,
        "state": this.address.state
      })
    },
    error => {
      console.log(error);
    });
  }
  submit(){
    console.log(this.contactForm.value);
    let result = {
      "addressType": this.contactForm.value.addressType,
      "fullAddress": this.contactForm.value.fullAddress,
      "city": this.contactForm.value.city,
      "state": this.contactForm.value.state,
    }
    console.log(result);
    this.bookService.putAddress(result, this.token).subscribe((data:any)=>{
      console.log(data)
    },
    error => {
      console.log(error);
    }
    );
    this.displayCart = false
    this.displayContinueButton = false
  }

  checkout(){
    this.cartBook = this.cartBook;
    let orders: Array<any> =[]
    for (this.cartBook of this.cartBooks){
    // console.log("checkout  "+ this.cartBook.product_id.author)
      let order = {
        "product_id": this.cartBook.product_id._id,
        "product_name": this.cartBook.product_id.bookName,
        "product_quantity": this.cartBook.product_id.quantity,
        "product_price": this.cartBook.product_id.price,
      }
      orders.push(order)
    }  
    let OD={
      orders: orders
    }
    console.log(OD)
    this.bookService.order(OD, this.token).subscribe((response:any)=>{
      console.log(response)
      this.router.navigate(['placedorder']);
    },
    error => {
      console.log(error);
    });
  }
  removeItem=(data: any)=>{
    // console.log(data._id)
    this.bookService.deleteItem(data._id, this.token).subscribe((data:any)=>{
      this.getItems()
    });
   
  }
  homepage(){
    this.router.navigate(['home']);
  }
}
