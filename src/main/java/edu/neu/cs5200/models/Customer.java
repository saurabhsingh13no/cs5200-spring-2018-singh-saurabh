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

    @ManyToMany(mappedBy="customersOfPortfolioManager", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<PortfolioManager> MangerForCustomers;

    public List<PortfolioManager> getMangerForCustomers() {
        return MangerForCustomers;
    }

    public void setMangerForCustomers(List<PortfolioManager> mangerForCustomers) {
        MangerForCustomers = mangerForCustomers;
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

    public void setCreated(Date created) {
        this.created = created;
    }

}
