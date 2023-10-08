import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroOnibusModel } from './model/cadastro-onibus.model';
import { CadastroOnibusService } from './service/cadastro-onibus.service';

@Component({
  selector: 'app-cadastro-onibus',
  templateUrl: './cadastro-onibus.component.html',
  styleUrls: ['./cadastro-onibus.component.css']
})

export class CadastroOnibusComponent {

  constructor(private cadastroOnibusService: CadastroOnibusService) { }

  modelo = new FormControl('',
    [Validators.required]);

  marca = new FormControl('',
    [Validators.required]);

  placa = new FormControl('',
    [Validators.required]);

  ano = new FormControl('',
    [Validators.required]);

  salvar() {
    console.log(this.modelo.value);
    console.log(this.marca.value);
    console.log(this.placa.value);
    console.log(this.ano.value);


    let onibus = new CadastroOnibusModel();
    onibus.modelo = this.modelo.value?.toString();
    onibus.marca = this.marca.value?.toString();
    onibus.placa = this.placa.value?.toString();
    onibus.ano = this.ano.value?.toString();

    this.cadastroOnibusService.salvar(onibus);
  }
}
