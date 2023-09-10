import { Component } from '@angular/core';
import { Atividade } from './atividade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  atividades:Atividade[] = [];

  constructor() {
    console.log(this.atividades);
  }

  criarAtividadesParaCard(atividades: Atividade[]){
    this.atividades = atividades;
  }
}
  