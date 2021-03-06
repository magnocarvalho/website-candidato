import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/api.service';

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
	constructor(public api: ApiService) {}

	ngOnInit(): void {}
	public isMenuCollapsed = true;
}
