import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit, OnDestroy, OnChanges {

  tiendaSubscripcion:Subscription;

  cargando:boolean = false;
  errorHttp:boolean = false;

  libros:any = [];

  constructor(private http:HttpClient) {
    this.tiendaSubscripcion = new Subscription();
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method ngOnChanges not implemented.');
  }

  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();
  }  

  ngOnDestroy(): void {
    this.tiendaSubscripcion.unsubscribe;
  }

  cargarLista(){
    this.tiendaSubscripcion = this.http.get('assets/json/lista-de-libros-slow.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false },
      (respuesta) => { this.errorHttp = true; }
    )
  }
  
}
