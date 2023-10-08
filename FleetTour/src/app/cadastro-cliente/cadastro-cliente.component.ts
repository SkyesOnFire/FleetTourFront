import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroClienteModel } from './model/cadastro-cliente.model';
import { CadastroClienteService } from './service/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  constructor(private cadastroClienteService: CadastroClienteService) { }

  nome = new FormControl('',
    [Validators.required]);

  cpf = new FormControl('',
    [Validators.required]);

  dt_nascimento = new FormControl('',
    [Validators.required]);

  telefone = new FormControl('',
    [Validators.required]);

  salvar() {
    console.log(this.nome.value);
    console.log(this.cpf.value);
    console.log(this.dt_nascimento.value);
    console.log(this.telefone.value);


    let cliente = new CadastroClienteModel();
    cliente.nome = this.nome.value?.toString();
    cliente.cpf = this.cpf.value?.toString();
    cliente.dt_nascimento = this.dt_nascimento.value?.toString();
    cliente.telefone = this.telefone.value?.toString();

    this.cadastroClienteService.salvar(cliente);
  }

}
