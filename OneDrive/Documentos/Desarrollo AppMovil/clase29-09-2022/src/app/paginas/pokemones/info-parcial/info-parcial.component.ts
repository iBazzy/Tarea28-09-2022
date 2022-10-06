import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ResultadoPokemon} from '../modelos/resultado-pokemon'
@Component({
  selector: 'app-info-parcial',
  templateUrl: './info-parcial.component.html',
  styleUrls: ['./info-parcial.component.scss'],
})
export class InfoParcialComponent implements OnInit {
  @Input() public url!:string ;
  public pokemon!: ResultadoPokemon;
  constructor(
    private httpCliente: HttpClient
  ) { }

  ngOnInit() {
    this.httpCliente.get<ResultadoPokemon>(this.url)
    .subscribe(resultado=>{
      this.pokemon= resultado;
    });
  }

}
