import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { rastrearEncomendas } from 'correios-brasil';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operador-logistico.model';
import { Pacote } from 'src/app/model/pacote.model';
import { RegistroMovimentacao } from 'src/app/model/registro-movimentacao.model';
import { CorreiosService } from 'src/app/service/correios.service';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';
import { PacoteService } from 'src/app/service/pacote.service';
import { RegistroMovimentacaoService } from 'src/app/service/registroMovimentacao';
import { Security } from 'src/app/utils/security.util.ts';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //codigo: string | undefined;
  //regCorreios = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/
  //pacote: Pacote = new Pacote();
  formPesquisa: FormGroup
  registroMovimentacoes$: Subject<RegistroMovimentacao[]> = new BehaviorSubject<RegistroMovimentacao[]>([])
  operadoresLogisticos$?: Observable<OperadorLogistico[]>
  pesquisa: Boolean = false

  constructor(
    private fb: FormBuilder,
    private correioService: CorreiosService,
    private registroMovimentacaoService: RegistroMovimentacaoService,
    private pacoteService: PacoteService,
    private operadorLogisticoService: OperadorLogisticoService
  ) {
    this.formPesquisa = this.createForm(this.fb)
  }

  ngOnInit(): void {
    this.operadoresLogisticos$ = this.operadorLogisticoService.getTodos()

    /*this.registroMovimentacaoService.getPorIdPacote("").subscribe((rm: RegistroMovimentacao[]) => {
      this.registroMovimentacoes$.next(rm)
    })*/
  }

  createForm(fb: FormBuilder) {
    return fb.group({
      buscaCodigo: [''],
      buscaOperadorLogistico: [],
    })
  }

  pesquisar() {
    const codPacote = this.formPesquisa.controls['buscaCodigo'].value
    const opLogistico = this.formPesquisa.controls['buscaOperadorLogistico'].value
    this.pesquisa = true
    this.registroMovimentacaoService.getPorIdPacote(opLogistico.documento, codPacote).subscribe((rm: any) => {
      this.registroMovimentacoes$.next(rm)
    })
  }

}