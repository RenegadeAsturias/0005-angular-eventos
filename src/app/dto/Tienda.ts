import { Libro } from "./Libro";

export class Tienda {

    tiendaItems:Array<Libro>;

    constructor() {

        this.tiendaItems = [
			{
                id: "1000",
                category: "Acción",
                author: "Rubén García Roscón",
                title: "Cuando el sol caía",
                price: 20
			},
			{
                id: "2000",
                category: "Acción",
                author: "Roberto García García",
                title: "Perseguido y perseguido",
                price: 20
			},
			{
                id: "3000",
                category: "Terror",
                author: "Samuel Perez Perez",
                title: "Todos mis vecinos",
                price: 20
            }
            
		];
       
    }

}
