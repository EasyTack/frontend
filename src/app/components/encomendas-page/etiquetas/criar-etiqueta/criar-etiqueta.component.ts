import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfiguracaoComponent } from 'src/app/components/configuracao/configuracao.component';

@Component({
  selector: 'app-criar-etiqueta',
  templateUrl: './criar-etiqueta.component.html',
  styleUrls: ['./criar-etiqueta.component.css']
})
export class CriarEtiquetaComponent implements OnInit {

  formCriarEtiqueta: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef <ConfiguracaoComponent>
  ) { 
    this.formCriarEtiqueta = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  createForm(fb: FormBuilder){
    return fb.group({
      nome: [],
      cor: ['#ff0000']
    })
  }
}
