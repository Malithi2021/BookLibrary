import { Component, Input, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from '../book-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="BookItem.photo" alt="Exterior photo of {{BookItem.name}}">
    <h2 class="listing-heading">{{ BookItem.name }}</h2>
    <p class="listing-location">{{ BookItem.author}}, $ {{BookItem.price}}</p>
    <p class="listing-location">{{BookItem.availableUnits}} available</p>
    <a [routerLink]="['/details', BookItem.id]">Learn More</a>
  </section>
  `,
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() BookItem!: BookItem;
}
