import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Libro } from '../dto/Libro';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.css']
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges, DoCheck {

	numLibrosComprados = 0;

	@Input() totalCarrito:number;
	@Input() librosComprados:Array<Libro>;

	@Output() pagar:EventEmitter<null> = new EventEmitter();
	
	constructor() {
		this.totalCarrito = 0;
		this.librosComprados = [];
		this.numLibrosComprados = 0;
	}
	ngDoCheck(): void {
		console.log('ShoppingCartStatusComponent DoCheck: Cambios DOM!');
		this.numLibrosComprados = this.librosComprados.length;
	}
	ngOnChanges(cambios: SimpleChanges): void {
		console.log('ShoppingCartStatusComponent OnChanges: Cambios='+cambios);
		this.numLibrosComprados = this.librosComprados.length;		
	}

	ngOnInit() { 
	}

	onRealizarPago() {
		this.pagar.emit();
	}
	
}
