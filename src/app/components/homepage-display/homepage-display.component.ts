import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-homepage-display',
  templateUrl: './homepage-display.component.html',
  styleUrls: ['./homepage-display.component.scss']
})
export class HomepageDisplayComponent implements OnInit {
  message: any;
  @Input() searchText: any;

  constructor() { }

  ngOnInit(): void {
  }
  searchThis($event: any){
    this.message = $event;
    this.searchText = this.message;
    console.log(this.searchText);
  }
}
