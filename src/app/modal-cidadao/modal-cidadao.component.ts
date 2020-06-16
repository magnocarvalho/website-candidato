import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

export interface DialogData {
	tipo: number;
}

@Component({
	selector: "app-modal-cidadao",
	templateUrl: "./modal-cidadao.component.html",
	styleUrls: ["./modal-cidadao.component.scss"],
})
export class ModalCidadaoComponent implements OnInit {
	@Input() tipo: Number = 5;
	isValid = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
	profileForm: FormGroup = new FormGroup({
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
	constructor(
		public dialogRef: MatDialogRef<ModalCidadaoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData,
		private api: ApiService,
		private loadingBar: LoadingBarService
	) {}
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
	onNoClick(): void {
		this.dialogRef.close();
	}
}
