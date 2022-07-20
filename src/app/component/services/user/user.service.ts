import { environment } from './../../../../environments/environment';
import { catchError, Observable, take, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { TicketService } from '../ticket/ticket.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = environment.API;
  PEOPLE = environment.API_PEOPLES;
  LOG = environment.API_LOGS;

  constructor(
    private _ticket: TicketService,
    private _http: HttpClient
    ) { }

  public getLogged(email: string, senha: string): Observable<UserModel[]>{
    const URL = `${this.URL}${this.PEOPLE}?email=${email}&senha=${senha}`;
    return this._http.get<UserModel[]>(`${URL}`)
    .pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  public logged(user: UserModel){
    this._ticket.setAuth(user);
  }

  setLanguage(language: string) {
    this._ticket.setLanguage(language);
  }

  setST(st: string) {
    this._ticket.setST(st);
  }

  logOut() {
    this._ticket.removeTicket();
  }

  getMail() {
    return this._ticket.getMail();
  }

  getName() {
    return this._ticket.getName();
  }

  getFoto() {
    return this._ticket.getFoto();
  }

  getUserID() {
    return this._ticket.getUserID();
  }

  getLanguage() {
    return this._ticket.getLanguage();
  }

  isLogged() {
    return this._ticket.hasTicket();
  }

  getOrigin() {
    return this._ticket.getOrigin();
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a host-facing error message
    return throwError(error.error);

  }
}
