import { Component } from '@angular/core';

export interface PeriodicElement {
  posicao: number;
  placa: string;
  marca: string;
  editar: string;
  excluir: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicao: 1, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 2, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 3, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 4, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 5, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 6, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 7, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 8, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 9, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
  {posicao: 10, placa: 'placa', marca: 'marca', editar: 'edit', excluir: 'excluir'},
];

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})



export class OnibusComponent {
  displayedColumns: string[] = ['posicao', 'placa', 'marca', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
