import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
	selector: "app-contato",
	templateUrl: "./contato.component.html",
	styleUrls: ["./contato.component.scss"],
})
export class ContatoComponent implements OnInit {
	profileForm: FormGroup;
	isValid = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
	constructor(private api: ApiService, private loadingBar: LoadingBarService) {
		this.profileForm = new FormGroup({
			nome: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			email: new FormControl("", [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(50),
				Validators.email,
			]),
			telefone: new FormControl("", [
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(11),
				Validators.pattern(this.isValid),
			]),
			cidade: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
			descricao: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
			escritorio: new FormControl(10),
			tipo: new FormControl(5),
			dataReivindicacao: new FormControl(new Date()),
		});
	}
	ngOnInit(): void {}
	enviarContato($event) {
		if (this.profileForm.valid) {
			console.log(this.profileForm.value);
			this.loadingBar.start();
			this.api
				.createUsuario(this.profileForm.value)
				.then((res) => {
					this.profileForm.disable();
				})
				.finally(() => this.loadingBar.complete());
		} else {
			this.profileForm.markAllAsTouched();
		}
	}
}