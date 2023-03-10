import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMSUI } from '../common/constants';
import { LevelData } from '../levels/level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  private apiUrl = `${SMSUI.API_URL}/level`

  constructor(private http: HttpClient) { }

  getAllLevels(): Observable<LevelData[]> {
    const url = `${this.apiUrl}/all`;
    const headers = new HttpHeaders().set('Authorization', this.getToken());
    return this.http.get<LevelData[]>(url, { headers });
  }

  private getToken(): string {
    return localStorage.getItem(SMSUI.TOKEN_KEY) ?? ''
  }
}
