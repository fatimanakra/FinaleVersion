import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maroc } from '../../../maroc.model';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  private apiUrl = 'http://localhost:8080/api/auth/'; // L'URL de votre API backend

  constructor(private http: HttpClient) { }

  getJobs(title?: string, city?: string): Observable<any[]> {
    const scrapeUrl = `${this.apiUrl}scrapeThreePages`; // Utilisation de backticks pour concaténer les chaînes de caractères
    let params = new HttpParams();

    if (title) {
      params = params.set('title', title);
    }
    if (city) {
      params = params.set('city', city);
    }

    return this.http.get<any[]>(scrapeUrl, { params });
  }

  scrapeIn(): Observable<any[]> {
    const scrapeUrl = `${this.apiUrl}scrapeIn`; // Utilisation de backticks pour concaténer les chaînes de caractères
    return this.http.get<any[]>(scrapeUrl);
  }

  scrapeMaroc(): Observable<Maroc[]> {
    const scrapeUrl = `${this.apiUrl}scrapeMaroc`; // Utilisation de backticks pour concaténer les chaînes de caractères
    return this.http.get<Maroc[]>(scrapeUrl);
  }
}
