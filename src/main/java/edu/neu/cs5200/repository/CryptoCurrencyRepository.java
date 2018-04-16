package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Cryptocurrency;
import org.springframework.data.repository.CrudRepository;

public interface CryptoCurrencyRepository extends CrudRepository<Cryptocurrency, Integer> {
}
