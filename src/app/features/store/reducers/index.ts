import { AppState } from "src/app/app.module";
import { ActionReducerMap} from '@ngrx/store';
import { booksReducer } from "./books.reducer";


export const reducers: ActionReducerMap<AppState>= {
  books: booksReducer
}
