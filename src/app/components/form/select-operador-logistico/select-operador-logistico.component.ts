import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { OperadorLogistico } from 'src/app/model/operador-logistico.model';

@Component({
  selector: 'form-select-operador-logistico',
  templateUrl: './select-operador-logistico.component.html',
  styleUrls: ['./select-operador-logistico.component.css']
})
export class SelectOperadorLogisticoComponent implements OnInit {

  @Input() label?: String
  @Input() custonFormControlName?: String
  @Input() operadoresLogisticos$?: Observable<OperadorLogistico[]>
  form!: FormGroup

  constructor(
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }
}