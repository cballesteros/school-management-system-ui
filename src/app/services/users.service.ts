import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../users/user.model';
import { SMSUI } from '../common/constants';
import { Page } from '../common/page.model';
import { UserPageRequest } from '../common/page-request/user-page-request';
import { RoleData } from '../common/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${SMSUI.API_URL}/user`

  constructor(private http: HttpClient) { }

  getAllUsers(role?: RoleData): Observable<UserData[]> {
    const url = `${this.apiUrl}/all`;
    const params = new HttpParams().append('role', role ? RoleData[role]: '')
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    return this.http.get<UserData[]>(url, { headers, params });
  }

  getByRole(page?: UserPageRequest): Observable<Page<UserData>> {
    const url = `${this.apiUrl}`;
    const params = new HttpParams().appendAll({...page})
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    return this.http.get<Page<UserData>>(url, { headers, params });
  }

  getUserData(id: string): Observable<UserData> {
    const url = `${this.apiUrl}/id?userId=${id}`;
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
    const url = `${this.apiUrl}?userId=${id}`;
    return this.http.delete(url);
  }

  private getToken(): string {
    return localStorage.getItem(SMSUI.TOKEN_KEY) ?? ''
  }
}
