import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  products: any = [];

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.loadLista();
  }

  loadLista() {
    this.movieService.getMovieList().subscribe(
      {
        next: response => {
          console.log(response);
          this.products = response;

        },
        error: response => {
          console.error(response.error());
        }
      }
    );
  }

}
