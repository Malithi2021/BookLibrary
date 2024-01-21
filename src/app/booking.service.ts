import { Injectable, importProvidersFrom } from '@angular/core';
import { BookItem } from './book-item';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  readonly baseUrl = 'https://images.pexels.com/photos';

  BookItemList: BookItem[] =[
    {
      id: 1,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/2608179/pexels-photo-2608179.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 2,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/4348191/pexels-photo-4348191.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 3,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 4,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/2187601/pexels-photo-2187601.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 5,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/734968/pexels-photo-734968.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 6,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 7,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },
    {
      id: 8,
      name: 'A Tale of Two Cities',
      price: 200,
      author:'Charles Dickens',
      photo: `${this.baseUrl}/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=600`,
      availableUnits: 99,
      online: false,
    },

  ]

  getAllBookItems(): BookItem[] {
    return this.BookItemList;
  }

  getBookItemById(id: number): BookItem | undefined {
    return this.BookItemList.find(BookItem => BookItem.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Book order application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
