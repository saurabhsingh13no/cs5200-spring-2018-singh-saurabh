package edu.neu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@DiscriminatorValue("manager")
public class PortfolioManager extends Person implements Serializable {

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
}
