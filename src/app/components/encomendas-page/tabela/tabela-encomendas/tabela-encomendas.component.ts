import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { DescreveEtiquetasComponent } from '../descreve-etiquetas/descreve-etiquetas.component';

@Component({
  selector: 'app-tabela-encomendas',
  templateUrl: './tabela-encomendas.component.html',
  styleUrls: ['./tabela-encomendas.component.css']
})
export class TabelaEncomendasComponent implements OnInit {

  @Input() listaPacotes$: any
  displayed: String[] = ["select", "codigoOperadorLogistica", "status", "dataPostagem", "dataEntrega", "origem", "destino", "etiqueta"]

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  dialogDescreveEtiquetas(etiquetas: Etiqueta[]){
    if(etiquetas.length > 0 ) this.dialog.open(DescreveEtiquetasComponent, {data: etiquetas})
  }
}