import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
	selector: "app-contato",
	templateUrl: "./contato.component.html",
	styleUrls: ["./contato.component.scss"],
})
export class ContatoComponent implements OnInit {
	constructor(private api: ApiService, private loadingBar: LoadingBarService) {}
	ngOnInit(): void {}
}
