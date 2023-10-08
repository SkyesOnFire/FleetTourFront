import { Component } from '@angular/core';

export interface PeriodicElement {
  posicao: number;
  nome: string;
  cpf: string;
  editar: string;
  excluir: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { posicao: 1, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 2, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 3, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 4, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 5, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 6, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 7, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 8, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 9, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
  { posicao: 10, nome: 'nome', cpf: 'cpf', editar: 'edit', excluir: 'excluir' },
];


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  displayedColumns: string[] = ['posicao', 'nome', 'cpf', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}

