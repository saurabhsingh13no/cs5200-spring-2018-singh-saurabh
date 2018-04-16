package edu.neu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Portfolio implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne
    @JsonIgnore
    private PortfolioManager portfolioManager;

    @OneToMany(mappedBy="portfolioOwned", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Cryptocurrency> cryptos;

    private static final long serialVersionUID = 1L;

    public PortfolioManager getManager() {
        return portfolioManager;
    }

    public void setManager(PortfolioManager manager) {
        this.portfolioManager = manager;
    }

    public Portfolio() {
    }

    public Portfolio(String name, List<Cryptocurrency> cryptos) {

        this.name = name;
        this.cryptos = cryptos;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Cryptocurrency> getCryptos() {
        return cryptos;
    }

    public void setCryptos(List<Cryptocurrency> cryptos) {
        this.cryptos = cryptos;
    }


    public void set(Portfolio newPortfolio) {
        this.name = newPortfolio.name!=null ? newPortfolio.name : this.name;
        this.portfolioManager = newPortfolio.portfolioManager!=null ? newPortfolio.portfolioManager : this.portfolioManager;
        this.cryptos = newPortfolio.cryptos!=null ? newPortfolio.cryptos : this.cryptos;
    }
}
