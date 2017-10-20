import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  get token() {
    // let fake;
    // fake = '';
    // fake = 'FFFF70it7tzNsHddEiq0BZ0i-OU8S3xV';

    // if (fake) {
    //   console.log('TokenService#token fake', fake);

    //   return fake;
    // }

    // console.log('TokenService#token', localStorage.getItem('token'));

    return localStorage.getItem('token');
  }

  set token(data) {
    localStorage.setItem('token', data);
  }

  remove() {
    localStorage.removeItem('token');
  }

}
