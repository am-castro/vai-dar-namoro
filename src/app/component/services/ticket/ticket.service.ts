import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

const KEY_ST = 'autheTicket-st';
const USER_ID = 'userID';
const USER_NAME = 'userName';
const USER_FOTO = 'userFoto';
const USER_AGE = 'userAge';
const USER_MAIL = 'userMail';
const LANGUAGE = 'lang';
const ORIGIN = 'origin';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {}

  hasTicket() {
    return !!this.getAuth();
  }

  setAuth(auth: any) {
    window.sessionStorage.setItem(USER_ID, auth.id.toString());
    window.sessionStorage.setItem(USER_MAIL, auth.email);
    window.sessionStorage.setItem(USER_NAME, auth.nome);
    window.sessionStorage.setItem(USER_FOTO, auth.foto);
    window.sessionStorage.setItem(USER_AGE, auth.idade);
    window.sessionStorage.setItem(ORIGIN, auth.origin);
  }

  setLanguage(language: string) {
    window.sessionStorage.setItem(LANGUAGE, language);
  }

  setST(st: string) {
    window.sessionStorage.setItem(KEY_ST, st);
  }

  getAuth() {
    return window.sessionStorage.getItem(KEY_ST);
  }

  getMail() {
    return window.sessionStorage.getItem(USER_MAIL);
  }

  getName() {
    return window.sessionStorage.getItem(USER_NAME);
  }

  getFoto() {
    return window.sessionStorage.getItem(USER_FOTO);
  }

  getUserID() {
    return window.sessionStorage.getItem(USER_ID);
  }

  getLanguage() {
    return window.sessionStorage.getItem(LANGUAGE);
  }

  getOrigin() {
    return window.sessionStorage.getItem(ORIGIN);
  }


  removeTicket() {
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.removeItem(USER_MAIL);
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.removeItem(KEY_ST);
    window.sessionStorage.removeItem(ORIGIN);
  }
}
