import { Component } from "@angular/core";
import { ApiService } from "./services/api.service";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "landpage";
}
