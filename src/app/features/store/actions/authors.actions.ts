import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/shared/models/author";

export const loadAuthors = createAction('[Authors] load');

export const loadAuthorsSuccess = createAction(
  '[Authors] load success',
  props<{ authors: Author[] }>()
);

export const loadAuthorsFailed = createAction('[Authors] load failed');
