import { Author } from "./author";
import { Chapter } from "./chapter";

export interface Book {
  id: number;
  title: string;
  author: Author;
  publisher?: string;
  edition?: string;
  ISBN: string;
  publishingDate?: string;
  chapters?: Chapter[];
}
