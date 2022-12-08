import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

const REQUEST_TOKEN = 'YW5kcm9pZDtici5jb20uY29ycmVpb3MucHJlYXRlbmRpbWVudG87RjMyRTI5OTc2NzA5MzU5ODU5RTBCOTdGNkY4QTQ4M0I5Qjk1MzU3OA==';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService  extends GenericService<any>{


  constructor(http: HttpClient) {
    super(http, "correios")
  }


  getEncomenda(codigo: any){
    return this.http.get<any>(this._url_+'rest-request/correios/'+codigo)
  };
}
