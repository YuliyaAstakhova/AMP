import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import User from 'app/core/user/user';
import UserInterface from 'app/core/user/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  // private user: UserInterface = new User('fakeUserFirstName', 'fakeUserLastName', 'fakeUserLogin');
  private user;
  private token;
  private authState: boolean;

  ngOnInit() {
    this.user = this.storage.get('user');
    this.token = this.storage.get('token');
    console.log('this.token', this.token);
  }

  public login(user): void {
    this.storage.set('token', 'userToken');
    this.storage.set('user', JSON.stringify(user));
    this.user = user;
    this.token = 'token';
    this.authState = true;
  }

  public logout(): void {
    this.storage.remove('token');
    this.storage.remove('user');
    this.user = null;
    this.token = null;
  }

  public isAuthenticated(): boolean {
    return !!this.storage.get('token');
    // return !!this.token;
  }

  public getUserInfo(): string {
    return this.user.login;
  }
}
