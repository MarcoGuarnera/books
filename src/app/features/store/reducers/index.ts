import { AppState } from "src/app/app.module";
import { ActionReducerMap} from '@ngrx/store';
import { booksReducer } from "./books.reducer";
import { authorsReducer } from "./authors.reducer";


export const reducers: ActionReducerMap<AppState>= {
  books: booksReducer,
  authors: authorsReducer
}
