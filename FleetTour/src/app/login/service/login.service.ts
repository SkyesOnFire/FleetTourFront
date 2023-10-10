import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: LoginModel[] = [];

  constructor(private http: HttpClient) { }

  async entrar(login: LoginModel) {

    var senha = "{bcrypt}";

    if (login.senha) 
    senha += bcrypt.hashSync(login.senha, "$2b$06$C6UzMDM.H6dfI/f/IKxGhu");

    const payload = {login: login.login, senha: senha};

    console.log("payload -> \nlogin: ", payload.login, "\nsenha: ", payload.senha);

    const url = 'localhost:8080/rest/auth/login';

    console.log("url -> ", url);
    if (url) {
      await this.http.post(url, payload).subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.log('There was an error: ', error);
        }
      });
    }

    this.login.push(login);

    console.log(this.login);
  }
}
