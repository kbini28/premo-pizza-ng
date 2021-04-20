import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

    // when list is updated?
    refreshList(): void {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    }
  
    // sets the pointer to the current customer?
    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = index;
    }

}
