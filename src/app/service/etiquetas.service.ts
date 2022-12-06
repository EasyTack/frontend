import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../model/etiqueta.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService extends GenericService<Etiqueta>{
  constructor(http: HttpClient) { 
    super(http, "etiquetas")
  }

  criarEtiqueta(etiqueta: Etiqueta){
    return this.http.post<any>(`${this._url_}/${this.url}`, {etiqueta}, { headers: this.cabecalho() })
}

  getEtiquetas(){
    return this.http.get<Etiqueta[]>(`${this._url_}/${this.url}`,{ headers: this.cabecalho() })
  }

  editarEtiqueta(etiqueta: Etiqueta){
    return this.http.patch<any>(`${this._url_}/${this.url}`, {etiqueta}, { headers: this.cabecalho() })
  }

  deletarEtiqueta(idEtiqueta: String){
    return this.http.delete<any>(`${this._url_}/${this.url}/${idEtiqueta}`, { headers: this.cabecalho() })
  }
}
