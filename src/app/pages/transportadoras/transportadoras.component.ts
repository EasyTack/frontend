import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operadorLogistico.model';
import { OperadorLogisticoService } from 'src/app/service/operador-logistico.service';

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {

  trasportadoras?: any[]
  carregandoLista: Boolean = false

  constructor(private operadorLogisticoService: OperadorLogisticoService) { }

  ngOnInit(): void {
    this.carregandoLista = true;
    this.operadorLogisticoService.getTodos().subscribe((op: OperadorLogistico[]) => {
      this.trasportadoras = op
      this.carregandoLista = false
    })
  }
}
