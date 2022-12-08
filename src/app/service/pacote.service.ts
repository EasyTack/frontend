import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from '../model/pacote.model';
import { Filtro } from '../model/filtro.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PacoteService extends GenericService<Pacote>{
  constructor(http: HttpClient) {
    super(http, "pacotes")
  } 


  getPacote(codPacote: String){//Com isso daqui trazendo as movimentacoes nao tem necessidade do crud de registro movimentacoes;
    return this.http.get<Pacote>(`${this._url_}/${this.url}/${codPacote}`, { headers: this.cabecalho() })

  }

  deletarGrupo(idPacotes: String[]){
    return this.http.post<String[]>(`${this._url_}/${this.url}/deletarGrupo`, idPacotes, { headers: this.cabecalho() })
  }

  getPorFiltro(filtro: Filtro){
    return this.http.post<Pacote[]>(`${this._url_}/${this.url}/getPorFiltro`, filtro, { headers: this.cabecalho() })
  }

  adicionarEtiqueta(idEtiqueta: String, idPacotes: String[]){
    return this.http.post<any>(`${this._url_}/${this.url}/adicionarEtiqueta`, {idEtiqueta, idPacotes}, { headers: this.cabecalho() }).subscribe(
      e => console.log(e)
    )
  }

  removerEtiqueta(idEtiqueta: String, idPacotes: String[]){
    return this.http.post<String>(`${this._url_}/${this.url}/removerEtiqueta`, {idEtiqueta, idPacotes}, { headers: this.cabecalho() })
  }
}
