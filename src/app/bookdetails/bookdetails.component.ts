import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { BookItem } from '../book-item';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [],
  template: `
  <article>
    <img class="listing-photo" [src]="BookItem?.photo"
      alt="Exterior photo of {{BookItem?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{BookItem?.name}}</h2>
      <p class="listing-location">{{BookItem?.author}}, {{BookItem?.price}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this Book</h2>
      <ul>
        <li>Units available: {{BookItem?.availableUnits}}</li>
        <li>Is this book available online: {{BookItem?.online}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  BookingService = inject(BookingService);
  BookItem: BookItem | undefined;

  constructor() {
    const bookId = Number(this.route.snapshot.params['id']);
    this.BookItem = this.BookingService.getBookItemById(bookId);
  }
}
