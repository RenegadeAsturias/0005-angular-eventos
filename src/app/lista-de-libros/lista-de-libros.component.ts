import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Tienda } from '../dto/Tienda';
import { Libro } from '../dto/Libro';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit, OnDestroy, OnChanges {

  tiendaSubscripcion:Subscription;

  cargando:boolean = false;
  errorHttp:boolean = false;

  totalCarrito:number = 0;

  libros:any = [];
  librosComprados:Array<Libro> = [];

  menuVisible:boolean = false;  

  constructor(private http:HttpClient) {
    this.tiendaSubscripcion = new Subscription();
  }

	ngOnChanges(cambios: SimpleChanges): void {
		console.log('ListaDeLibrosComponent cambios='+cambios);
	}

  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();
    this.activarEventoTeclado();
  }

  ngOnDestroy(): void {
    this.tiendaSubscripcion.unsubscribe;
    document.removeEventListener("keypress",this.onTeclado);
  }

  cargarLista(){
    this.tiendaSubscripcion = this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false },
      (respuesta) => { this.errorHttp = true; }
    )
  }

  aniadirLibro(libroSeleccionado:Libro) {
    let isLibroEnCarrito = this.librosComprados
          .some(libro => libro.id === libroSeleccionado.id);
    if(!isLibroEnCarrito) {
      this.librosComprados.push(libroSeleccionado);
      console.log(`libros Comprados=${this.librosComprados.length}`);
      this.calcularTotalCarrito();
    }
  }

  quitarLibro(libroSeleccionado:Libro) {
    this.librosComprados = this.librosComprados
                .filter(libro =>libro.id!=libroSeleccionado.id);
    console.log(`libros Comprados=${this.librosComprados.length}`);
    this.calcularTotalCarrito();
  }

  calcularTotalCarrito():void {
    const initialValue = 0;
    this.totalCarrito = this.librosComprados.reduce(
      (accumulator, libro) => accumulator + libro.price, initialValue
    );
    console.log("totalCarrito="+this.totalCarrito);
  }

  onPagar():void {
    console.log("Se ha emitido un EventEmitter desde el Shopphing Cart!");
  }

  onRegularClick() {
    this.menuVisible = true;
  }

  onRightClick() {
    this.menuVisible = false;
    return false;
  }

  activarEventoTeclado(){
    document.addEventListener("keypress", (evento)=>{
      this.onTeclado(evento);
    })
  }

  onTeclado(event:any) {
    if(event.code==='Enter'){
      alert("REALIZAR COMPRA!");
    }
  }
  
}
