import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  check(email: string, password: string ){
    if(email =='manager@gmail.com' && password =='manager') {
    localStorage.setItem('email',"manager@gmail.com");
    return true;
    }
    else{
      localStorage.clear();
      return false;
    }
  }
}
