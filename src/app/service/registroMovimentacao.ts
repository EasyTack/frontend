import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { RegistroMovimentacao } from '../model/registroMovimentacao.model';
import { Observable } from 'rxjs';
import * as data from '../../assets/mock.json';

@Injectable({
  providedIn: 'root'
})
export class RegistroMovimentacaoService extends GenericService<Configuracao> {
  dados = data;

  constructor(http: HttpClient) {
    super(http, "registro-movimentacoes")
  }

  getPorIdPacote(idPacote: String){
    return this.http.get<RegistroMovimentacao[]>(`${this._url_}/${this.url}/${idPacote}`, { headers: this.cabecalho() })
  }
}
