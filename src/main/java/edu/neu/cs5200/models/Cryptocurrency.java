package edu.neu.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Cryptocurrency implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String name;
    private float priceInUSD;
    private int marketCap;
    private int volume24h;
    private int circulatingSupply;
    private String circulatingSupplyBase;
    private float change24h;

    @ManyToOne
    @JsonIgnore
    private Portfolio portfolioOwned;

    @ManyToMany
    @JoinTable(name="own")
    @JsonIgnore
    private List<Customer> customerOwned;

//    @ManyToMany
//    @JoinTable(name="comment")
//    @JsonIgnore
//    private List<Customer> customerComments;

    private static final long serialVersionUID = 1L;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public List<Customer> getCustomerOwned() {

        return customerOwned;
    }

    public void setCustomerOwned(List<Customer> customerOwned) {
        this.customerOwned = customerOwned;
    }

//    public List<Customer> getCustomerComments() {
//        return customerComments;
//    }
//
//    public void setCustomerComments(List<Customer> customerComments) {
//        this.customerComments = customerComments;
//    }

    public Cryptocurrency() {
    }

    public Cryptocurrency(String name, float priceInUSD) {
        this.name = name;
        this.priceInUSD = priceInUSD;
    }

    public String getName() {

        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    public float getPriceInUSD() {
        return priceInUSD;
    }

    public void setPriceInUSD(float priceInUSD) {
        this.priceInUSD = priceInUSD;
    }

    public int getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(int marketCap) {
        this.marketCap = marketCap;
    }

    public int getVolume24h() {
        return volume24h;
    }

    public void setVolume24h(int volume24h) {
        this.volume24h = volume24h;
    }

    public int getCirculatingSupply() {
        return circulatingSupply;
    }

    public void setCirculatingSupply(int circulatingSupply) {
        this.circulatingSupply = circulatingSupply;
    }

    public String getCirculatingSupplyBase() {
        return circulatingSupplyBase;
    }

    public void setCirculatingSupplyBase(String circulatingSupplyBase) {
        this.circulatingSupplyBase = circulatingSupplyBase;
    }

    public float getChange24h() {
        return change24h;
    }

    public void setChange24h(float change24h) {
        this.change24h = change24h;
    }
}
