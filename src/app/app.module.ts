import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from 'src/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { TabelaEncomendasComponent } from './components/encomendas-page/tabela/tabela-encomendas/tabela-encomendas.component';
import { CadastrarEncomendaComponent } from './components/encomendas-page/encomendas/cadastrar-encomenda/cadastrar-encomenda.component';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { FiltrosComponent } from './components/encomendas-page/filtros/filtros.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CriarEtiquetaComponent } from './components/encomendas-page/etiquetas/criar-etiqueta/criar-etiqueta.component';
import { DescreveEtiquetasComponent } from './components/encomendas-page/tabela/descreve-etiquetas/descreve-etiquetas.component';
import { AdicionarEtiquetaComponent } from './components/encomendas-page/etiquetas/adicionar-remover-etiqueta/adicionar-remover-etiqueta.component';
import { RegistroMovimentacaoComponent } from './pages/registro-movimentacao/registro-movimentacao.component';
import { EditarEtiquetaComponent } from './components/encomendas-page/etiquetas/editar-etiqueta/editar-etiqueta.component';
import { SelectEtiquetaComponent } from './components/form/select-etiqueta/select-etiqueta.component';
import { InfoSnackbarComponent } from './components/alertas/info-snackbar/info-snackbar.component';
import { MovimentacaoPacoteComponent } from './components/movimentacao-pacote/movimentacao-pacote.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { SelectOperadorLogisticoComponent } from './components/form/select-operador-logistico/select-operador-logistico.component';
import { InputDateIntervalComponent } from './components/form/input-date-interval/input-date-interval.component';
import { PaginaUsuarioComponent } from './pages/pagina-usuario/pagina-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EncomendasComponent,
    TabelaEncomendasComponent,
    CadastrarEncomendaComponent,
    ConfiguracaoComponent,
    TransportadorasComponent,
    FiltrosComponent,
    CriarEtiquetaComponent,
    DescreveEtiquetasComponent,
    AdicionarEtiquetaComponent,
    RegistroMovimentacaoComponent,
    EditarEtiquetaComponent,
    SelectEtiquetaComponent,
    InfoSnackbarComponent,
    MovimentacaoPacoteComponent,
    InputTextComponent,
    SelectOperadorLogisticoComponent,
    InputDateIntervalComponent,
    PaginaUsuarioComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
      validation: true
  }),
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
