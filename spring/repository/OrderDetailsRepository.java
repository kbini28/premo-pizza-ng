package org.premo.pizza.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.premo.pizza.model.OrderDetails;
import org.premo.pizza.model.Product;
import org.premo.pizza.model.Orders;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
  List<OrderDetails> findByOrders(Orders order);
	List<OrderDetails> findByOrdersContaining(long orderid);
  void deleteByOrders(Orders order);
}
