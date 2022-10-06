export type infoUrl ={
  name: string;
  url:string;
}
export interface ResultadoPeticion {
  count: number,
  next?: string,
  previous?: string,
  results: Array<infoUrl>

}
