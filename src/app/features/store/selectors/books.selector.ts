import { AppState } from 'src/app/app.module';

export const selectAllBooks = (state: AppState) => state.books.books;
export const selectActiveBook = (state: AppState) => state.books.active;
export const selectBookError = (state: AppState) => state.books.error;


