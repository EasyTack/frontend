import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operadorLogistico.model';
import { Pacote } from 'src/app/model/pacote.model';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';

@Component({
  selector: 'app-cadastrar-encomenda',
  templateUrl: './cadastrar-encomenda.component.html',
  styleUrls: ['./cadastrar-encomenda.component.css']
})
export class CadastrarEncomendaComponent implements OnInit {

  trasportadoras$?: Observable<any[]>
  formAdicionarEncomenda: FormGroup
  pacote?: Pacote

  constructor(
    private fb: FormBuilder, 
    private dialog: MatDialogRef <CadastrarEncomendaComponent>, 
    private operadorLogisticoService: OperadorLogisticoService
  ){
    this.formAdicionarEncomenda = this.createForm(this.fb)
    dialog.disableClose = true;

    this.formAdicionarEncomenda.controls['idOperadorLogistico']
  }

  ngOnInit(): void {
    this.trasportadoras$ = this.operadorLogisticoService.getTodos()
  }

  createForm(fb: FormBuilder){
    return fb.group({
      idOperadorLogistico: [''],
      codigoOperadorLogistico: ['']
    })
  }

  salvar(){
    const c = {
      idOperadorLogistico: this.formAdicionarEncomenda.controls['idOperadorLogistico'].value,
      codigoOperadorLogistico: this.formAdicionarEncomenda.controls['codigoOperadorLogistico'].value,
    }

    if(c.idOperadorLogistico && c.codigoOperadorLogistico){
      this.pacote = new Pacote();
      this.pacote.operadorLogistico = new OperadorLogistico();
      this.pacote.operadorLogistico.nome = '';
      this.pacote.codigoOperadorLogistica = this.formAdicionarEncomenda.controls['codigoOperadorLogistico'].value
      this.pacote.operadorLogistico.id = this.formAdicionarEncomenda.controls['idOperadorLogistico'].value

      this.dialog.close()
    }
  }
}