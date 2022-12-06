import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { rastrearEncomendas } from 'correios-brasil';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operadorLogistico.model';
import { Pacote } from 'src/app/model/pacote.model';
import { RegistroMovimentacao } from 'src/app/model/registroMovimentacao.model';
import { CorreiosService } from 'src/app/service/correios.service';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';
import { RegistroMovimentacaoService } from 'src/app/service/registroMovimentacao';
import { Mapeamento } from 'src/app/utils/mapeamento.util.';

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

  createForm(fb: FormBuilder){
    return fb.group({
      buscaCodigo: [''],
      buscaOperadorLogistico: [],
    })
  }

  pesquisar(){
    const id = this.formPesquisa.controls['buscaCodigo'].value
    this.pesquisa = true
    this.registroMovimentacaoService.getPorIdPacote(id).subscribe((rm: any) => {
      this.registroMovimentacoes$.next(rm)
    })
  }

  /*verificaCodigoCorreios(codigo: any): any{
    if(this.regCorreios.test(codigo)){
      this.correioService.getEncomenda([codigo]).subscribe((response: any) => {
        this.pacote = Mapeamento.correiosToPacote(response)
      })
    }
   
    this.registroMovimentacaoService.getPorIdPacote("").subscribe((rm: RegistroMovimentacao[]) => {
      this.registroMovimentacoes$.next(rm)
    })
  }*/

}
