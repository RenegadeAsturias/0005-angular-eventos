import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent {

  cargando:boolean = false;
  errorHttp:boolean = false;

  libros:any = [];

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }  

  cargarLista(){
    this.http.get('assets/json/lista-de-libros-slow.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false },
      (respuesta) => { this.errorHttp = true; }
    )
  }
  
}
