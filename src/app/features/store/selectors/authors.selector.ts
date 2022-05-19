import { AppState } from "src/app/app.module";

export const selectAllAuthors = (state: AppState) => state.authors.authors;
