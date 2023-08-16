import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../carrito.service';
import { Pizza } from '../about/about.component';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  carrito: Pizza[] = [];
  startIndex = 0;
  endIndex = 1;
  interval: any; // Variable para almacenar el intervalo del carrusel automático

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

  ngOnInit(): void {
    this.carrito = this.carritoService.obtenerCarrito();
    this.startAutoCarousel();
  }

  ngOnDestroy(): void {
    // Detener el intervalo cuando el componente se destruye
    this.stopAutoCarousel();
  }

  private startAutoCarousel() {
    this.interval = setInterval(() => {
      this.slide('right'); // Desliza hacia la derecha automáticamente
    }, 3000); // Ajusta el intervalo en milisegundos según lo deseado
  }

  private stopAutoCarousel() {
    clearInterval(this.interval);
  }

  slide(direction: 'left' | 'right') {
    const step = 1; // Pizzas mostradas por paso
    if (direction === 'left') {
      this.startIndex = Math.max(this.startIndex - step, 0);
    } else if (direction === 'right') {
      this.startIndex = (this.startIndex + step) % this.pizzas.length;
    }
    this.endIndex = this.startIndex + step;

    // Calcula el ancho de la barra de progreso
    const totalSteps = this.pizzas.length / step;
    const currentStep = this.startIndex / step;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;
  }

  agregarAlCarrito(pizza: Pizza) {
    this.carritoService.agregarAlCarrito(pizza);
    console.log('Pizza agregada al carrito:', pizza);
  }

  hacerPedido() {
    // Construir la lista de pizzas para WhatsApp con viñetas
    const listaPizzas = this.carrito.map(pizza => `• ${pizza.name} x ${pizza.quantity}`).join('%0A');
  
    // Construir la URL de WhatsApp con el mensaje y la lista de pizzas
    const whatsappUrl = `https://api.whatsapp.com/send?text=¡Hola! Quiero hacer el pedido de las siguientes pizzas:%0A%0A${listaPizzas}`;
  
    // Abrir WhatsApp en una nueva ventana del navegador
    window.open(whatsappUrl, '_blank');
  }

  
  eliminarDelCarrito(pizza: Pizza) {
    this.carritoService.eliminarDelCarrito(pizza);
  }

  obtenerTotal(): number {
    return this.carrito.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
  }

  cantidadTotal(): number {
    return this.carrito.reduce((total, pizza) => total + pizza.quantity, 0);
  }

  agregarUnaPizza(pizza: Pizza) {
    pizza.quantity++; // Incrementar la cantidad de pizzas en el carrito
  }

  quitarUnaPizza(pizza: Pizza) {
    if (pizza.quantity > 0) {
      pizza.quantity--; // Decrementar la cantidad de pizzas en el carrito
    }
  }
}
