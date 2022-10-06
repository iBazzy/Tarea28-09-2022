export type sprite ={
  front_default: string,
  front_female?: string,
  front_shiny?: string,
  front_shiny_female?: string
}

export type Stat={
  base_stat: number,
  stat: {
    name:string;
  }

}
export interface ResultadoPokemon {
  id:number,
  order:number,
  name:string,
  sprites: sprite,
  stats: Array<Stat>
}
