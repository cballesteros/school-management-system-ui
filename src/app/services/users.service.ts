import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../users/user.model';
import { SMSUI } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${SMSUI.API_URL}/user`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserData[]> {
    const url = `${this.apiUrl}/all`;
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3ODE1Nzc1OCwiZXhwIjoxNjc4MjQ0MTU4fQ.4Z7dERDsQ8tWeozHLamRokqnck8-FeAY08RENpc-FlZnigMikw1kR62c6i0unQZWs2nOmqjhr-sWHfrx_inoqw');
    return this.http.get<UserData[]>(url, { headers });
  }

  getUserData(id: string): Observable<UserData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UserData>(url);
  }

  createUser(userData: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, userData);
  }

  updateUser(userData: UserData): Observable<UserData> {
    const url = `${this.apiUrl}`;
    return this.http.put<UserData>(url, userData);
  }

  deleteUser(id: string): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
