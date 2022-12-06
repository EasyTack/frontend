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

  geraToken(){
    return this.http.post<any>(`https://proxyapp.correios.com.br/v1/app-validation`, {requestToken: REQUEST_TOKEN}, { headers: {'content-type': 'application/json','user-agent': 'Dart/2.18 (dart:io)',
    } })
  }

  getEncomenda(codigo: any){
//    return this.geraToken().pipe(map((token) => {
//       this.http.get<any>("/apiCorreios/v1/sro-rastro/"+codigo, {headers: {
//        'content-type': 'application/json',
//        'user-agent': 'Dart/2.18 (dart:io)',
//        'app-check-token': token,
//      }}) 
//      }))
    return this.http.get<any>('https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo='+codigo)
  };
}
