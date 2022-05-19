import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.module';
import {
  removeFromBooksList,
  resetActiveBook,
  setActiveBook,
} from 'src/app/features/store/actions/book.actions';
import { Book } from 'src/app/shared/models/book';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogBookDetailsComponent } from '../dialog-book-details/dialog-book-details.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  /**
   * input with the observable from the store
   */
  @Input() books$: Observable<Book[]>;
  @Input() bookActive$: Observable<Book>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  // set a book active and enable the update in the form
  setActiveBookHandler(book: Book) {
    this.store.dispatch(setActiveBook({ book }));
  }

  // delete book from the list
  deleteBookHandler(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.store.dispatch(removeFromBooksList({ id }));
    this.store.dispatch(resetActiveBook());
  }

  // open the dialog with the book details
  openDialog(book: Book) {
    this.store.dispatch(setActiveBook({ book }));
    this.dialog.open(DialogBookDetailsComponent, {
      data: {
        book,
      },
    });
  }
}
