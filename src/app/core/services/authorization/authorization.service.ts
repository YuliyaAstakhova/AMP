import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  private user;
  private token;

  public login(user): void {
    this.storage.set('token', 'userToken');
    this.storage.set('user', JSON.stringify(user));
    this.user = user;
    this.token = 'token';
    console.log('login')
  }

  public logout(): void {
    this.storage.remove('token');
    this.storage.remove('user');
    this.user = null;
    this.token = null;
  }

  public isAuthenticated(): boolean {
    return !!this.storage.get('token');
  }

  public getUserInfo(): string {
    return this.user.login;
  }
}
