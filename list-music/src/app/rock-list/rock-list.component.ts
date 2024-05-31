import { Component, OnInit } from '@angular/core';
import mockDatosMusicales from '../assets/mock';
import { DatosMusicales } from '../assets/dataType';

@Component({
  selector: 'app-rock-list',
  templateUrl: './rock-list.component.html',
  styleUrl: './rock-list.component.css'
})
export class RockListComponent {

  datosMusicales: DatosMusicales[] = mockDatosMusicales;

}
