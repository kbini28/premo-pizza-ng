package org.premo.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.premo.pizza.model.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

}
