import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from "app/core/services/authorization/authorization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<any>();

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {}

  public logoutClick() {
    this.logout.emit();
  }
}
