import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new FormControl('',
    [Validators.required]);

  senha = new FormControl('',
    [Validators.required]);


  entrar() {
    console.log(this.login.value);
    console.log(this.senha.value);
  }
}
