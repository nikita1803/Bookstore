import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placed-order',
  templateUrl: './placed-order.component.html',
  styleUrls: ['./placed-order.component.scss']
})
export class PlacedOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  continueshopping(){
    this.router.navigate(['home']);
  }

}
