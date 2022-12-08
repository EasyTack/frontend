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

}
