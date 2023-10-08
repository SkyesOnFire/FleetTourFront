import { Injectable } from '@angular/core';
import { CadastroOnibusModel } from '../model/cadastro-onibus.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroOnibusService {
  usuarios: CadastroOnibusModel[] = [];

  constructor() { }

  salvar(cliente: CadastroOnibusModel) {
    this.usuarios.push(cliente);

    console.log(this.usuarios);
  }
}
