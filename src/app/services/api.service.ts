import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { Site } from "../model/site";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	public url = "http://dev.gerenciemeugabinete.com.br/operacao/reivindicacao";
	public httpOptions = {
		headers: new HttpHeaders({ "Content-Type": "application/json" }),
	};
	public site: Site = new Site();
	constructor(
		private firestore: AngularFirestore,
		private loadingBar: LoadingBarService,
		private httpClient: HttpClient
	) {
		this.getAlexPager().subscribe((data) => {
			this.site = data.payload.data() as Site;
		});
	}
	getAlexPager() {
		return this.firestore.doc("landpages/" + "LzmwlMqI4fSoNtgcUrfm").snapshotChanges();
	}

	createUsuario(contato) {
		this.saveCar(contato).subscribe(
			(res) => {
				console.log({ res });
			},
			(err) => {
				console.log({ err });
			}
		);
		return this.firestore.collection("alex").add(contato);
	}
	saveCar(car: any): Observable<any> {
		return this.httpClient.post<any>(this.url, JSON.stringify(car), this.httpOptions);
	}

	handleError(error: HttpErrorResponse) {
		let errorMessage = "";
		if (error.error instanceof ErrorEvent) {
			// Erro ocorreu no lado do client
			errorMessage = error.error.message;
		} else {
			// Erro ocorreu no lado do servidor
			errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
		}
		console.log({ errorMessage });
		return throwError(errorMessage);
	}
}
