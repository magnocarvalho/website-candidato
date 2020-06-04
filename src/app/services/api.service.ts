import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private firestore: AngularFirestore,
    private loadingBar: LoadingBarService
  ) {}

  createUsuario(contato) {
    this.loadingBar.start();
    return this.firestore.collection("usuarios").add(contato);
  }
}
