import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: LoginModel[] = [];

  constructor() { }

  entrar(login: LoginModel) {
    this.login.push(login);

    console.log(this.login);
  }
}
