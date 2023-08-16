import { Injectable } from '@angular/core';
import { Pizza } from '../app/componentes/about/about.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  private carrito: Pizza[] = [];

  agregarAlCarrito(pizza: Pizza) {
    const pizzaEnCarrito = this.carrito.find(item => item.name === pizza.name);
    if (pizzaEnCarrito) {
      pizzaEnCarrito.quantity++;
    } else {
      pizza.quantity = 1;
      this.carrito.push(pizza);
    }
  }

  eliminarDelCarrito(pizza: Pizza) {
    const index = this.carrito.indexOf(pizza);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }
}
