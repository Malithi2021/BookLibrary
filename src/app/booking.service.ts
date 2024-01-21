import { Injectable, importProvidersFrom } from '@angular/core';
import { BookItem } from './book-item';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }



  url = 'http://localhost:3000/books';

  async getAllBookItems(): Promise<BookItem[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getBookItemById(id: number): Promise<BookItem | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Book order application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
