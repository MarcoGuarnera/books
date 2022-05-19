import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/shared/models/book';
import {
  AddInBooksList,
  loadBooksFailed,
  loadBooksSuccess,
  removeFromBooksList,
  resetActiveBook,
  setActiveBook,
} from '../actions/book.actions';

export interface BooksState {
  books: Book[];
  active: Book;
  error: boolean;
}

export const initialState: BooksState = {
  books: [],
  active: {} as Book,
  error: false,
};

export const booksReducer = createReducer(
  initialState,
  on(AddInBooksList, (state, action) => {
    if (state.active.id) {
      return {
        error: false,
        active: { ...state.active, ...action.book },
        books: state.books.map((book) => {
          if (book.id === state.active.id) {
            return { ...book, ...action.book };
          }
          return book;
        }),
      };
    } else {
      return {
        error: false,
        active: {} as Book,
        books: [...state.books, { ...action.book, id: Date.now() }],
      };
    }
  }),

  on(removeFromBooksList, (state, action) => {
    return {
      ...state,
      books: state.books.filter((item) => item.id !== action.id),
    };
  }),

  on(setActiveBook, (state, action) => ({
    ...state,
    active: { ...action.book },
  })),

  on(loadBooksSuccess, (state, action) => ({
    ...state,
    books: action.books,
    error: false,
  })),
  on(loadBooksFailed, (state) => ({ ...state, error: true })),
  on(resetActiveBook, (state) => {
    return {
      ...state,
      active: {} as Book,
    };
  })
);
