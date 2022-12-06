import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperadorLogistico } from '../model/operadorLogistico.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class OperadorLogisticoService  extends GenericService<OperadorLogistico>{

  constructor(http: HttpClient) {
    super(http, "operadores-logisticos")
  }

  
  getEtiquetas(){
    return this.http.get<OperadorLogistico[]>(`${this._url_}/${this.url}`,{ headers: this.cabecalho() })
  }
}
