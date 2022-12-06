import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Auth } from 'src/app/interfaces/auth'
import { Configuracao } from 'src/app/model/configuracao.model'
import { Usuario } from 'src/app/model/usuario.model'
import { AuthService } from 'src/app/service/auth.service'
import { ConfiguracaoService } from 'src/app/service/configuracao.service'
import { Security } from 'src/app/utils/security.util.ts'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide_senha = true
  recover_password = false
  buscandoUsuario = false

  formLogin: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private configuracaoService: ConfiguracaoService
  ) {
    this.formLogin = this.createForm(this.fb)
  }

  ngOnInit(): void {
     if(Security.getToken()) {
      this.authService.refreshToken().subscribe(
        (data: any) => {
          Security.setToken(data.token)
        }, (err) => {
          //Security.clear()
        }
      )
    }
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  submitForm(){
    const usuario = this.formLogin.controls['usuario'].value
    const senha = this.formLogin.controls['senha'].value

    if(!usuario && !senha) return

    this.buscandoUsuario = true
    this.authService.login(usuario, senha)
      .subscribe(((data:any) => {
        Security.set(data.usuario, data.token.toString())
        this.configuracaoService.getPorIdUsuario(data.usuario.id).subscribe((c: any) => {
          Security.setConfig(c)
        })

        this.buscandoUsuario = false
        this.router.navigate([''])
      }), (err) => {
        this.buscandoUsuario = false
      })
  }

  submitFormRecoverPassword(){
    let usuario = new Usuario()
    usuario.usuario = this.formLogin.controls['usuario'].value

    this.authService.recuperarSenha(usuario)
  }

  recoverPassword(){
    this.recover_password = true
  }

  returnLogin(){
    this.recover_password = false
  }
}
