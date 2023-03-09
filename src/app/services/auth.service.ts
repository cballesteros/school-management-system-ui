import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { SMSUI } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${SMSUI.API_URL}/auth`

  constructor(private http: HttpClient) { }

  async login(credentials: any): Promise<boolean>  {
    const url = `${this.apiUrl}/signing`
    const username = credentials.username
    const password = credentials.password
    if (username && password) {
      const data = await firstValueFrom(this.http.post<any>(url, {username, password}))
      localStorage.setItem(SMSUI.TOKEN_KEY, `${data.type} ${data.token}`);  
      return true
    }
    return false
  }  
  
  logout() {  
    localStorage.removeItem(SMSUI.TOKEN_KEY);  
  }  
  
  async loggedIn(): Promise<boolean> {  
    const url = `${this.apiUrl}/valid`
    const token = localStorage.getItem(SMSUI.TOKEN_KEY)
    return await firstValueFrom(this.http.post<boolean>(url, token?.replace('Bearer ', '')))
  }
}
