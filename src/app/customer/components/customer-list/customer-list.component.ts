import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  phone = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    // loads the getAll() method on init
    this.retrieveCustomers();
  }

  // get all customers (loads on initialization)
  retrieveCustomers(): void {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  // when list is updated?
  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  // sets the pointer to the current customer?
  setActiveCustomer(customer, index) {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  // skipped the removeAllCustomers() method (there is no deleteAll in customer.service.ts)

  // findByPhone() method
  searchPhone(): void {
    this.customerService.findByPhone(this.phone).subscribe(data => {
      this.customers = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }
}
