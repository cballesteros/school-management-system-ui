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

  getLevel(id: string) {
    const url = `${this.apiUrl}?levelId=${id}`
    return this.http.get<LevelData>(url)
  }

  createLevel(levelData: LevelData): Observable<LevelData> {
    return this.http.post<LevelData>(this.apiUrl, levelData);
  }

  updateLevel(levelData: LevelData): Observable<LevelData> {
    const url = `${this.apiUrl}`;
    return this.http.put<LevelData>(url, levelData);
  }

  deleteLevel(id: string): Observable<{}> {
    const url = `${this.apiUrl}?levelId=${id}`;
    return this.http.delete(url);
  }

  private getToken(): string {
    return localStorage.getItem(SMSUI.TOKEN_KEY) ?? ''
  }
}
