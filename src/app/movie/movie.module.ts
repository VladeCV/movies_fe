import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieFormComponent} from "./movie-form/movie-form.component";


@NgModule({
  declarations: [
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule {
}
