import { Component } from '@angular/core';

@Component({
  selector: 'app-textoformatter',
  templateUrl: './textoformatter.component.html',
  styleUrl: './textoformatter.component.css'
})
export class TextoformatterComponent {

  letraGrande: boolean = false;
  colorFondo: boolean= false;
  letraColor: boolean= false;
  letraItalica: boolean= false;

  defineEstilos(){
    let styles = {
      'font-size': this.letraGrande ? '200px' : 'initial',
      'background-color': this.colorFondo ? 'green' : 'red',
      'color': this. letraColor ? 'white' : 'black',
      'font-style': this.letraItalica ? 'italic': 'normal',
    }
    return styles;
  }
}
