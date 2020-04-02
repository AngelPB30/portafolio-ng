import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item-detalle',
  templateUrl: './item-detalle.component.html',
  styleUrls: ['./item-detalle.component.css']
})
export class ItemDetalleComponent implements OnInit {

  Producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute, 
    private productosServices: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      console.log(parametros['id']);
      this.productosServices.getProducto(parametros['id'])
        .subscribe( (resp_product: ProductoDescripcion) =>{
          this.Producto = resp_product;
          this.id = parametros['id']
          // console.log(resp_product); 
        })      
    })
  }

}
