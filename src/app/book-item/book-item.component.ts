import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from '../book-item';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="BookItem.photo" alt="Exterior photo of {{BookItem.name}}">
    <h2 class="listing-heading">{{ BookItem.name }}</h2>
    <p class="listing-location">{{ BookItem.author}}, $ {{BookItem.price}}</p>
    <p class="listing-location">{{BookItem.availableUnits}} available</p>
  </section>
  `,
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() BookItem!: BookItem;
}
