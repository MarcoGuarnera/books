import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './features/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './features/store/reducers';
import { BooksState } from './features/store/reducers/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BooksEffects } from './features/store/effects/books.effects';
import { AuthorsState } from './features/store/reducers/authors.reducer';
import { AuthorsEffects } from './features/store/effects/authors.effects';


export interface AppState {
  books: BooksState;
  authors: AuthorsState;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([BooksEffects, AuthorsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
