import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';
import { RegistroMovimentacao } from '../model/registro-movimentacao.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroMovimentacaoService extends GenericService<Configuracao> {

  constructor(http: HttpClient) {
    super(http, "registro-movimentacoes")
  }

  getPorIdPacote(idPacote: String){
    return this.http.get<RegistroMovimentacao[]>(`${this._url_}/${this.url}/${idPacote}`, { headers: this.cabecalho() })
  }
}
