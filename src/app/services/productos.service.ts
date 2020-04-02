import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoInterface[] = []
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarPorductos();
  }

  private cargarPorductos() {
    this.http.get('https://loginapp-1e722.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductoInterface[]) => {
        console.log(resp);
        this.productos = resp

        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      })
  }
}
