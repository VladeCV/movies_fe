import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Movie',
    },
    children: [
      {
        path: 'movie-list',
        component: MovieListComponent,
      },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
