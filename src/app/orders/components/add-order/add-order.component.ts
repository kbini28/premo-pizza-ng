import { Component, OnInit } from '@angular/core';
// import { combineLatest, Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { Employee } from 'src/app/models/employee.model';
// import { Orders } from 'src/app/models/orders.model';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
// calls the orderservice.create() method
// create object variables for employee and customer components

  employees: Employee[] = [];
  customers: Customer[] = [];

  order = {
    // should i add order and orderDetails models together?
    customer: {
      customerId: '',
      name: '',
      phone: '',
      address: '',
      zip: null
    },
    employee: {
      employeeId: '',
      name: '',
      status: ''
    },    
    dateplaced: '', // should this be dateplaced: Date?
    discount: '',
    quantity: '',
    product: ''
  }
  submitted = false;

  constructor(private ordersService: OrdersService,
              private customerService: CustomerService,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getCustomerList();
    this.getEmployeeList();
  }

  // get all customers to add to customer array
  getCustomerList(): void {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
      console.log("customers: ", data);
    },
    error => {
      console.log(error);
    });
  }

  // get all employees to add to the employee array
  getEmployeeList(): void {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
      console.log("employees: ", data);
    },
    error => {
      console.log(error);
    });
  }

  // save
  saveOrder(): void {
    // // set the data object for a new order
    const data = {
      customer: this.customers[this.order.customer.customerId],
      employee: this.employees[this.order.employee.employeeId],
      dateplaced: this.order.dateplaced,
      // discount: this.order.discount,
      // quantity: this.order.quantity,
      // product: this.order.product
    };

    console.log("data from save: ", data);
    
    // create and subscribe to the action
    this.ordersService.create(data).subscribe(response => {
      console.log("create data: ", data);
      console.log("create response: ", response);
      this.submitted = true;
    },
    // handle errors
    error => {
      console.log(error);
    });
  } //end saveOrder()

  // this.customerService.findById(data.custid).subscribe(response => {
  //   this.order.customer.customerId = data.custid;
  //   this.order.customer = this.customerService.findById(data.custid)
  //   console.log(data.custid, 'this is the custid from the customer object');
  //   console.log(response);
  // })
  // this.employeeService.findById(data).subscribe(response => {
  //   this.order.employee.empid = data.empid;
  //   console.log(data.empid, 'this is the empid from the employee object')
  //   console.log(response);
  // })

  // reset for a new order
  newOrder(): void {
    this.submitted = false;
    this.order = {
      customer: {
        customerId: '',
        name: '',
        phone: '',
        address: '',
        zip: ''
      },
      employee: {
        employeeId: '',
        name: '',
        status: ''
      },
      dateplaced: '',
      discount: '',
      quantity: '',
      product: '',
    }
  } // end newOrder()
}
