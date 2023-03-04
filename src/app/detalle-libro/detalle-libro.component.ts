import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent {

  errorHttp:boolean = false;
  cargando:boolean = false;
  
  libroId:any = null;
  libros:any = [];

  subscripcionListadoLibros:Subscription = new Subscription();

  constructor(private ruta:ActivatedRoute, private http:HttpClient) {

  }

  ngOnInit() {
    this.libroId = this.ruta.snapshot.paramMap.get('libroId');
    this.cargarLista();
  }

  cargarLista(){
    this.subscripcionListadoLibros = this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false; },
      (respuesta) => { this.errorHttp = true; }
    )
  }

  ngOnDestroy() {
    this.subscripcionListadoLibros.unsubscribe;
  }

}

