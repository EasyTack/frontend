import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Configuracao } from 'src/app/model/configuracao.model';
import { ConfiguracaoService } from 'src/app/service/configuracao.service';
import { Security } from 'src/app/utils/security.util.ts';

@Component({
  selector: 'app-maisInfoMovimentacao',
  templateUrl: './mais-info-movimentacao.component.html',
  styleUrls: ['./mais-info-movimentacao.component.css']
})
export class MaisInfoMovimentacaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef <MaisInfoMovimentacaoComponent>,
  ){
    dialog.disableClose = true;
  }

  ngOnInit(): void {
    
    let a = this.data;
      }
  
  closeDialog(){
    this.dialog.close()
  }
}
