import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  formMovie: FormGroup = new FormGroup({});
  formValidation: boolean = false;
  categoryList: any;

  constructor(
    private FormBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.iniForm();
    this.resetForm();
    this.categoryList = [
      {description: 'Action'},
      {description: 'Science Fiction'},
      {description: 'Drama'},
      {description: 'Thriller'},
      {description: 'Horror'},
      {description: 'Comedy'}
    ];
  }

  iniForm(): void {
    this.formMovie = this.FormBuilder.group({
      title: new FormControl({value: '', disabled: false}, [Validators.required, this.titleValidator]),
      category: new FormControl({value: '', disabled: false}, [Validators.required]),
      releaseYear: new FormControl({value: '', disabled: false}, [Validators.required, this.yearValidator]),
    });
    this.formValidation = false;
  }

  resetForm(): void {
    this.formMovie.reset();
    this.formValidation = false;
  }

  getValuesForm(): any {
    return this.formMovie.value;
  }

  validForm1(): boolean {
    if (this.formMovie.valid) {
      return true;
    }
    this.formValidation = true;
    return false;
  }

  yearValidator(control: AbstractControl): ValidationErrors | null {
    const year = control.value;
    if (year < 1888 || year > 2024) {
      return {yearRange: true};
    }
    return null;
  }

  titleValidator(control: AbstractControl): ValidationErrors | null {
    const title = control.value;
    const titleRegex = /^[a-zA-Z0-9 ]+$/;
    if (!titleRegex.test(title)) {
      return {invalidTitle: true};
    }
    return null;
  }
}
