import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [
    BooksListComponent,
    BookFormComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
