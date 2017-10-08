import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setToken(data) {
    localStorage.setItem('token', data);
  }

}
