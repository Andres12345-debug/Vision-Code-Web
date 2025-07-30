import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private API_KEY = environment.gnewsApiKey; // Obtener la API Key desde environment
  private URL = `https://gnews.io/api/v4/top-headlines?topic=technology&lang=es&domains=phonearena.com,techcrunch.com,engadget.com&token=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    return this.http.get(this.URL);
  }

}
