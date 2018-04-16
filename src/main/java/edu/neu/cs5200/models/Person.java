package edu.neu.cs5200.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name="dtype")
public class Person implements Serializable {

    @Id //to set as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // to set as autoincrement
    private int id;
    private String firstName;
    private String lastName;
    private Date dob;
    private String phone;
    private String email;
    private String username;
    private String password;

    private static final long serialVersionUID = 1L;

    public Person() {
    }

    public Person(String firstName, String lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Person(String firstName, String lastName, Date dob, String phone, String email, String username, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void set (Person newPerson) {
        this.firstName = newPerson.firstName!=null ?newPerson.firstName : this.firstName;
        this.lastName = newPerson.lastName!=null ? newPerson.lastName : this.lastName;
        this.dob = newPerson.dob!=null ? newPerson.dob : this.dob;
        this.phone = newPerson.phone!=null ? newPerson.phone : this.phone;
        this.email = newPerson.email!=null ? newPerson.email : this.email;
        this.username = newPerson.username!=null ? newPerson.username : this.username;
        this.password = newPerson.password!=null ? newPerson.password : this.password;
    }
}
