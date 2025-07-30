import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private apiUrl = 'https://formsubmit.co/ebc7bd902b1de4a3a64c1a01f87dfdf8'; // Cambia por tu correo

  constructor(private http: HttpClient) {}

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
