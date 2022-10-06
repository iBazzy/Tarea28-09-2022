import { Component, OnInit } from '@angular/core';
import { PokemonService} from '../servicios/pokemon.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.page.html',
  styleUrls: ['./detalle-pokemon.page.scss'],
})
export class DetallePokemonPage implements OnInit {

  details: any;

  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };

  constructor(private pokeService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      this.details = details;
    });
  }

}
