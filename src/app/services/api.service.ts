import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private firestore: AngularFirestore,
    private loadingBar: LoadingBarService,
    private httpClient: HttpClient
  ) {}
  url = 'http://dev.gerenciemeugabinete.com.br/operacao/reivindicacao';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  createUsuario(contato) {
    this.saveCar(contato)
    return this.firestore.collection("alex").add(contato);
  }
  saveCar(car: any): Observable<any> {
    return this.httpClient.post<any>(this.url, JSON.stringify(car), this.httpOptions)
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log({errorMessage});
    return throwError(errorMessage);
  };
}
