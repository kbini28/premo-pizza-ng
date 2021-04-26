import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  // productList: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Soda',
  //     description: '2 liter bottle',
  //     price: '3.25'
  //   },
  //   {
  //     id: 2,
  //     name: 'Breadsticks',
  //     description: '8 per pack',
  //     price: '2.50'
  //   },
  //   {
  //     id: 3,
  //     name: 'Pizza - small Pepperoni',
  //     description: '8 inch',
  //     price: '7.35'
  //   }
  // ]
  
  constructor(private http: HttpClient) { }

  // returns all products
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
