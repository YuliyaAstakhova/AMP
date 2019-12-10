import { Component, OnInit } from '@angular/core';
import Course from '../../core/course/course';
import User from '../../core/user/user';
import { AuthorizationService } from "app/core/services/authorization/authorization.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  public isAuthenticated;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }

  public logout() {
    this.authorizationService.logout();
    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }

  public login(user):void {
    console.log('MainPageComponent login', user);
    this.authorizationService.login(user);
    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }
}
