import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'form-input-date-interval',
  templateUrl: './input-date-interval.component.html',
  styleUrls: ['./input-date-interval.component.css']
})
export class InputDateIntervalComponent implements OnInit {

  @Input() label?: String
  @Input() placeholder?: String
  @Input() placeholderInicio?: String
  @Input() placeholderFim?: String
  @Input() custonFormControlNameInicio?: String
  @Input() custonFormControlNameFim?: String

  form!: FormGroup
  auxDate = new FormGroup({
    inicio: new FormControl(),
    fim: new FormControl(),
  });

  constructor(
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }

}
