package org.premo.pizza.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

/**
 * GENERATES ORDERS TABLE FOR YOU
 * An order contains the customer and employee objects (foreign key columns), as well as the date and any discounts which will apply
 * 
 * @author dmiceli
 *
 */
@Entity
@Table(name = "orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="discount")
	private BigDecimal discount;
	
	@Temporal(TemporalType.DATE)
	private java.util.Date datePlaced;
	
	@JoinColumn(name = "employee")
	private Employee employee;

	@JoinColumn(name = "customer")
	private Customer customer;

  public Orders() {}
//AUTO GENERATE CONSTRUCTOR, GETTERS, && SETTERS
	public Orders(BigDecimal discount, Date datePlaced, Employee employee, Customer customer) {
		this.discount = discount;
		this.datePlaced = datePlaced;
		this.employee = employee;
		this.customer = customer;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public java.util.Date getDatePlaced() {
		return datePlaced;
	}

	public void setDatePlaced(java.util.Date datePlaced) {
		this.datePlaced = datePlaced;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}
