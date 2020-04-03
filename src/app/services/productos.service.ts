import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoInterface[] = []
  cargando = true;
  productosFiltrado: ProductoInterface[] = []

  constructor(private http: HttpClient) {
    this.cargarPorductos();
  }

  private cargarPorductos() {
    return new Promise((resolve, rejects) => {
      this.http.get('https://loginapp-1e722.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoInterface[]) => {
          // console.log(resp);
          this.productos = resp
          this.cargando = false;
          resolve();
          // setTimeout(() => {
          //   this.cargando = false;
          //   resolve();
          // }, 1500);
        })
    });
  }

  public getProducto(id: string) {
    return this.http.get(`https://loginapp-1e722.firebaseio.com/productos/${id}.json`)
  }

  public buscarProducto(termino: string) {

    if(this.productos.length === 0){
      //cargar productos
      this.cargarPorductos().then(()=>{
        // ejectuar despues de tener los productos
        //aplicar filtro
        this.filtrarProdutos(termino);
      })
    }else{
      this.filtrarProdutos(termino);
    }
  }

  private filtrarProdutos(termino: string){
    // console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase(); //PASAMOS A MINUSCULA      
      this.productos.forEach(prod => {
        const tituloLower = prod.titulo.toLocaleLowerCase();
        if(prod.categoria.indexOf(termino)>= 0 || tituloLower.indexOf(termino) >= 0 ){
          this.productosFiltrado.push(prod);
        }
      })
  }







}
