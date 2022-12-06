import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { OperadorLogistico } from 'src/app/model/operadorLogistico.model';
import { TipoFiltro } from 'src/app/model/filtro.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';
import { ConfiguracaoComponent } from '../../configuracao/configuracao.component';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  formFiltro: FormGroup
  etiquetas$?: Observable<Etiqueta[]>
  operadoresLogisticos$?: Observable<OperadorLogistico[]>

  constructor(
    private fb: FormBuilder, 
    private dialog: MatDialogRef <ConfiguracaoComponent>, 
    @Inject(MAT_DIALOG_DATA) public tipoFiltro: TipoFiltro,
    private etiquetasService: EtiquetasService,
    private operadorLogisticoService: OperadorLogisticoService
  ){
    //dialog.disableClose = true;

    this.formFiltro = this.createForm(this.fb)
  }

  ngOnInit(): void {
    if(this.tipoFiltro == TipoFiltro.OperadorLogistico) this.operadoresLogisticos$ = this.operadorLogisticoService.getTodos()
    if(this.tipoFiltro == TipoFiltro.Etiqueta) this.etiquetas$ = this.etiquetasService.getTodos()
  }

  createForm(fb: FormBuilder){
    return fb.group({
      buscaCodigo: [''],
      buscaOperadorLogistico: [],
      buscaOrigem: [''],
      buscaDestino: [''],
      buscaEtiqueta: [],
      buscaPeriodoInicio: [],
      buscaPeriodoFim: []
    })
  }

  tipoBuscaCodigo(): TipoFiltro { return TipoFiltro.Codigo }
  tipoOperadorLogistico(): TipoFiltro { return TipoFiltro.OperadorLogistico }
  tipoBuscaOrigem(): TipoFiltro { return TipoFiltro.Origem }
  tipoBuscaDestino(): TipoFiltro { return TipoFiltro.Destino }
  tipoBuscaEtiqueta(): TipoFiltro { return TipoFiltro.Etiqueta }
  tipoBuscaStatus(): TipoFiltro { return TipoFiltro.Status }
  tipoBuscaDataPostagem(): TipoFiltro { return TipoFiltro.DataPostagem }
  tipoBuscaDataEntrega(): TipoFiltro { return TipoFiltro.DataEntrega }
}
