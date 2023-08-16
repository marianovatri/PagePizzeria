import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../carrito.service';

export interface Pizza {
  name: string;
  ingredients: string[];
  imageUrl: string;
  price: number;
  quantity: number
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pizzas: Pizza[] = [
    {
      name: 'Pizza de mozzarella',
      ingredients: ['Masa casera', 'Salsa de tomate', 'Queso mozzarella', 'Hojas de albahaca fresca'],
      imageUrl: '../../../assets/muzzarela.avif',
      price: 500,
      quantity: 0
    },
    {
      name: 'Pizza Napolitana',
      ingredients: ['Salsa de tomate', 'Queso mozzarella', 'Anchoas', 'Aceitunas negras', 'Orégano'],
      imageUrl: '../../../assets/napolitana.jpg',
      price: 500,
      quantity: 0

    },
    {
      name: 'Pizza de Ananá',
      ingredients: ['Salsa de tomate', 'Queso mozzarella', 'Jamón', 'Rodajas de piña', 'Orégano'],
      imageUrl: '../../../assets/anana.jpg',
      price: 500,
      quantity: 0
    },
    {
      name: 'Pizza Especial',
      ingredients: ['Salsa de tomate', 'Queso mozzarella', 'Jamón', 'Aceitunas verdes y negras', 'Pimientos', 'Orégano'],
      imageUrl: '../../../assets/especial.jpg',
      price: 500,
      quantity: 0

    },
    {
      name: 'Pizza de Rúcula',
      ingredients: ['Salsa de tomate', 'Queso mozzarella', 'Jamón crudo', 'Rúcula fresca', 'Queso parmesano rallado', 'Aceite de oliva'],
      imageUrl: '../../../assets/rucula.jpg',
      price: 500,
      quantity: 0
    }
  ];

  constructor(private carritoService: CarritoComprasService) {}

  agregarAlCarrito(pizza: Pizza) {
    this.carritoService.agregarAlCarrito(pizza);
    console.log('Pizza agregada al carrito:', pizza);
  }


  ngOnInit(): void {
  }

}
