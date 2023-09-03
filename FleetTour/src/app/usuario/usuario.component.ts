import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  nome = new FormControl('', 
    [Validators.required]);

  cpf = new FormControl('',
    [Validators.required]);

  dt_nascimento = new FormControl('',
    [Validators.required]);

  genero = new FormControl('',
    [Validators.required]);

  telefone = new FormControl('', 
    [Validators.required]);

  login = new FormControl('',
    [Validators.required, Validators.minLength(5)]);

  senha = new FormControl('', 
    [Validators.required,Validators.minLength(5)]);
  
  salvar() {
    console.log(this.nome.value);
    console.log(this.cpf.value);
    console.log(this.dt_nascimento.value);
    console.log(this.genero.value);
    console.log(this.telefone.value);
    console.log(this.login.value);
    console.log(this.senha.value);
  }

}
