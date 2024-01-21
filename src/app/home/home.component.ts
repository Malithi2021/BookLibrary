import { CommonModule } from '@angular/common';
import { BookItem } from '../book-item';
import { BookItemComponent } from '../book-item/book-item.component';
import { Component, inject } from '@angular/core';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BookItemComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by author" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
  <app-book-item  *ngFor="let BookItem of filteredBookList"
  [BookItem]="BookItem"></app-book-item>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  BookItemList: BookItem[] = [];
  BookingService: BookingService = inject(BookingService);
  filteredBookList: BookItem[] = [];



  constructor() {
    this.BookingService.getAllBookItems().then((BookItemList: BookItem[]) => {
      this.BookItemList = BookItemList;
      this.filteredBookList = BookItemList;
    });
  }


  filterResults(text: string) {
    if (!text) {
      this.filteredBookList = this.BookItemList;
      return;
    }

    this.filteredBookList = this.BookItemList.filter(
      BookItem => BookItem?.author.toLowerCase().includes(text.toLowerCase())
    );
  }


}
