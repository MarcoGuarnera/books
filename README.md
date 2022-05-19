# BooksApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

Small application to insert, update and delete a list of books

## Test the application

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Implementation

I chose to develop the assignment with NGRX because I already did something similar in the past but without it and I wanted to try a different approach.
There's not much to say about the implementation, after setting up the store, the actions and reducers, everything was ready to be displayed.

Also, I know that the architectural part of the project that I designed is a little bit an overkill for this small assignment. I wanted to give the feeling of a bigger project easy to scale and sustain. There's also the sharedModule, it wasn't required for the project but for the same reason as before I decided to put it, as well for the lazyLoading useless in this case.

About the design I wanted a simple thing without too many complications.
I didn't plan a dialog for the details at the beginning, but in the end I didn't like to show the details in the same page in another card.

## Challenges I couldn't resolve in given time

Implement the possibility to insert multiple chapters with their title. I planned to add a formArray and autogenerate dynamic controls for the new chapters to do so. With a small " + " icon in the form I wanted add the possibility to add multiple chapters, this also would have fixed the bug that if I edit an already existing book and I set a new chapter title the previous chapters would have been overwritten.
The implementation is simple and I already did something like this in the past but it would require a little bit more time.

Fix the bug on the Authors select, when I try to update a book the Author field doesn't update with the activeBook's author selected. To solve this I think the best way is to subscribe to the activeBook observable in the ts and manually set the value from there with myForm.setValue(....)

Implement an interceptor to show a loading spinner.
