import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etiqueta } from 'src/app/model/etiqueta.model';

@Component({
  selector: 'app-descreve-etiquetas',
  templateUrl: './descreve-etiquetas.component.html',
  styleUrls: ['./descreve-etiquetas.component.css']
})
export class DescreveEtiquetasComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public etiquetas: Etiqueta[]) { }

  ngOnInit(): void {
  }
}
