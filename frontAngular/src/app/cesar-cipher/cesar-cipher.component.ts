import { Component } from '@angular/core';
import { CesarCipherService } from './cesar-cipher.service';

@Component({
  selector: 'app-cesar-cipher',
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.scss']
})
export class CesarCipherComponent {
  palabra: string = '';

  clave: number | null = null;
  accion: string = 'encriptar';
  resultado: string = '';

  constructor(private cesarService: CesarCipherService) {
  }

  onSubmit(): void {
    if (!this.palabra || this.clave === null) {
      this.resultado = 'Debes ingresar palabra y clave';
      return;
    }

    if (this.accion === 'encriptar') {
      this.cesarService.encrypt(this.palabra, this.clave).subscribe({
        next: (res) => {
          console.log("📥 Respuesta encriptar:", res);
          this.resultado = ` ${res.encriptado}`;
        },
        error: () => {
          this.resultado = ' Error al encriptar';
        }
      });
    } else {
      this.cesarService.decrypt(this.palabra, this.clave).subscribe({
        next: (res) => {
          console.log("📥 Respuesta desencriptar:", res);
          this.resultado = ` ${res.desencriptado}`;
        },
        error: () => {
          this.resultado = ' Error al desencriptar';
        }
      });
    }

  }
}
