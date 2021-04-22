import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
// where you write all the standard CRUD operations
// create the web service
// NOTE: USE ordid FOR ALL INSTANCES OF THE ORDER ID or ID

  constructor(private http: HttpClient) { }

  // returns all orders (get request)
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  // get an order by id (get request)
  get(ordid): Observable<any> {
    return this.http.get(`${baseUrl}/${ordid}`);
  }

  // create a new order (post request)
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // update an order (get id, put request)
  update(ordid, data): Observable<any> {
    return this.http.put(`${baseUrl}/${ordid}`, data);
  }

  // delete an order (get id, delete request)
  delete(ordid): Observable<any> {
    return this.http.delete(`${baseUrl}/${ordid}`);
  }

  // skip the 'delete all' method

  // MAKE SURE TO UPDATE WITH CORRECT SYNTAX, or REMOVE
  // find by employee id??
  findByEmployeeId(empid): Observable<any> {
    return this.http.get(`${baseUrl}?empid=${empid}`);
  }

  // do we need findByDate() or findByCustomerId() ??
}
