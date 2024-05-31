import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  cesta: any[] = [{nombre:'Pan', precio:1}, {nombre:'Aceite', precio:41}, {nombre:'Sal', precio:3} ];
}
