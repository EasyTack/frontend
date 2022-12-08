import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';
import { RegistroMovimentacao } from '../model/registro-movimentacao.model';
import { Security } from '../utils/security.util.ts';
import { Pacote } from '../model/pacote.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroMovimentacaoService extends GenericService<Configuracao> {

  constructor(http: HttpClient) {
    super(http, "registro-movimentacoes")
  }

  getPorIdPacote(docLogisitca: string, idPacote: String) {
    if (!Security.getToken()) return this.http.get<RegistroMovimentacao[]>(`${this._url_}/rest-request/${docLogisitca}/${idPacote}`) // Funcionando OK (caso retorne 500 é bem provavel q na verdade seja 422 pq tem limite de requisicao entao tentar novamente cada 3 segundos)
    return this.http.get<RegistroMovimentacao[]>(`${this._url_}/pacotes/${docLogisitca}/${idPacote}`, { headers: this.cabecalho() })
    //TODO: Retorno da linha acima NÁO é RegistroMovimentacao[] e sim Pacote. Existe um RegistroMovimentacao[] 
    //com nome movimentacoes DENTRO, mas nao consigo acessar NECESSITA-SE retornar o movimentacoes de dentro do objeto
  }


}
