import { Component, Input, OnInit } from '@angular/core';
import { Pacote } from 'src/app/model/pacote.model';
import { RegistroMovimentacao } from 'src/app/model/registroMovimentacao.model';
import { RegistroMovimentacaoService } from 'src/app/service/registroMovimentacao';
import { ActivatedRoute } from '@angular/router';
import { PacoteService } from 'src/app/service/pacote.service';
import { BehaviorSubject, Observable, of, Subject, Subscriber } from 'rxjs';


@Component({
  selector: 'app-registro-movimentacao',
  templateUrl: './registro-movimentacao.component.html',
  styleUrls: ['./registro-movimentacao.component.css']
})
export class RegistroMovimentacaoComponent implements OnInit {
  @Input() pacote?: Pacote
  registroMovimentacoes$: Subject<RegistroMovimentacao[]> = new BehaviorSubject<RegistroMovimentacao[]>([])

  carregandoLista: Boolean = false
  carregandoPacote: Boolean = false

  constructor(
    private route: ActivatedRoute,
    private registroMovimentacaoService: RegistroMovimentacaoService,
    private pacoteService: PacoteService
  ) { }

  ngOnInit(): void {
    if(!this.pacote?.codigoOperadorLogistica){
    this.carregandoLista = true
    this.route.queryParams.subscribe(params => {
      let id = params['id']
      this.registroMovimentacaoService.getPorIdPacote(id).subscribe((rm: any) =>{
        this.registroMovimentacoes$.next(rm)
        this.carregandoLista = false
      })

      this.pacoteService.getId(id).subscribe((p: Pacote) => {
        this.pacote = p
        this.carregandoPacote = false
      })
    })
  }
  /*else{
    this.registroMovimentacoes = this.pacote.registroMovimentacoes;
  }*/
  }
}