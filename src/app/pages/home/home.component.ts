import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { rastrearEncomendas } from 'correios-brasil';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operador-logistico.model';
import { Pacote } from 'src/app/model/pacote.model';
import { RegistroMovimentacao } from 'src/app/model/registro-movimentacao.model';
import { CorreiosService } from 'src/app/service/correios.service';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';
import { RegistroMovimentacaoService } from 'src/app/service/registroMovimentacao';



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
    const mov :any = pacoteList[0].movimentacoes
    this.registroMovimentacoes$.next(mov)
    //this.registroMovimentacaoService.getPorIdPacote(id).subscribe((rm: any) => {
    //  this.registroMovimentacoes$.next(rm)
    //})
  }

}
const pacoteList = [
  {
      "codigo_operador_logistico": "QM477512381BR",
      "data_postagem":"04/11/2022",
      "data_entrega": "11/11/2022",
      "local_origem": "Nova Iguacu / RJ",
      "local_destino": "Serra / ES",
      "status": "Objeto entregue ao destinatário",
      "etiquetas": [{"nome": "Natal", "cor": "red", "id":"1"}, {"nome": "Eletronico", "cor": "blue", "id":"2"}],
      "operadorLogistico":{"nome": "Correios", "id":"1"},
      "movimentacoes": [
      {
          "data_movimentacao": "11/11/2022, 16:23",
          "local_origem": "",
          "local_destino": "",
          "status": "Objeto entregue ao destinatário",
          "response": [
          "Local: Agência dos Correios - Serra / ES"
          ]
      },
      {
          "data_movimentacao": "10/11/2022, 14:53",
          "local_origem": "",
          "local_destino": "",
          "status": "Objeto aguardando retirada no endereço indicado",
          "responde": [
          "Local: Agência dos Correios - Serra / ES",
          "Para retirá-lo, é preciso informar o código do objeto e apresentar documentação que comprove ser o destinatário ou pessoa por ele oficialmente autorizada.",
          "Agência dos Correios: Serra / ES"
          ]
      },
      {
          "data_movimentacao": "10/11/2022, 09:43",
          "local_origem": "Unidade de Distribuição - Serra / ES",
          "local_destino": "Agência dos Correios - Serra / ES",
          "status": "Objeto encaminhado",
          "responde": [
          "Origem: Unidade de Distribuição - Serra / ES",
          "Destino: Agência dos Correios - Serra / ES"
          ]
      }]},
      {
          "codigo_operador_logistico": "NA671944733BR",
          "data_postagem":"20/11/2022",
          "data_entrega": null,
          "local_origem": "China",
          "local_destino": null,
          "status": "Objeto recebido pelos Correios do Brasil",
          "etiquetas": [{"nome": "Natal", "cor": "red", "id":"1"}, {"nome": "Roupa", "cor": "purple", "id":"3"}],
          "operadorLogistico":{"nome": "Correios", "id":"1"}, 
          "movimentacoes": [
              {
                  "data_movimentacao": "11/11/2022, 16:23",
                  "local_origem": "",
                  "local_destino": "",
                  "status": "Objeto entregue ao destinatário",
                  "response": [
                  "Local: Agência dos Correios - Serra / ES"
                  ]
              },
              {
                  "data_movimentacao": "10/11/2022, 14:53",
                  "local_origem": "",
                  "local_destino": "",
                  "status": "Objeto aguardando retirada no endereço indicado",
                  "responde": [
                  "Local: Agência dos Correios - Serra / ES",
                  "Para retirá-lo, é preciso informar o código do objeto e apresentar documentação que comprove ser o destinatário ou pessoa por ele oficialmente autorizada.",
                  "Agência dos Correios: Serra / ES"
                  ]
              },
              {
                  "data_movimentacao": "10/11/2022, 09:43",
                  "local_origem": "Unidade de Distribuição - Serra / ES",
                  "local_destino": "Agência dos Correios - Serra / ES",
                  "status": "Objeto encaminhado",
                  "responde": [
                  "Origem: Unidade de Distribuição - Serra / ES",
                  "Destino: Agência dos Correios - Serra / ES"
                  ]
              }]}
      ]