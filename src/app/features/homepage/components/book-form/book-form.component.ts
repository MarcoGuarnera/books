import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
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
export class BookFormComponent implements OnInit {
  /**
   * input with the observable from the store
   */
  @Input() bookActive$: Observable<Book>;
  @Input() authors$: Observable<Author[]>;

  form: FormGroup;
  // fb: FormBuilder;

  get chapterFormArray(): FormArray {
    const chapterFormArray = this.form.get('formChapters') as FormArray;
    return chapterFormArray ? chapterFormArray : null;
  }

  /**
   * form group for the th inputs fields
   */

  // bookForm = new FormGroup({
  //   titleFormControl: new FormControl('', [Validators.required]),
  //   ISBNFormControl: new FormControl('', [Validators.required]),
  //   authorFormControl: new FormControl('', [Validators.required]),
  //   publisherFormControl: new FormControl(''),
  //   editionFormControl: new FormControl(''),
  //   publishingDateFormControl: new FormControl(''),
  //   chapterDateFormControl: new FormControl('', [Validators.required]),
  //   chapters: this.bookForm.array([this.createChapterFormGroup()]),
  // });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      titleFormControl: new FormControl('', [Validators.required]),
      ISBNFormControl: new FormControl('', [Validators.required]),
      authorFormControl: new FormControl('', [Validators.required]),
      publisherFormControl: new FormControl(''),
      editionFormControl: new FormControl(''),
      publishingDateFormControl: new FormControl(''),
      chapterDateFormControl: new FormControl('', [Validators.required]),
      formChapters: this.fb.array([this.createChapterFormGroup]),
    });
  }

  /**
   * add book or update an existing one
   */
  addBookHandler() {
    console.log(this.fb.group);
    const newBook: Book = {
      id: Date.now(),
      chapters: [
        {
          title: this.form.get('chapterDateFormControl').value || ' / / ',
        },
      ],
      edition: this.form.get('editionFormControl').value || ' / / ',
      publisher: this.form.get('publisherFormControl').value || ' / / ',
      publishingDate:
        this.form.get('publishingDateFormControl').value || ' / / ',
      title: this.form.get('titleFormControl').value,
      author: this.form.get('authorFormControl').value,
      ISBN: this.form.get('ISBNFormControl').value,
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
    this.form.reset();
  }

  addChapter() {
    this.chapterFormArray.push(this.createChapterFormGroup());
  }

  private createChapterFormGroup(): FormGroup {
    return this.fb.group({});
  }
}
