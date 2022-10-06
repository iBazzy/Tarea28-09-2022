import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { IonicModule } from '@ionic/angular';
import {InfoParcialComponent} from './info-parcial/info-parcial.component'
import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    HttpClientModule

  ],
  declarations: [PokemonesPage,InfoParcialComponent]
})
export class PokemonesPageModule {}
