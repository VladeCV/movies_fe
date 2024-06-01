import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieFormComponent} from "./movie-form/movie-form.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {PanelModule} from "primeng/panel";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
  declarations: [
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    PanelModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class MovieModule {
}
