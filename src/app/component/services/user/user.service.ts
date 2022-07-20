import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = environment.API;
  PEOPLE = environment.API_PEOPLES;
  LOG = environment.API_LOGS;

  constructor(private _http: HttpClient) { }

  public getActualUser(email: string, senha: string): Observable<any>{
    const URL = `${this.URL}${this.PEOPLE}?email=${email}&senha=${senha}`;
    return this._http.get<any>(URL);
  }

  public getAutenticadoUser(){
    const pessoaAtual: any = localStorage.getItem('XYZKZY9D');
    return JSON.parse(pessoaAtual);
  }
}
