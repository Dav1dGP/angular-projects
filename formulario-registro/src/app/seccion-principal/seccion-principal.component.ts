import { Component} from '@angular/core';

@Component({
  selector: 'app-seccion-principal',
  templateUrl: './seccion-principal.component.html',
  styleUrl: './seccion-principal.component.scss'
})

export class SeccionPrincipalComponent  {
  cancion: string = "";
  autor: string = "";
  archivo: string ="";
  registrarCancion: string[] = [];

registrar(){
  const nuevaCancion = `${this.cancion}\n${this.autor}\n${this.archivo}\n`;
  this.registrarCancion.push(nuevaCancion);
}

}
