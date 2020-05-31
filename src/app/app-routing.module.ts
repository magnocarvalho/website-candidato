import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FalaCidadaoComponent } from "./fala-cidadao/fala-cidadao.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "fala-cidadao", component: FalaCidadaoComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
