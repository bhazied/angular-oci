import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from  '../../environments/environment';
@Injectable(
  {
    providedIn : 'root'
  }
)
export class CarService {

  private baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCars() : Observable<any> {
    return this.http.get(this.baseurl+ "/cars")
    .pipe(
      catchError(this.handleError('getCars', []))
    );
  }

  addCar(car: any) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.baseurl+'/cars', car, httpOptions)
    .pipe(
      catchError(this.handleError('addCar', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
     console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
