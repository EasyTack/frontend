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


  registrar(usuario: Usuario){
    return this.http.post<Usuario>(`${this._url_}/${this.url}/register`, usuario, { headers: this.cabecalho() })
  }


  login(nome: String, senha: String){
    return this.http.post<Auth>(`${this._url_}/${this.url}/login`, {"usuario":nome, "senha":senha})
  }

  logout(){
    Security.clear()
    this.router.navigate(['/login'])
  }

  refreshToken(){
    return this.http.get<any>(`${this._url_}/${this.url}/refreshToken`, { headers: this.cabecalho() })
  }

  recuperarSenha(usuario: Usuario){
    console.log("recuperar senha:")
    console.log(usuario)
    return true
  }
}
