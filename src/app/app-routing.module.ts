import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaUsuarioComponent } from './pages/pagina-usuario/pagina-usuario.component';
import { RegistroMovimentacaoComponent } from './pages/registro-movimentacao/registro-movimentacao.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  {
    path: '', 
    canActivate: [AuthService],
    children: [
      {path: '', component: HomeComponent},
      {path: 'encomendas', component: EncomendasComponent},
      {path: 'mov', component: RegistroMovimentacaoComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'transp', component: TransportadorasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadusr', component: CadastroUsuarioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
