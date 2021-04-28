package org.premo.pizza.model;

import java.math.BigDecimal;
import java.util.Date;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
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
	private Date dateplaced;

	@ManyToOne
	@JoinColumn(name = "employee")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "customerid")
	private Customer customer;
	

	public Orders() {
		
	}
	public Orders(BigDecimal discount, 	Date datePlaced, Employee employee, Customer customer){
		this.discount = discount;
		this.dateplaced = datePlaced;
		this.employee = employee;
		this.customer = customer;
	}
	public Orders(long id, BigDecimal discount, Date datePlaced, Employee employee, Customer customer){
		this.id = id;
		this.discount = discount;
		this.dateplaced = datePlaced;
		this.employee = employee;
		this.customer = customer;
	}

//AUTO GENERATE GETTERS, && SETTERS
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

	public Date getDateplaced() {
		return dateplaced;
	}
	public void setDateplaced(Date dateplaced)  {
		//format the date into a Date object ??
		//SimpleDateFormat formatter = new SimpleDateFormat("dd/mm/yyyy");
		//this.dateplaced = formatter.parse(dateplaced);
		this.dateplaced=dateplaced;
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
	@Override
	public String toString() {
		return "Orders [id=" + id + ", discount=" + discount + ", datePlaced=" + dateplaced + ", employee=" + employee
				+ ", customer=" + customer + "]";
	}

}
