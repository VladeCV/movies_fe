import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {ScrollTopModule} from "primeng/scrolltop";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ScrollTopModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
