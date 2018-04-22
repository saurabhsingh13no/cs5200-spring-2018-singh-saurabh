package edu.neu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@DiscriminatorValue("manager")
public class PortfolioManager extends Person implements Serializable {

    private Date created;

    @OneToMany(mappedBy="portfolioManager", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Portfolio> portfolios;

    @ManyToMany
    @JoinTable(name="hire")
    @JsonIgnore
    private List<Customer> customersOfPortfolioManager;

    public List<Customer> getCustomersOfPortfolioManager() {
        return customersOfPortfolioManager;
    }

    public void setCustomersOfPortfolioManager(List<Customer> customersOfPortfolioManager) {
        this.customersOfPortfolioManager = customersOfPortfolioManager;
        for (Customer customer : customersOfPortfolioManager) {
            customer.getMangerForCustomers().add(this);
        }
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    private static final long serialVersionUID = 1L;

    public List<Portfolio> getPortfolios() {
        return portfolios;
    }

    public void setPortfolios(List<Portfolio> portfolios) {
        this.portfolios = portfolios;
    }

    public PortfolioManager() {
    }

    public PortfolioManager(List<Portfolio> portfolios) {
        this.portfolios = portfolios;
    }

    public void assignCustomer(Customer customer) {
        this.customersOfPortfolioManager.add(customer);
        if (customer.getMangerForCustomers().contains(this)) {
            customer.getMangerForCustomers().add(this);
        }
    }
}
