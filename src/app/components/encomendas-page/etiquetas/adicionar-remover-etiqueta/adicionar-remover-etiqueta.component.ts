import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';

@Component({
  selector: 'app-adicionar-remover-etiqueta',
  templateUrl: './adicionar-remover-etiqueta.component.html',
  styleUrls: ['./adicionar-remover-etiqueta.component.css']
})
export class AdicionarEtiquetaComponent implements OnInit {

  etiquetas$?: Observable<Etiqueta[]>
  etiquetaSelecionada?: Etiqueta
  formAdionarEtiqueta: FormGroup
  adicionar = false
  remover = false

  constructor(
    private fb: FormBuilder,
    private etiquetasService: EtiquetasService,
    @Inject(MAT_DIALOG_DATA) private idPacotes: String[],
  ) { 
    this.formAdionarEtiqueta =  fb.group({etiqueta: []})
  }

  ngOnInit(): void {
    if(this.idPacotes){
      //this.etiquetas$ = this.etiquetasService.getPorIdPacote(this.idPacotes)
      this.remover = true
    
    } else {
      this.etiquetas$ = this.etiquetasService.getTodos()
      this.adicionar = true
    }
  }
}
