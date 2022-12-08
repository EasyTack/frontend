import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Security } from './utils/security.util.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarioLogado: Boolean = false
  usuarioName?: String

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.usuarioLogado = (Security.getToken()) ? true : false
    this.usuarioName = (this.usuarioLogado) ? Security.getUser()?.nome : ''
  }
  
  openConfig(){
    const dialogConfiguracao = this.dialog.open(ConfiguracaoComponent);
  }

  changeRegistration(){
    this.router.navigateByUrl(`/cadusr?id=12`);
  }

  logout(){
    this.authService.logout()
  }
}
