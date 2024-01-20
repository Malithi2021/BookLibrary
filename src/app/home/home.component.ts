import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BookItemComponent,
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by author">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-book-item></app-book-item>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
