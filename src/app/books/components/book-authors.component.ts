import { Component, Input } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'bc-book-authors',
  template: `
    <h5 mat-subheader>Written By:</h5>
    <span *ngIf="authors">{{ authors | bcAddCommas }}</span>
  `,
  styles: [
    `
      h5 {
        margin-bottom: 5px;
      }
    `,
  ],
})
export class BookAuthorsComponent {
  @Input() book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
