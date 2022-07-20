import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  URL = environment.API;
  PEOPLE = environment.API_PEOPLES;
  LOG = environment.API_LOGS;

  constructor(private _http: HttpClient) { }

  public getSpecifiedPeople(id: number): Observable<any>{
    const URL = `${this.URL}${this.PEOPLE}?id=${id}`;
    return this._http.get<any>(URL);
  }
}
