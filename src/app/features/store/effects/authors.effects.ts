import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import {
  loadAuthors,
  loadAuthorsFailed,
  loadAuthorsSuccess,
} from '../actions/authors.actions';
import { Author } from 'src/app/shared/models/author';

@Injectable()
export class AuthorsEffects {
  loadAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuthors),
      switchMap(() =>
        this.http.get<Author[]>('assets/authors.json').pipe(
          map((result) => loadAuthorsSuccess({ authors: result })),
          catchError(() => of(loadAuthorsFailed()))
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
