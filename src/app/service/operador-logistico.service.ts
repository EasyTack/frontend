import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperadorLogistico } from '../model/operador-logistico.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class OperadorLogisticoService  extends GenericService<OperadorLogistico>{

  constructor(http: HttpClient) {
    super(http, "operadores-logisticos")
  }

}
