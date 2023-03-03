import { Injectable } from '@angular/core';
import { SMSUI } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string):boolean  {  
    if (username == "admin" && password == "admin") {  
      localStorage.setItem(SMSUI.TOKEN_KEY, "loggedin");  
      return true;  
    }  
    return false;
  }  
  
  logout() {  
    localStorage.removeItem(SMSUI.TOKEN_KEY);  
  }  
  
  public get loggedIn(): boolean {  
    return localStorage.getItem(SMSUI.TOKEN_KEY) !== null
  }
}
