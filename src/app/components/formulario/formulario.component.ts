import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  tituloAtividade: string = "";
  descricao:string = "";

  criarAtividade() {
    console.log("Criar Atividade");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
