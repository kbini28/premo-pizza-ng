package org.premo.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.premo.pizza.model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long> {

}
