import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResultadoPeticion} from './modelos/resultado-peticion'
import { infoUrl } from './modelos/resultado-peticion'
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  public resultado!: ResultadoPeticion;

  private url: string ='https://pokeapi.co/api/v2/pokemon';
  constructor(
    private httpCliente: HttpClient
  ) {}

  ngOnInit() {
    this.httpCliente.get<ResultadoPeticion>(this.url)
    .subscribe(datosPeticion=>{
      this.resultado= datosPeticion ;
      console.log(datosPeticion)
    })
  }

}
