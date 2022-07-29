import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  //https://restcountries.com/v3.1/name/japan

  constructor( private http: HttpClient) { }

  buscarPais ( termino: string ): Observable<Country[]>{

    const ulr = `${ this.apiUrl }/name/${termino}`;

    return this.http.get<Country[]>(ulr)
    //.pipe( catchError(err => of(['Error'])) );
  }

  buscarCapital ( termino: string ): Observable<Country[]>{

    const ulr = `${ this.apiUrl }/capital/${termino}`;

    return this.http.get<Country[]>(ulr)
    //.pipe( catchError(err => of(['Error'])) );
  }

  getPaisPorCodigo ( code: string ): Observable<Country>{

    const ulr = `${ this.apiUrl }/alpha/${code}`;

    return this.http.get<Country>(ulr)
  }


}
