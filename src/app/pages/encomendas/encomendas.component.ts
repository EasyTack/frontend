import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEtiquetaComponent } from 'src/app/components/encomendas-page/etiquetas/adicionar-remover-etiqueta/adicionar-remover-etiqueta.component';
import { CadastrarEncomendaComponent } from 'src/app/components/encomendas-page/encomendas/cadastrar-encomenda/cadastrar-encomenda.component';
import { CriarEtiquetaComponent } from 'src/app/components/encomendas-page/etiquetas/criar-etiqueta/criar-etiqueta.component';
import { FiltrosComponent } from 'src/app/components/encomendas-page/filtros/filtros.component';
import { ControladorTabela } from 'src/app/components/encomendas-page/tabela/tabela-encomendas/ControladorTabela';
import { PacoteService } from 'src/app/service/pacote.service';
import { Filtro, TipoFiltro } from '../../model/filtro.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { EditarEtiquetaComponent } from 'src/app/components/encomendas-page/etiquetas/editar-etiqueta/editar-etiqueta.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoSnackbarComponent } from 'src/app/components/alertas/info-snackbar/info-snackbar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  filtros: Filtro[] = []
  listaPacotes$ = new ControladorTabela(this.pacoteService)

  constructor(
    private dialog: MatDialog,
    private pacoteService: PacoteService,
    private etiquetasService: EtiquetasService,
    private mensagem: MatSnackBar,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.listaPacotes$?.buscaTodos()
  }

  dialogAdicionarEncomenda(){
    const dialogRef = this.dialog.open(CadastrarEncomendaComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      const data = dialogRef.componentInstance.pacote
      
      if(data) this.pacoteService.salvar(data)
    });
  }

  removerEncomenda(){
    if(this.listaPacotes$.idPacotesSelecionados().length > 0){
      this.pacoteService.deletarGrupo(this.listaPacotes$.idPacotesSelecionados())
    
    } else {
      this.toastr.warning('É necessário selecionar alguma encomenda.', 'Alerta', {
        timeOut: 3000,
      })
    }
  }

  dialogCriarEtiqueta(){
      const dialogRef = this.dialog.open(CriarEtiquetaComponent)

      // dialogRef.afterClosed().subscribe(result => {
      //   const { nome, cor } = result

      //   // if(nome && cor)
      //   //   //this.etiquetasService.criarEAssociarPacote(new Etiqueta(nome, cor), idSelecionado)
      //   // }
      // )

      this.toastr.warning('É necessário selecionar alguma encomenda.', 'Alerta', {
        timeOut: 3000,
      })
  }

  dialogEditarEtiqueta(){
    const dialogRef = this.dialog.open(EditarEtiquetaComponent)

    dialogRef.afterClosed().subscribe(result => {
      const { nome, cor } = result
      let { etiqueta } = result

      if(nome && cor && etiqueta){
        etiqueta.nome = nome
        etiqueta.cor = cor
        this.etiquetasService.atualizar(etiqueta)
      }
    })
  }

  dialogAdicionarEtiqueta(){
    const idSelecionado = this.listaPacotes$.idPacotesSelecionados()

    if(idSelecionado.length > 0){
      const dialogRef = this.dialog.open(AdicionarEtiquetaComponent)

      dialogRef.afterClosed().subscribe(result => {
        const { id } = result

        if(id){
          this.pacoteService.adicionarEtiqueta(id, idSelecionado)
        }
      })
    
    } else {
      this.toastr.warning('É necessário selecionar alguma encomenda.', 'Alerta', {
        timeOut: 3000,
      })
    }
  }

  removerEtiqueta(){
    const idSelecionado = this.listaPacotes$.idPacotesSelecionados()

    if(idSelecionado.length > 0){
      const dialogRef = this.dialog.open(AdicionarEtiquetaComponent, {data: {idPacotes: idSelecionado}})

      dialogRef.afterClosed().subscribe(result => {
        const { id } = result

        if(id){
          this.pacoteService.removerEtiqueta(id, idSelecionado)
        }
      })
    
    } else {
      this.toastr.warning('É necessário selecionar alguma encomenda.', 'Alerta', {
        timeOut: 3000,
      })
    }
  }

  dialogFiltrarCodigo(){
    return null;
    let ft = new Filtro(TipoFiltro.Codigo)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Codigo})

    dialogRef.afterClosed().subscribe(result => {
      const { buscaCodigo } = result

      if(buscaCodigo){
        ft.buscaCodigo = buscaCodigo
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarOperadorLogistico(){
    return
    let ft = new Filtro(TipoFiltro.OperadorLogistico)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.OperadorLogistico})

    dialogRef.afterClosed().subscribe(result => {
      const { buscaOperadorLogistico } = result

      if(buscaOperadorLogistico){
        ft.buscaOperadorLogistico = buscaOperadorLogistico
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarOrigem(){
    return
    let ft = new Filtro(TipoFiltro.Origem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Origem})    

    dialogRef.afterClosed().subscribe(result => {
      const { buscaOrigem } = result

      if(buscaOrigem){
        ft.buscaOrigem = buscaOrigem
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarDestino(){
    return
    let ft = new Filtro(TipoFiltro.Destino)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Destino}) 

    dialogRef.afterClosed().subscribe(result => {
      const { buscaDestino } = result

      if(buscaDestino){
        ft.buscaDestino = buscaDestino
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarEtiqueta(){
    return
    let ft = new Filtro(TipoFiltro.Etiqueta)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.Etiqueta})

    dialogRef.afterClosed().subscribe(result => {
      const { buscaEtiqueta } = result

      if(buscaEtiqueta){
        ft.buscaEtiqueta = buscaEtiqueta
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarStatus(){}

  dialogFiltrarPeriodoPostagem(){
    return
    let ft = new Filtro(TipoFiltro.DataPostagem)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataPostagem})

    dialogRef.afterClosed().subscribe(result => {
      const { buscaPeriodoInicio,  buscaPeriodoFim } = result
      if(buscaPeriodoInicio && buscaPeriodoFim){
        ft.buscaDataPostagemInicio = buscaPeriodoInicio
        ft.buscaDataPostagemFim = buscaPeriodoFim
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  dialogFiltrarPeriodoEntrega(){
    return
    let ft = new Filtro(TipoFiltro.DataEntrega)
    const dialogRef = this.dialog.open(FiltrosComponent, {data: TipoFiltro.DataEntrega})

    dialogRef.afterClosed().subscribe(result => {
      const { buscaPeriodoInicio, buscaPeriodoFim } = result
      if(buscaPeriodoInicio && buscaPeriodoFim){
        ft.buscaDataEntregaInicio = buscaPeriodoInicio
        ft.buscaDataEntregaFim = buscaPeriodoFim
        this.filtros.push(ft)
        this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
      }
    })
  }

  removerFiltro(filtro: Filtro, index: number){
    return
    this.filtros.splice(index, 1);
    this.listaPacotes$.buscaCustom(new Filtro(TipoFiltro.Codigo))
  }
}
