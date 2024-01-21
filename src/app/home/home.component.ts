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
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
  <app-book-item  *ngFor="let BookItem of BookItemList"
  [BookItem]="BookItem"></app-book-item>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  BookItemList: BookItem[] = [];
  BookingService: BookingService = inject(BookingService);


  constructor() {
    this.BookItemList = this.BookingService.getAllBookItems();
  }
}
