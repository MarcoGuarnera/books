import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { Book } from 'src/app/shared/models/book';
import { AddInBooksList, loadBooks, removeFromBooksList, resetActiveBook, setActiveBook } from '../store/actions/book.actions';
import {
  selectActiveBook,
  selectAllBooks,
  selectBookError,
} from '../store/selectors/books.selector';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  books$: Observable<Book[]> = this.store.pipe(select(selectAllBooks, 0));
  bookActive$: Observable<Book> = this.store.pipe(select(selectActiveBook));
  bookError$: Observable<boolean> = this.store.pipe(select(selectBookError));


  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadBooks())
  }

  addBookHandler(form: NgForm) {
    this.store.dispatch(AddInBooksList({book: form.value}));
  }

  deleteBookHandler(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(removeFromBooksList({ id }));
    this.store.dispatch(resetActiveBook());
  }

  setActiveBookHandler(book: Book) {
    this.store.dispatch(setActiveBook({ book }));
  }

  resetHandler(f: NgForm) {
    this.store.dispatch(resetActiveBook());
    f.reset();
  }


}
