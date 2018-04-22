package edu.neu.cs5200.service;

import edu.neu.cs5200.models.Customer;
import edu.neu.cs5200.models.PortfolioManager;
import edu.neu.cs5200.repository.CustomerRepository;
import edu.neu.cs5200.repository.PortfolioManagerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PortfolioManagerService {

    @Autowired
    PortfolioManagerRepository portfolioManagerRepository;

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/api/portfolioManager")
    public List<PortfolioManager> findAllPortfolioManagers(
            @RequestParam(name="username", required = false) String username,
            @RequestParam(name="password", required = false) String password) {

        if (username!=null && password!=null) {
            return (List<PortfolioManager>) portfolioManagerRepository.findPortfolioManagerByCredentials(username, password);
        }

        if (username!=null) {
            return (List<PortfolioManager>) portfolioManagerRepository.findPortfolioManagerByUsername(username);
        }
        return (List<PortfolioManager>) portfolioManagerRepository.findAll();
    }

    @GetMapping("/api/portfolioManager/{portfolioManagerId}/showAllCustomers")
    public List<Customer> findAllCustomers(
            @PathVariable("portfolioManagerId") int id) {
        PortfolioManager portfolioManager = portfolioManagerRepository.findById(id).orElse(null);
        return portfolioManager.getCustomersOfPortfolioManager();
    }


    @GetMapping("/api/portfolioManager/{portfolioManagerId}")
    public PortfolioManager findPortfolioManagerById(@PathVariable("portfolioManagerId") int id) {
        return portfolioManagerRepository.findById(id).orElse(null);
    }

    @PostMapping("/api/portfolioManager")
    public PortfolioManager createPortfolioManager(@RequestBody PortfolioManager portfolioManager) {
        return portfolioManagerRepository.save(portfolioManager);
    }

    @DeleteMapping("/api/portfolioManager/{portfolioManagerId}")
    public void deletePortfolioManagerById
            (@PathVariable("portfolioManagerId") int id) {
        portfolioManagerRepository.deleteById(id);
    }

    @DeleteMapping("/api/portfolioManager")
    public void deletePortfolioManager() {
        portfolioManagerRepository.deleteAll();
    }

    @PutMapping("/api/portfolioManager/{portfolioManagerId}")
    public PortfolioManager updatePortfolioManager(
            @PathVariable("portfolioManagerId") int id,
            @RequestBody PortfolioManager newPortfolioManager) {
        PortfolioManager portfolioManager = portfolioManagerRepository.findById(id).orElse(null);
        if (portfolioManager != null) {
            portfolioManager.set(newPortfolioManager);
        }
        return portfolioManagerRepository.save(portfolioManager);
    }

    @PostMapping("/api/portfolioManager/{pmId}/customer/{cId}")
    public void assignCustomerToPortfolioManager(
            @PathVariable("pmId") int pmId,
            @PathVariable("cId") int cId) {

        PortfolioManager portfolioManager = portfolioManagerRepository.findById(pmId).orElse(null);
        Customer customer = customerRepository.findById(cId).orElse(null);
        portfolioManager.assignCustomer(customer);
        portfolioManagerRepository.save(portfolioManager);
    }



}

