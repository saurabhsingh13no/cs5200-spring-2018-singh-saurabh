package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
}
