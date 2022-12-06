import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';

@Component({
  selector: 'app-editar-etiqueta',
  templateUrl: './editar-etiqueta.component.html',
  styleUrls: ['./editar-etiqueta.component.css']
})
export class EditarEtiquetaComponent implements OnInit {

  formEditarEtiqueta: FormGroup
  etiquetas$?: Observable<Etiqueta[]>
  etiquetaSelecionada: Etiqueta = new Etiqueta
  selecionandoEtiqueta = true

  constructor(
    private fb: FormBuilder,
    private etiquetasService: EtiquetasService
  ) {
    this.formEditarEtiqueta = this.createForm(fb)
  }

  ngOnInit(): void {
    this.etiquetas$ = this.etiquetasService.getTodos()
  }

  createForm(fb: FormBuilder){
    return fb.group({
      nome: [],
      cor: [],
      etiqueta: []
    })
  }

  selecionarEtiqueta(){
    const etiqueta = this.formEditarEtiqueta.controls['etiqueta'].value
    if(etiqueta){
      this.selecionandoEtiqueta = false
      this.formEditarEtiqueta.controls['nome'].setValue(etiqueta.nome)
      this.formEditarEtiqueta.controls['cor'].setValue(etiqueta.cor)
    }
  }
}
