import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/model/etiqueta.model';

@Component({
  selector: 'form-select-etiqueta',
  templateUrl: './select-etiqueta.component.html',
  styleUrls: ['./select-etiqueta.component.css']
})
export class SelectEtiquetaComponent implements OnInit {

  etiquetaSelecionada?: Etiqueta
  @Input() label?: String
  @Input() etiquetas$?: Observable<Etiqueta[]>
  @Input() custonFormControlName?: String
  form!: FormGroup

  constructor(
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }
}
