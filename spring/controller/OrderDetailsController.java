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
import org.springframework.dao.DataAccessException;
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

import org.premo.pizza.model.OrderDetails;
import  org.premo.pizza.model.Orders;
import org.premo.pizza.model.Product;
import org.premo.pizza.repository.OrderDetailsRepository;
import org.premo.pizza.exception.Handler;

/**
 * OrderDetails Controller Class
 * We need all CRUD on orderdetails
 * acts as the linking table between order & products
 * @author dmiceli
 *
 */

@CrossOrigin(origins="http://localhost:8080")
@RestController
@RequestMapping("/api")
public class OrderDetailsController {

	/**
	 * Hello, Postman </3
	   @RequestMapping("/products")
	   public String printHello(ModelMap model) {
	      model.addAttribute("message", "Hello, Spring MVC!");
	      return "hello";
	   }
	**/
	@Autowired
	OrderDetailsRepository detailsRepo;
	
	@PostMapping("/details")
	public ResponseEntity<OrderDetails> createOrderDetails(@RequestBody OrderDetails detail) {
		try {
			System.out.println(detail);
			OrderDetails _detail = detailsRepo.save(new OrderDetails(detail.getId(), detail.getQuant(), detail.getProduct(), detail.getOrder()));
			return new ResponseEntity<>(_detail, HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR); 
		}
	}
	/**
	 * IN PROGRESS
	 * @param orderid
	 * @return
	 */
	@GetMapping("/details/orderid")
	public ResponseEntity<List<OrderDetails>> getAllOrderDetails(@RequestParam(required = false) String orderid) {

		try {
			List<OrderDetails> details = new ArrayList<OrderDetails>();
			//list all orderdetails
			if (orderid == null)
				detailsRepo.findAll().forEach(details::add);
			else
			//list the orderdetails with order number 'orderid'
				//detailsRepo.findByOrdersContaining(orderid).forEach(details::add);

			if (details.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(details, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} 
	}
}
