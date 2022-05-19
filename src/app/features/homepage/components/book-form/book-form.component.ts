import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.module';
import {
  AddInBooksList,
  resetActiveBook,
} from 'src/app/features/store/actions/book.actions';
import { Author } from 'src/app/shared/models/author';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  @Input() bookActive$: Observable<Book>;
  @Input() authors$: Observable<Author[]>;

  bookForm = new FormGroup({
    titleFormControl: new FormControl('', [Validators.required]),
    ISBNFormControl: new FormControl('', [Validators.required]),
    authorFormControl: new FormControl('', [Validators.required]),
  });

  // titleFormControl = new FormControl('', [Validators.required]);
  // ISBNFormControl = new FormControl('', [Validators.required]);

  constructor(private store: Store<AppState>) {}

  addBookHandler() {
    const newBook: Book = {
      id: Date.now(),
      title: this.bookForm.controls['titleFormControl'].value,
      author: this.bookForm.controls['authorFormControl'].value,
      ISBN:  this.bookForm.controls['ISBNFormControl'].value
    }
    console.log(newBook);

    const form = null;
    this.store.dispatch(AddInBooksList({ book: newBook }));
  }

  resetHandler() {
    this.store.dispatch(resetActiveBook());
    this.bookForm.reset();
  }


}
