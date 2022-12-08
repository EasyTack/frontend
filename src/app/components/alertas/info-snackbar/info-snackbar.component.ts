import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AletInfo } from 'src/app/interfaces/alertInfo';

@Component({
  selector: 'app-info-snackbar',
  templateUrl: './info-snackbar.component.html',
  styleUrls: ['./info-snackbar.component.css']
})
export class InfoSnackbarComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<InfoSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: AletInfo,
  ) {
  }

  ngOnInit(): void {
  }  
}
