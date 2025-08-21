import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CesarCipherService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  encrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/encriptar`, { palabra, clave });
  }

  decrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/desencriptar`, { palabra, clave });
  }
}
