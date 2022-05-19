import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/shared/models/book';

export const loadBooks = createAction('[Books] load');

export const loadBooksSuccess = createAction(
  '[Books] load success',
  props<{ books: Book[] }>()
);

export const loadBooksFailed = createAction('[Books] load failed');

export const AddInBooksList = createAction(
  '[Books] add',
  props<{ book: Book }>()
);

export const removeFromBooksList = createAction(
  '[Books] remove',
  props<{ id: number }>()
);

export const setActiveBook = createAction(
  '[Books] set active',
  props<{ book: Book }>()
);

export const editBooks = createAction(
  '[Books] edit success',
  props<{ book: Book }>()
);

export const resetActiveBook = createAction('[Books] reset active');
