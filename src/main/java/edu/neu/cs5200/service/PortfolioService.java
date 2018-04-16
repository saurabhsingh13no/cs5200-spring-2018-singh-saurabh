package edu.neu.cs5200.service;

import edu.neu.cs5200.models.Portfolio;
import edu.neu.cs5200.models.PortfolioManager;
import edu.neu.cs5200.repository.PortfolioManagerRepository;
import edu.neu.cs5200.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.convert.Delimiter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PortfolioService {

    @Autowired
    PortfolioRepository portfolioRepository;

    @Autowired
    PortfolioManagerRepository portfolioManagerRepository;

    @GetMapping("/api/portfolio")
    public List<Portfolio> getAllPortfolios(
            @RequestParam(name="name",required=false) String name) {

        if (name!=null) {
            return (List<Portfolio>) portfolioRepository.findPortfolioByName(name);
        }
        return (List<Portfolio>) portfolioRepository.findAll();
    }

    @PostMapping("/api/portfolio")
    public void createPortfolio(@RequestBody Portfolio portfolio) {
        portfolioRepository.save(portfolio);
    }

    @PostMapping("/api/portfolio/{pId}/portfolioManagerId/{pmId}")
    public void assignPortfolioManagerToPortfolio(
            @PathVariable("pId") int pId,
            @PathVariable("pmId") int pmId) {
        Portfolio portfolio = portfolioRepository.findById(pId).orElse(null);
        PortfolioManager portfolioManager = portfolioManagerRepository.findById(pmId).orElse(null);

        portfolio.setManager(portfolioManager);
        portfolioRepository.save(portfolio);

    }

    @DeleteMapping("/api/portfolio")
    public void deleteAllPortfolio(){
        portfolioRepository.deleteAll();
    }

    @DeleteMapping("/api/portfolio/{portfolioId}")
    public void deletePortfolioById(@PathVariable("portfolioId") int pId) {
        portfolioRepository.deleteById(pId);
    }

    @PutMapping("/api/portfolio/{portfolioId}")
    public Portfolio updatePortfolio(
            @PathVariable("portfolioId") int pId,
            @RequestBody Portfolio newPortfolio) {
        Portfolio portfolio = portfolioRepository.findById(pId).orElse(null);
        if (portfolio!=null) {
            portfolio.set(newPortfolio);
        }

        return portfolioRepository.save(portfolio);
    }


}
