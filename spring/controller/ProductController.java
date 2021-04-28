package org.premo.pizza.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.premo.pizza.model.Product;
import org.premo.pizza.repository.ProductRepository;
import org.premo.pizza.exception.Handler;

/**
 * Product Controller Class
 * We need to list products and have the ability to update the price
 * @author dmiceli
 *
 */

@CrossOrigin(origins="http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ProductController {

	/**
   * Hello, Postman ( ͡° ͜ʖ ͡°)
	   @RequestMapping("/products")
	   public String printHello(ModelMap model) {
	      model.addAttribute("message", "Hello, Spring MVC!");
	      return "hello";
	   }
	**/
	@Autowired
	ProductRepository prodRepo;
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProduct(@RequestParam(required = false) String name) {
		try {
			List<Product> products = new ArrayList<Product>();
			prodRepo.findAll().forEach(products::add);
			if (products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
/**	
 **** Implement update if time permitting ***
 * @PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product){
		Optional<Product> productData = prodRepo.findById(id);		
		if (productData.isPresent()) {
			Product _product = productData.get();
			_product.setName(product.getName());
			_product.setDescription(product.getDescription());
			_product.setPrice(product.getPrice());
			return new ResponseEntity<>(prodRepo.save(_product), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
**/
}
