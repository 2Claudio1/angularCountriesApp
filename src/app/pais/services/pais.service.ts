import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields', 'name,cca2,capital,population,flags')
  }

  constructor( private http: HttpClient) { }

  buscarRegion ( region: string ): Observable<Country[]>{

    //const httpParams = new HttpParams()

    const ulr = `${ this.apiUrl }/region/${region}`;

    //return this.http.get<Country[]>(ulr, { params: httpParams })
    return this.http.get<Country[]>(ulr, { params: this.httpParams })
    .pipe(
      tap(console.log)
      )
    //.pipe( catchError(err => of(['Error'])) );
  }

  buscarPais ( termino: string ): Observable<Country[]>{

    const ulr = `${ this.apiUrl }/name/${termino}`;

    return this.http.get<Country[]>(ulr, { params: this.httpParams })
    //.pipe( catchError(err => of(['Error'])) );
  }

  buscarCapital ( termino: string ): Observable<Country[]>{

    const ulr = `${ this.apiUrl }/capital/${termino}`;

    return this.http.get<Country[]>(ulr, { params: this.httpParams })
    //.pipe( catchError(err => of(['Error'])) );
  }

  getPaisPorCodigo ( code: string ): Observable<Country>{

    const ulr = `${ this.apiUrl }/alpha/${code}`;

    return this.http.get<Country>(ulr)
  }


}
