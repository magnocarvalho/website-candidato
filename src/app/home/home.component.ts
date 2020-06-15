import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	constructor(public api: ApiService, private loadingBar: LoadingBarService) {}

	ngOnInit(): void {}
}
