import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  currentCustomer = null;
  message = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getCustomer(id): void {
    this.customerService.get(id).subscribe(data => {
      this.currentCustomer = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  // skipped updatePublished method (don't need)

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.id, this.currentCustomer)
      .subscribe(response => {
        console.log(response);
        this.message = 'Customer successfully updated!';
      },
      error => {
        console.log(error);
      });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/customers']);
    },
    error => {
      console.log(error);
    });
  }

}
