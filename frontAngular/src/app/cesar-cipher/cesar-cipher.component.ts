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

  // Popups
  mostrarPopup: boolean = false;   // Resultado
  mostrarCargando: boolean = false; // Procesando...

  private loadingTimeout: any;

  constructor(private cesarService: CesarCipherService) {}

  cerrarPopup() {
    this.mostrarPopup = false;
  }

  onSubmit(): void {
    if (!this.palabra || this.clave === null) {
      this.resultado = 'Debes ingresar palabra y clave';
      this.mostrarPopup = true;
      return;
    }

    // Resetear estados
    this.mostrarPopup = false;
    this.mostrarCargando = false;

    // ⏳ Timeout para mostrar "Procesando..." si pasan 3 segundos
    this.loadingTimeout = setTimeout(() => {
      this.mostrarCargando = true;
    }, 100);

    const peticion = this.accion === 'encriptar'
      ? this.cesarService.encrypt(this.palabra, this.clave)
      : this.cesarService.decrypt(this.palabra, this.clave);

    peticion.subscribe({
      next: (res) => {
        clearTimeout(this.loadingTimeout);   // Cancelar timeout
        this.mostrarCargando = false;        // Quitar cargando

        this.resultado = this.accion === 'encriptar'
          ? res.encriptado
          : res.desencriptado;

        this.mostrarPopup = true;            // Mostrar popup final
      },
      error: () => {
        clearTimeout(this.loadingTimeout);
        this.mostrarCargando = false;
        this.resultado = 'Error en la petición';
        this.mostrarPopup = true;
      }
    });
  }
}
