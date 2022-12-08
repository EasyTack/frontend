import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { RegistroMovimentacao } from 'src/app/model/registro-movimentacao.model';
import { MaisInfoMovimentacaoComponent } from '../mais-info-movimentacao/mais-info-movimentacao.component';

@Component({
  selector: 'app-movimentacao-pacote',
  templateUrl: './movimentacao-pacote.component.html',
  styleUrls: ['./movimentacao-pacote.component.css']
})
export class MovimentacaoPacoteComponent implements OnInit {
  
  @Input() registroMovimentacoes$?: Subject<RegistroMovimentacao[]>
  registroMovimentacoes?: RegistroMovimentacao[]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.registroMovimentacoes$?.subscribe((rm: RegistroMovimentacao[]) => {
      this.registroMovimentacoes = rm
    })
  }

  openModal(rm:any){
    
    const dialogRef = this.dialog.open(MaisInfoMovimentacaoComponent, {
      data: {response: rm.response?.toString(), status: rm.status},
    });
  }

  getIconeForStatus(status:any){
    if(status.toLowerCase().includes("objeto postado")){
      return('airplanemode_active')
    }
    if(status.toLowerCase().includes("entregue")){
      return('house')
    }
    return('local_shipping')
  }
}
