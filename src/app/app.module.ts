import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FalaCidadaoComponent } from "./fala-cidadao/fala-cidadao.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { CommonModule } from "@angular/common";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { HttpClientModule } from "@angular/common/http";
import { BiografiaComponent } from "./biografia/biografia.component";
import { ContatoComponent } from "./contato/contato.component";
import { FormContatoComponent } from "./form-contato/form-contato.component";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { ModalCidadaoComponent } from './modal-cidadao/modal-cidadao.component';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		FalaCidadaoComponent,
		BiografiaComponent,
		ContatoComponent,
		FormContatoComponent,
		ModalCidadaoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		LoadingBarModule,
		HttpClientModule,
		AngularFireDatabaseModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
		NgbModule,
		CommonModule,
		NgxMaskModule.forRoot(),
		NgxLoadingModule.forRoot({
			animationType: ngxLoadingAnimationTypes.wanderingCubes,
			backdropBackgroundColour: "rgba(0,0,0,0.2)",
			backdropBorderRadius: "4px",
			primaryColour: "#ffffff",
			secondaryColour: "#ffffff",
			tertiaryColour: "#ffffff",
		}),
		MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgImageSliderModule
	],
	providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
	bootstrap: [AppComponent],
})
export class AppModule {}
