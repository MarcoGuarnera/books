import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadBooks,
  loadBooksFailed,
  loadBooksSuccess,
} from '../actions/book.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/shared/models/book';
import { AppState } from 'src/app/app.module';
import { loadAuthors, loadAuthorsFailed, loadAuthorsSuccess } from '../actions/authors.actions';
import { Author } from 'src/app/shared/models/author';

@Injectable()
export class BooksEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() =>
        this.http.get<Book[]>('assets/books.json').pipe(
          map((result) => loadBooksSuccess({ books: result })),
          catchError(() => of(loadBooksFailed()))
        )
      )
    )
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}