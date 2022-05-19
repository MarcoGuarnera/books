import { createReducer, on } from '@ngrx/store';
import { Author } from 'src/app/shared/models/author';
import {
  loadAuthorsFailed,
  loadAuthorsSuccess,
} from '../actions/authors.actions';

export interface AuthorsState {
  authors: Author[];
  error: boolean;
}

export const initialState: AuthorsState = {
  authors: [],
  error: false,
};

export const authorsReducer = createReducer(
  initialState,

  on(loadAuthorsFailed, (state) => ({ ...state, error: true })),
  on(loadAuthorsSuccess, (state, action) => ({
    ...state,
    authors: action.authors,
    error: false,
  }))
);
