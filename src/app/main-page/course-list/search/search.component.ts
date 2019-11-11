import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  @Output() setQuery = new EventEmitter<string>();

  public query = 'test';

  public find():void {
    console.log('query:', this.query);
    this.setQuery.emit(this.query);
  }

  constructor() { }

  ngOnInit() {
  }

}
