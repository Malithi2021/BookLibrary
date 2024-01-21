import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: BookdetailsComponent,
      title: 'Book details'
    }
  ];

  export default routeConfig;
