import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../carrito.service';
import { Pizza } from '../about/about.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carrito: Pizza[] = [];

  constructor(private carritoService: CarritoComprasService) {}

  ngOnInit(): void {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  cantidadTotal(): number {
    return this.carrito.reduce((total, pizza) => total + pizza.quantity, 0);
  }

}
