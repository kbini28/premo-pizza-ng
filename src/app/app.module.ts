import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './customer/components/add-customer/add-customer.component';
import { CustomerListComponent } from './customer/components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/components/customer-details/customer-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddOrderComponent } from './orders/components/add-order/add-order.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';
import { AddEmployeeComponent } from './employee/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    HomeComponent,
    ProductListComponent,
    AddOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
