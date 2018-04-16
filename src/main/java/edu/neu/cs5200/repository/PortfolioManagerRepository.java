package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.PortfolioManager;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PortfolioManagerRepository extends CrudRepository<PortfolioManager, Integer> {

    @Query("SELECT pm FROM PortfolioManager pm WHERE pm.username=:username")
    Iterable<PortfolioManager> findPortfolioManagerByUsername(@Param("username") String username);


    @Query("SELECT pm FROM PortfolioManager pm WHERE pm.username=:username AND pm.password=:password")
    Iterable<PortfolioManager> findPortfolioManagerByCredentials(
            @Param("username") String username,
            @Param("password") String password);
}
