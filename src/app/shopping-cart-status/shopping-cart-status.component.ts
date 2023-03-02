import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../dto/Libro';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.css']
})
export class ShoppingCartStatusComponent {

	@Input() precio:number;
	@Input() modeloDeTienda:Array<Libro>;

	@Output() pagar:EventEmitter<null> = new EventEmitter();

	constructor() {
    this.precio = 0;
    this.modeloDeTienda = [];
  }

	ngOnInit() { }

	realizarPago() {
		this.pagar.emit();
	}

}
