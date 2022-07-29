import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
  `]
})
export class PorRegionComponent {

  //CTRL + SHIFT + P => lower
  //CTRL + ALT + Arrow Keys (Up/Down) => select multiple lines
  //F1 + 'Join Lines' => multiple lines text to a single line
  //regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClassCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if( region === this.regionActiva ){ return; }

    this.paises = [];
    this.regionActiva = region;
    this.hayError = false;

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe((paises) => {
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })

  }

}
