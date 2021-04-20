import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customer/components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer/components/customer-details/customer-details.component';
import { CustomerListComponent } from './customer/components/customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './orders/components/add-order/add-order.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // is this how you do that for home component?
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'menu', component: ProductListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'add-order', component: AddOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
