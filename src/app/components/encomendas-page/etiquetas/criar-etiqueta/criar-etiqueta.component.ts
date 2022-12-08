import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfiguracaoComponent } from 'src/app/components/configuracao/configuracao.component';
import { Etiqueta } from 'src/app/model/etiqueta.model';
import { EtiquetasService } from 'src/app/service/etiquetas.service';

@Component({
  selector: 'app-criar-etiqueta',
  templateUrl: './criar-etiqueta.component.html',
  styleUrls: ['./criar-etiqueta.component.css']
})
export class CriarEtiquetaComponent implements OnInit {

  formCriarEtiqueta: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef <ConfiguracaoComponent>,
    private etiquetasService: EtiquetasService,
    private toastr: ToastrService
  ) { 
    this.formCriarEtiqueta = this.createForm(this.fb)
  }

  ngOnInit(): void {
  }

  criarEtiqueta(){
    let etiqueta = new Etiqueta(this.formCriarEtiqueta.controls['nome'].value, this.formCriarEtiqueta.controls['cor'].value);
    if(etiqueta.nome && etiqueta.cor){
    this.etiquetasService.salvar(etiqueta).subscribe( result => {
      
      })
    }
    else{
      this.toastr.warning('É necessário preencher todos os campos', 'Alerta', {
        timeOut: 3000,
      })
    }
  }

  createForm(fb: FormBuilder){
    return fb.group({
      nome: [],
      cor: ['#ff0000']
    })
  }
}
