import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { Auth } from '../interfaces/auth';
import { Security } from '../utils/security.util.ts';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GenericService<Usuario>{
  user: any;
  constructor(
    http: HttpClient,
    private router: Router
  ) {
    super(http, "auth")
  }

  canActivate(){
    if(!Security.getToken()){
      this.router.navigate(['/login'])
      return false
    }
    return true
  }

  login(nome: String, senha: String){
    return new Observable((observer) => {
      this.user = this.data.usuarios.find(usuario => usuario.usuario == nome)
      observer.next( this.user?.senha == senha ? {"usuario":this.user, "token":"tokenvalido"} : new ErrorEvent('404 Not Found'))}) 
    //LOGIN não pode ser feito de maneira nenhuma via get, pois deixa senha em evidencia na url
    return this.http.get<Auth>(`${this._url_}/${this.url}/${nome}/${senha}`)
  }

  logout(){
    Security.clear()
    this.router.navigate(['/login'])
  }

  refreshToken(){
    return new Observable((observer) => {
      observer.next({"usuario":this.user, "token":"tokenvalido"})})
    return this.http.get<any>(`${this._url_}/${this.url}/refreshToken`, { headers: this.cabecalho() })
  }

  recuperarSenha(usuario: Usuario){
    console.log("recuperar senha:")
    console.log(usuario)
    return true
  }
}
