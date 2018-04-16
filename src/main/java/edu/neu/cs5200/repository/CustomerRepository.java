package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    @Query("SELECT c FROM Customer c WHERE c.username=:username")
    Iterable<Customer> findCustomerByUsername(@Param("username") String username);


    @Query("SELECT c FROM Customer c WHERE c.username=:username AND c.password=:password")
    Iterable<Customer> findCustomerByCredentials(
            @Param("username") String username,
            @Param("password") String password);
}
