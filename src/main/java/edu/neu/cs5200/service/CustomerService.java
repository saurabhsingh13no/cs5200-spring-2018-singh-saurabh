package edu.neu.cs5200.service;

import edu.neu.cs5200.models.Customer;
import edu.neu.cs5200.models.PortfolioManager;
import edu.neu.cs5200.repository.CustomerRepository;
import edu.neu.cs5200.repository.PortfolioManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PortfolioManagerRepository portfolioManagerRepository;

    @GetMapping("/api/customer")
    public List<Customer> findAllCustomers(
            @RequestParam(name="username", required = false) String username,
            @RequestParam(name="password", required = false) String password) {

        if (username!=null && password!=null) {
            return (List<Customer>) customerRepository.findCustomerByCredentials(username, password);
        }

        if (username!=null) {
            return (List<Customer>) customerRepository.findCustomerByUsername(username);
        }
        return (List<Customer>) customerRepository.findAll();
    }

    @GetMapping("/api/customer/{customerId}")
    public Customer findCustomerById(@PathVariable("customerId") int id) {
        return customerRepository.findById(id).orElse(null);
    }

    @PostMapping("/api/customer")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @DeleteMapping("/api/customer/{customerId}")
    public void deleteCustomerById
            (@PathVariable("customerId") int id) {
        customerRepository.deleteById(id);
    }

    @DeleteMapping("/api/customer")
    public void deleteCustomer() {
        customerRepository.deleteAll();
    }

    @PutMapping("/api/customer/{customerId}")
    public Customer updateCustomer(
            @PathVariable("customerId") int id,
            @RequestBody Customer newCustomer) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer != null) {
            customer.set(newCustomer);
        }
        return customerRepository.save(customer);
    }

    @PostMapping("/api/customer/{cId}/portfolioManager/{pmId}")
    public void assignPortfolioManagerToCustomer(
            @PathVariable("cId") int cId,
            @PathVariable("pmId") int pmId) {
        Customer customer = customerRepository.findById(cId).orElse(null);
        PortfolioManager portfolioManager = portfolioManagerRepository.findById(pmId).orElse(null);
        customer.assignPortfolioManager(portfolioManager);
        customerRepository.save(customer);
    }





}
