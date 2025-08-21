import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CesarCipherService {

  private apiUrlEncriptar = 'http://localhost:3000/api/cipher/encriptar'; // 🔹 Ajusta el puerto a tu backend
private apiUrlDesencriptar='http://localhost:3000/api/cipher/desencriptar';
  constructor(private http: HttpClient) {}

  encrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.apiUrlEncriptar}`, { palabra, clave });
  }

  decrypt(palabra: string, clave: number): Observable<any> {
    return this.http.post(`${this.apiUrlDesencriptar}`, { palabra, clave });
  }
}
