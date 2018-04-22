package edu.neu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@DiscriminatorValue("customer")
public class Customer extends Person implements Serializable {

    private Date created;
    private double accountBalance;

    @ManyToMany(mappedBy="customersOfPortfolioManager", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<PortfolioManager> MangerForCustomers;

    public List<PortfolioManager> getMangerForCustomers() {
        return MangerForCustomers;
    }

    public void setMangerForCustomers(List<PortfolioManager> mangerForCustomers) {
        this.MangerForCustomers = mangerForCustomers;
        for (PortfolioManager portfolioManager : mangerForCustomers) {
            portfolioManager.getCustomersOfPortfolioManager().add(this);
        }
    }

    @ManyToMany(mappedBy="customerOwned", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Cryptocurrency> cryptosOwned;

//    @ManyToMany(mappedBy="customerComments", cascade=CascadeType.ALL)
//    @JsonIgnore
//    private List<Cryptocurrency> cryptosCommented;

    public Customer(List<Cryptocurrency> cryptosOwned) {
        this.cryptosOwned = cryptosOwned;
    }

    public List<Cryptocurrency> getCryptosOwned() {
        return cryptosOwned;
    }

    public void setCryptosOwned(List<Cryptocurrency> cryptosOwned) {

        this.cryptosOwned = cryptosOwned;
        for (Cryptocurrency cryptocurrency : cryptosOwned) {
            cryptocurrency.getCustomerOwned().add(this);
        }
    }

//    public List<Cryptocurrency> getCryptosCommented() {
//        return cryptosCommented;
//    }
//
//    public void setCryptosCommented(List<Cryptocurrency> cryptosCommented) {
//        this.cryptosCommented = cryptosCommented;
//    }

    private static final long serialVersionUID = 1L;

    public Customer() {
        super();
    }

    public Customer(Date created) {

        this.created = created;
    }

    public Date getCreated() {

        return created;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public void assignPortfolioManager(PortfolioManager portfolioManager) {
        this.MangerForCustomers.add(portfolioManager);
        if (!portfolioManager.getCustomersOfPortfolioManager().contains(this)) {
            portfolioManager.getCustomersOfPortfolioManager().add(this);
        }
    }

    public void assignCryptoCurrency(Cryptocurrency cryptocurrency) {
        this.getCryptosOwned().add(cryptocurrency);
        if (!cryptocurrency.getCustomerOwned().contains(this)) {
            cryptocurrency.getCustomerOwned().add(this);
        }
    }
}
