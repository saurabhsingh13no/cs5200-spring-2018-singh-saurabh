package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Portfolio;
import org.springframework.data.repository.CrudRepository;

public interface PortfolioRepository extends CrudRepository<Portfolio, Integer> {
}
