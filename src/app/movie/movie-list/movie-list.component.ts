import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  products: any = [];
  displayForm: boolean = false;
  actionType: string = '';
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

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
            break;
        }
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
            break;
        }
      }
    });
  }

}
