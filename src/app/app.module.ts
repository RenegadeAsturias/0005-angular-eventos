import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeLibrosComponent,
    AcercaDeComponent,
    DetalleLibroComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
