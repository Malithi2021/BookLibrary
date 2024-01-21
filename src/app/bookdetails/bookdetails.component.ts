import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { BookItem } from '../book-item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="BookItem?.photo"
      alt="Exterior photo of {{BookItem?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{BookItem?.name}}</h2>
      <p class="listing-location">{{BookItem?.author}}, {{BookItem?.price}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this book </h2>
      <ul>
        <li>Units available: {{BookItem?.availableUnits}}</li>
        <li>Is this available online: {{BookItem?.online}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Order now to reserve your book</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  BookingService = inject(BookingService);
  BookItem: BookItem | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const bookId = Number(this.route.snapshot.params['id']);
    this.BookItem = this.BookingService.getBookItemById(bookId);
  }

  submitApplication() {
    this.BookingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
