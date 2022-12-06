import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RegistroMovimentacao } from 'src/app/model/registroMovimentacao.model';

@Component({
  selector: 'app-movimentacao-pacote',
  templateUrl: './movimentacao-pacote.component.html',
  styleUrls: ['./movimentacao-pacote.component.css']
})
export class MovimentacaoPacoteComponent implements OnInit {

  @Input() registroMovimentacoes$?: Subject<RegistroMovimentacao[]>
  registroMovimentacoes?: RegistroMovimentacao[]

  constructor() { }

  ngOnInit(): void {
    this.registroMovimentacoes$?.subscribe((rm: RegistroMovimentacao[]) => {
      this.registroMovimentacoes = rm
    })
  }
}
