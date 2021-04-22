import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  currentCustomer: Customer = {
    customerId: null,
    name: '',
    phone: '',
    address: '',
    zip: ''
  };
  message = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
    // USE FOR REFERENCE, paramMap
  }

  getCustomer(id: string): void {
    /** CHECK THIS. MAY NOT BE STRING */
    this.customerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     name: this.currentCustomer.name,
  //     phone: this.currentCustomer.phone,
  //   };

  //   this.customerService.update(this.currentCustomer.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentCustomer.published = status;
  //         console.log(response);
  //         this.message = response.message;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.customerId, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.customerId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }
}