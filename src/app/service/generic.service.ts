import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Security } from '../utils/security.util.ts';
import * as data from '../../assets/mock.json';
import { AppConfig } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {
  data = data;
  _url_ = AppConfig.BASE_URL;

  constructor(
    protected http: HttpClient, 
    protected url: String
  ) {}

  public cabecalho(){
    const token = Security.getToken()
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`)
    return headers
  }

  salvar(t: T){
    return this.http.post<T>(`${this._url_}/${this.url}/salvar`, t, { headers: this.cabecalho() })
  }

  atualizar(t: T){
    return this.http.put<T>(`${this._url_}/${this.url}/atualizar`, t, { headers: this.cabecalho() })
  }

  deletar(id: String){
    return this.http.delete<String>(`${this._url_}/${this.url}/deletar/${id}`, { headers: this.cabecalho() })
  }

  getId(id: String): Observable<T>{
    return this.http.get<T>(`${this._url_}/${this.url}/${id}`, { headers: this.cabecalho() })
  }

  getTodos(): Observable<T[]>{
    return this.http.get<T[]>(`${this._url_}/${this.url}/getTodos`, { headers: this.cabecalho() })
  }
}