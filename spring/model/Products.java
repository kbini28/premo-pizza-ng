package org.premo.pizza.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * GENERATEs YOUR PRODUCTS TABLE
 * Premo Pizza Product Menu
 * Soda, Breadsticks, s/m/l pepperoni pizza, s/m/l house special pizza
 * 
 * Each product has a name, description, and price
 * In the future, the menu might have updated prices
 * @author dmiceli
 *
 */
@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "price")
	private BigDecimal price;
	
//GENERATED CONSTRUCTOR, GETTERS, && SETTERS
	public Product() {}
	public Product(String name, String description, BigDecimal price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", price=" + price + "]";
	}
	
}
