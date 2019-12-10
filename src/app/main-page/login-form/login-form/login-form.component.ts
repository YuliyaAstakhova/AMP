import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  @Output() login = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}

  public user = {
    login: '',
    password: '',
  };

  public loginClick():void {
    this.login.emit(this.user)
    console.log('logged in successfully');
  }
}
