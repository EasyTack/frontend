import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Security } from 'src/app/utils/security.util.ts';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  hide_senha = true;
  hide_confirmarSenha = true;
  editandoCadastro = false
  carregando = false

  formCadastro: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    
  ) {
    this.formCadastro = this.createForm(this.fb)
  }

  ngOnInit(): void {
    const usuario = Security.getUser()
    
    if(usuario.id){
      this.carregando = true
      this.usuarioService.getId(usuario.id).subscribe((usr: Usuario) => {
        this.formCadastro.controls['usuario'].setValue(usr.usuario)
        this.formCadastro.controls['documento'].setValue(usr.documento)
        this.formCadastro.controls['nome'].setValue(usr.nome)
        this.formCadastro.controls['sobrenome'].setValue(usr.sobrenome)
        this.editandoCadastro = true
        this.carregando = false
      })
    }
  }

  createForm(fb: FormBuilder){
    return fb.group({
      usuario: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.required
      ])],
      nome: ['', Validators.compose([
        Validators.required
      ])],
      sobrenome: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      documento: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  submitForm(){
    let usuario :any = {}
    usuario.nome = this.formCadastro.controls['nome'].value
    usuario.sobrenome = this.formCadastro.controls['sobrenome'].value
    usuario.documento = this.formCadastro.controls['documento'].value
    usuario.usuario = this.formCadastro.controls['usuario'].value
    usuario.senha = this.formCadastro.controls['senha'].value
    usuario.email = this.formCadastro.controls['email'].value
    let confirmarSenha = this.formCadastro.controls['confirmarSenha'].value
    if(usuario.usuario && usuario.nome && usuario.sobrenome && usuario.senha && (usuario.senha == confirmarSenha) && usuario.documento && usuario.email){
      this.authService.registrar(usuario).subscribe(result => {
        setTimeout(() => {
          this.router.navigate(['/login'])
          this.snackBar.open('Usuário Registrado, você será redirecionado para tela de login!','Fechar', {
            duration: 3000,
            horizontalPosition: 'end',
          });
        }, (3000));

      }, error =>{
        this.snackBar.open('Erro ao registrar usuário: '+ error.error.message ,'Fechar', {
          duration: 3000,
          horizontalPosition: 'end',
        });
      })
    }
  }
}
