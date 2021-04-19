import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer = {
    name: '',
    phone: '',
    address: '',
    zip: ''
  };
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  // save
  saveCustomer(): void {
    // set the data object for a new customer
    const data = {
      name: this.customer.name,
      phone: this.customer.phone,
      address: this.customer.address,
      zip: this.customer.zip
    };
    
    // create and subscribe to this action/response
    this.customerService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    // handle errors
    error => {
      console.log(error);
    });
  } // end saveCustomer()

  // new customer
  newCustomer(): void {
    // reset all attributes on new customer creation
    this.submitted = false;
    this.customer = {
      name: '',
      phone: '',
      address: '',
      zip: ''
    }
  } // end newCustomer()

}
