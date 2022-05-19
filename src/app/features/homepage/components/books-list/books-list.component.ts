import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.module';
import {
  removeFromBooksList,
  resetActiveBook,
  setActiveBook,
} from 'src/app/features/store/actions/book.actions';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  // Input
  @Input() books$: Observable<Book[]>;
  @Input() bookActive$: Observable<Book>;

  constructor(private store: Store<AppState>) {}

  setActiveBookHandler(book: Book) {
    this.store.dispatch(setActiveBook({ book }));
  }

  deleteBookHandler(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(removeFromBooksList({ id }));
    this.store.dispatch(resetActiveBook());
  }
}
