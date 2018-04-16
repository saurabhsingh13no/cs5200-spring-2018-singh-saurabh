package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Cryptocurrency;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CryptoCurrencyRepository extends CrudRepository<Cryptocurrency, Integer> {

    @Query("SELECT cry FROM Cryptocurrency cry WHERE cry.name=:name")
    Iterable<Cryptocurrency> findCryptocurrencyByName(@Param("name") String name);
}
