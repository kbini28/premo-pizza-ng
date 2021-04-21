import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
// calls the orderservice.create() method

  order = {
    // should i add order and orderDetails models together?
    custid: '',
    empid: '',
    dateplaced: '', // should this be dateplaced: Date?
    discount: '',
    quantity: '',
    product: ''
  }
  submitted = false;

  constructor(private ordersServce: OrdersService) { }

  ngOnInit(): void {
  }

  // save
  saveOrder(): void {
    // set the data object for a new order
    const data = {
      custid: this.order.custid,
      empid: this.order.empid,
      dateplaced: this.order.dateplaced,
      discount: this.order.discount,
      quantity: this.order.quantity,
      product: this.order.product
    };

    // create and subscribe to the action
    this.ordersServce.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    // handle errors
    error => {
      console.log(error);
    });
  } //end saveOrder()

  // reset for a new order
  newOrder(): void {
    this.submitted = false;
    this.order = {
      custid: '',
      empid: '',
      dateplaced: '',
      discount: '',
      quantity: '',
      product: '',
    }
  } // end newOrder()
}
