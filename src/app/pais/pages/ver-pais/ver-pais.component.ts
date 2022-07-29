import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais-component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorCodigo( id )),
      tap(console.log)  //recibe el producto del observable y lo imprime en la consola   //tap(resp => console.log(resp))
    )
    .subscribe( (pais: Country[])=> this.pais = pais[0] )

    console.log('pais', this.pais)

    /* this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log(id);

      this.paisService.getPaisPorCodigo( id )
      .subscribe( pais => {
        this.pais = pais
        console.log(this.pais)
      })

    }) */

  }

}
