import { Injectable } from '@angular/core';
import { CadastroClienteModel } from '../model/cadastro-cliente.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {
  usuarios: CadastroClienteModel[] = [];

  constructor() { }

  salvar(cliente: CadastroClienteModel) {
    this.usuarios.push(cliente);

    console.log(this.usuarios);
  }
}

