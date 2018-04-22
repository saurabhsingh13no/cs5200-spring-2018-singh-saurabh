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
    private float priceInUSD=0;
    private float marketCap=0;
    private float volume24h=0;
    private float circulatingSupply=0;
    private String circulatingSupplyBase;
    private float change24h=0;

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
        for (Customer customer : customerOwned) {
            customer.getCryptosOwned().add(this);
        }
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

    public float getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(float marketCap) {
        this.marketCap = marketCap;
    }

    public float getVolume24h() {
        return volume24h;
    }

    public void setVolume24h(float volume24h) {
        this.volume24h = volume24h;
    }

    public float getCirculatingSupply() {
        return circulatingSupply;
    }

    public void setCirculatingSupply(float circulatingSupply) {
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

    public void set(Cryptocurrency newCryptocurrency) {
        this.name = newCryptocurrency.name!=null ? newCryptocurrency.name : this.name;
        this.priceInUSD = newCryptocurrency.priceInUSD==0 ? newCryptocurrency.priceInUSD : this.priceInUSD;
        this.marketCap = newCryptocurrency.marketCap==0? newCryptocurrency.marketCap : this.marketCap;
        this.volume24h = newCryptocurrency.volume24h==0?newCryptocurrency.volume24h : this.volume24h;
        this.circulatingSupply = newCryptocurrency.circulatingSupply==0?newCryptocurrency.circulatingSupply : this.circulatingSupply;
        this.circulatingSupplyBase =  newCryptocurrency.circulatingSupplyBase!=null ? newCryptocurrency.circulatingSupplyBase : this.circulatingSupplyBase;
        this.change24h  = newCryptocurrency.change24h==0? newCryptocurrency.change24h : this.change24h;


    }
}
