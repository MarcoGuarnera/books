import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { Author } from 'src/app/shared/models/author';
import { Book } from 'src/app/shared/models/book';
import { loadAuthors } from '../store/actions/authors.actions';
import { loadBooks } from '../store/actions/book.actions';
import { selectAllAuthors } from '../store/selectors/authors.selector';
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
  // Selectors
  books$: Observable<Book[]> = this.store.pipe(select(selectAllBooks, 0));
  bookActive$: Observable<Book> = this.store.pipe(select(selectActiveBook));
  bookError$: Observable<boolean> = this.store.pipe(select(selectBookError));
  authors$: Observable<Author[]> = this.store.pipe(select(selectAllAuthors, 0));

  constructor(private store: Store<AppState>) {
    // Load data
    this.store.dispatch(loadBooks());
    this.store.dispatch(loadAuthors());
  }
}
