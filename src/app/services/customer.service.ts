import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toUnicode } from 'node:punycode';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // returns all customers
  getAll(): Observable<any> {
    return this.http.get(baseUrl); 
  }

  // get a customer by id
  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`); 
  }

  // create a customer
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // update a customer (by id)
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // delete a customer (by id) - do we need?
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // skipped 'delete all' method

  // todo
  // MAKE SURE TO UPDATE WITH CORRECT SYNTAX, or REMOVE
  // find by phone number - do we need
  findByPhone(phone): Observable<any> {
    return this.http.get(`${baseUrl}?phone=${phone}`);
  }
}
