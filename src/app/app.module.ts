import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FalaCidadaoComponent } from './fala-cidadao/fala-cidadao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from "ngx-mask";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from "@angular/fire/database";
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, FalaCidadaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoadingBarModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
