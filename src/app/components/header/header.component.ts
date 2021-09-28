import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchText : any;
  isSearch=false;
  countItem:any
  badgeContent: any;
  constructor(public router : Router, public bookService : BookServiceService, public count : CountService ) { }

  ngOnInit(): void {
    this.count.sendMessage.subscribe((message: any) =>{
      this.countItem = message
      console.log("Header count "+ this.countItem)
      this.badgeContent = this.countItem;
    },
    error => {
      console.log(error);
    });
  }
  shareSearchWord(search: any) {
    this.bookService.sendSearch(search);
  }
  cartPage(){
    
    this.router.navigate(['cart']);
  }
  wishlist(){
    this.router.navigate(['wishlist']);
  }
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
    this.searchcriteria.emit(this.searchText);
  }

}
