import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Configuracao } from 'src/app/model/configuracao.model';
import { ConfiguracaoService } from 'src/app/service/configuracao.service';
import { Security } from 'src/app/utils/security.util.ts';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  formConfig: FormGroup

  labelIntervaloAtualizacao;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef <ConfiguracaoComponent>,
    private configuracaoService: ConfiguracaoService
  ){
    this.formConfig = this.createForm(this.fb)
    dialog.disableClose = true;
    this.labelIntervaloAtualizacao = this.formConfig.controls['intervaloAtualizacao'].value
  }

  ngOnInit(): void {
    const configuracao = Security.getConfig()
    this.formConfig.controls['atualizacaoAutomatica'].setValue(configuracao?.update_automatico)
    this.formConfig.controls['horarioComercialAtualizacao'].setValue(configuracao?.horario_comercial_atualizacao)
    this.formConfig.controls['intervaloAtualizacao'].setValue(configuracao?.intervalo_atualizacao)
    this.formConfig.controls['tipoOrdenacaoPadrao'].setValue(configuracao?. tipo_ordenacao_padrao)
  }
  
  createForm(fb: FormBuilder){
    return fb.group({
      atualizacaoAutomatica: [false],
      horarioComercialAtualizacao: [false],
      tipoOrdenacaoPadrao: [1],
      intervaloAtualizacao: [2]
    })
  }

  updateLabelAtualizacaoAutomatica(event: any){
    this.labelIntervaloAtualizacao = event.value
  }

  save(){
    let configuracao = new Configuracao()
    configuracao.update_automatico = this.formConfig.controls['atualizacaoAutomatica'].value
    configuracao.horario_comercial_atualizacao = this.formConfig.controls['horarioComercialAtualizacao'].value
    configuracao.intervalo_atualizacao = this.formConfig.controls['intervaloAtualizacao'].value
    configuracao.tipo_ordenacao_padrao = this.formConfig.controls['tipoOrdenacaoPadrao'].value

    this.configuracaoService.salvar(configuracao)
  }

  closeDialog(){
    this.dialog.close()
  }
}
