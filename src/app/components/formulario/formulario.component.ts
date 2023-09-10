import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Atividade } from 'src/app/atividade';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  titulo: string = "";
  descricao:string = "";
  arrayAtividade:Atividade[] = [];
  @Input()
  title:string = "";
  @Output()
  atividadesEmitidas = new EventEmitter <Atividade[]> ();

  emitirAtividades() {
    this.atividadesEmitidas.emit(this.arrayAtividade);
    this.resetarAtividades();
  }

  criarAtividades() {
    this.arrayAtividade.push({
      tituloAtividade: this.titulo,
      descricaoAtividade: this.descricao
    });

    this.emitirAtividades();

  }

  resetarAtividades() {
    this.titulo = "";
    this.descricao = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
