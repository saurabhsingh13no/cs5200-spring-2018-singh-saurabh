package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Portfolio;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PortfolioRepository extends CrudRepository<Portfolio, Integer> {

    @Query("SELECT pf FROM Portfolio pf WHERE pf.name=:name")
    Iterable<Portfolio> findPortfolioByName(@Param("name") String name);
}
