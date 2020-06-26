import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
	selector: "app-form-contato",
	templateUrl: "./form-contato.component.html",
	styleUrls: ["./form-contato.component.scss"],
})
export class FormContatoComponent implements OnInit {
	profileForm: FormGroup;
	@Input() onNoClick: Function;
	@Input() tipo: Number = 5;
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
			tipo: new FormControl(this.tipo),
			dataReivindicacao: new FormControl(new Date()),
		});
	}
	ngOnInit(): void {}
	enviarContato($event) {
		this.onNoClick();

		if (this.profileForm.valid) {
			console.log(this.profileForm.value);
			this.loadingBar.start();
			this.api
				.createUsuario(this.profileForm.value)
				.then((res) => {
					this.profileForm.disable();
				})
				.finally(() => {
					this.loadingBar.complete();
				});
		} else {
			this.profileForm.markAllAsTouched();
		}
	}
}
