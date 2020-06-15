import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-fala-cidadao",
	templateUrl: "./fala-cidadao.component.html",
	styleUrls: ["./fala-cidadao.component.scss"],
})
export class FalaCidadaoComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	openDialog() {
		const dialogRef = this.dialog.open(DialogContentExampleDialog, { data: { tipo: 6 } });

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
@Component({
	selector: "dialog-content-example-dialog",
	templateUrl: "dialog-content-example-dialog.html",
})
export class DialogOverviewExampleDialog  {
  tipo: Number = 5;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
