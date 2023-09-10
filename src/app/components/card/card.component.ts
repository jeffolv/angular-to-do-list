import { Component, OnInit, Input } from '@angular/core';
import { Atividade } from 'src/app/atividade';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  atividades:Atividade[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
