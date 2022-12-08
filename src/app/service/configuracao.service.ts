import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracao } from '../model/configuracao.model';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService extends GenericService<Configuracao> {

  constructor(http: HttpClient) {
    super(http, "configuracoes")
  }

  getPorIdUsuario(idUsuario: String){
    return this.http.post<Configuracao>(`${this._url_}/${this.url}/${idUsuario}`, { headers: this.cabecalho() })
  }

  patchConfigurcacoes(idUsuario: String, configuracao: Configuracao){
    return this.http.patch<Configuracao>(`${this._url_}/${this.url}/${idUsuario}`, configuracao, { headers: this.cabecalho() })
  }
}
