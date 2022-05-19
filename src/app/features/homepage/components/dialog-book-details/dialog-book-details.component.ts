import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-dialog-book-details',
  templateUrl: './dialog-book-details.component.html',
  styleUrls: ['./dialog-book-details.component.css'],
})
export class DialogBookDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogBookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
