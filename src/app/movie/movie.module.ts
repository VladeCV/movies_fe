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
    PanelModule
  ]
})
export class MovieModule {
}
