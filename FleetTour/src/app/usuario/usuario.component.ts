import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  constructor(private usuarioService: UsuarioService) {}

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


    let usuario = new UsuarioModel();
    usuario.nome = this.nome.value?.toString();
    usuario.cpf = this.cpf.value?.toString();
    usuario.dt_nascimento = this.dt_nascimento.value?.toString();
    usuario.genero = this.genero.value?.toString();
    usuario.telefone = this.telefone.value?.toString();
    usuario.login = this.login.value?.toString();
    usuario.senha = this.senha.value?.toString();

    this.usuarioService.salvar(usuario);
  }

}
