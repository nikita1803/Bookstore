import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  cartPage(){
    
    this.router.navigate(['cart']);
  }
  
}
