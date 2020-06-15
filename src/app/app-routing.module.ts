import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FalaCidadaoComponent } from "./fala-cidadao/fala-cidadao.component";
import { BiografiaComponent } from "./biografia/biografia.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "fala-cidadao", component: FalaCidadaoComponent },
	{ path: "biografia", component: BiografiaComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
