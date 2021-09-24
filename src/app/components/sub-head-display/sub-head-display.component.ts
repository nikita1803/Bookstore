import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-sub-head-display',
  templateUrl: './sub-head-display.component.html',
  styleUrls: ['./sub-head-display.component.scss']
})
export class SubHeadDisplayComponent implements OnInit {
  books: Array<any> =[];
  
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getData()
    
  }
  getData = () => {
    this.bookService.getBook().subscribe((data:any)=>{
      this.books = data['result']
      console.log(this.books) 
      console.log(this.books.length)
    },
    error => {
      console.log(error);
    });
  }

}
