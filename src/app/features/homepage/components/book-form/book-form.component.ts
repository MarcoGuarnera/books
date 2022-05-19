import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
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
  /**
   * input with the observable from the store
   */
  @Input() bookActive$: Observable<Book>;
  @Input() authors$: Observable<Author[]>;

  /**
   * form group for the th inputs fields
   */
  bookForm = new FormGroup({
    titleFormControl: new FormControl('', [Validators.required]),
    ISBNFormControl: new FormControl('', [Validators.required]),
    authorFormControl: new FormControl('', [Validators.required]),
    publisherFormControl: new FormControl(''),
    editionFormControl: new FormControl(''),
    publishingDateFormControl: new FormControl(''),
    chapterDateFormControl: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>) {}

  /**
   * add book or update an existing one
   */
  addBookHandler() {
    const newBook: Book = {
      id: Date.now(),
      chapters: [
        {
          title: this.bookForm.controls['chapterDateFormControl'].value || ' / / ',
        },
      ],
      edition: this.bookForm.controls['editionFormControl'].value || ' / / ',
      publisher:
        this.bookForm.controls['publisherFormControl'].value || ' / / ',
      publishingDate:
        this.bookForm.controls['publishingDateFormControl'].value || ' / / ',
      title: this.bookForm.controls['titleFormControl'].value,
      author: this.bookForm.controls['authorFormControl'].value,
      ISBN: this.bookForm.controls['ISBNFormControl'].value,
    };
    this.store.dispatch(AddInBooksList({ book: newBook }));
  }

  /**
   * reset the active book and reset the form
   * @param formDirective to reset the form group
   */
  resetHandler(formDirective: FormGroupDirective) {
    this.store.dispatch(resetActiveBook());
    formDirective.resetForm();
    this.bookForm.reset();
  }
}
