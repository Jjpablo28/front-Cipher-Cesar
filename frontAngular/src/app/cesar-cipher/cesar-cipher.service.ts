import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CesarCipherService {

  private apiUrlEncriptar = 'https://ciphercesar.onrender.com/api/cipher/encriptar'; 
private apiUrlDesencriptar='https://ciphercesar.onrender.com/api/cipher/desencriptar';
  constructor(private http: HttpClient) {}

  encrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.apiUrlEncriptar}`, { palabra, clave });
  }

  decrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.apiUrlDesencriptar}`, { palabra, clave });
  }
}
