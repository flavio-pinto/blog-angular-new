import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardiaService {
  loggato = false;

  constructor() { }

  autenticato() {
    return new Promise((res, rej) => {
      setTimeout(()=> {
        res(this.loggato)
      }, 1000)
    });
  }

  logIn() {
    this.loggato = true;
  }

  logOut() {
    this.loggato = false;
  }
}
