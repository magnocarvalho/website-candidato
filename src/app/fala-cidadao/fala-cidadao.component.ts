import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { ModalCidadaoComponent } from "../modal-cidadao/modal-cidadao.component";

@Component({
	selector: "app-fala-cidadao",
	templateUrl: "./fala-cidadao.component.html",
	styleUrls: ["./fala-cidadao.component.scss"],
})
export class FalaCidadaoComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	openDialog(tipo) {
		const dialogRef = this.dialog.open(ModalCidadaoComponent, { data: { tipo: tipo } });

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
