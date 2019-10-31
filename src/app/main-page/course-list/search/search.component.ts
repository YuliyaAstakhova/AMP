import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public query = 'test';
  
  public find():void {
    console.log('query:', this.query);
  }

  constructor() { }

  ngOnInit() {
  }

}
