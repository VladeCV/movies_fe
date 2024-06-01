import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  products: any = [];
  displayForm: boolean = false;
  displayRating: boolean = false;
  valueRating: number = 0;
  actionType: string = '';
  movieValue: any = {};
  @ViewChild('formMovie') formMovie!: MovieFormComponent;

  constructor(
    private movieService: MovieService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  showForm() {
    this.displayForm = true;
    this.actionType = 'add';
    this.formMovie.resetForm();
  }

  save(event: any, type: any) {
    const dataForm = this.formMovie.getValuesForm();
    const data = {
      title: dataForm.title,
      category: dataForm.category.description,
      releaseYear: dataForm.releaseYear
    }
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (type == 'add') {
          this.movieService.saveMovieAPI(data).subscribe(
            {
              next: response => {
                console.log(response);
              },
              error: response => {
                this.messageService.add({
                  life: 2000,
                  severity: 'error',
                  summary: 'Movie',
                  detail: response.message
                });
              }
            });
        }

      }
    });

  }


  editProduct(product: any) {
    this.displayRating = true;
    this.movieValue = product
  }

  saveRating($event: MouseEvent, add: string) {
    console.log(this.movieValue);
    console.log('rating', this.valueRating);
    const data = {
      id: this.movieValue.id,
      value: this.valueRating
    }
    console.log(data);
    this.displayRating = false;
    this.valueRating = 0;
  }
}
