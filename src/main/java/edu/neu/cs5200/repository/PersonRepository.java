package edu.neu.cs5200.repository;

import edu.neu.cs5200.models.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PersonRepository extends CrudRepository<Person, Integer> {

    @Query("SELECT p FROM Person p WHERE p.username=:username")
    Iterable<Person> findPersonByUsername(@Param("username") String username);

    @Query("SELECT p FROM Person p WHERE p.username=:username AND p.password=:password")
    Iterable<Person> findPersonByCredentials(
            @Param("username") String username,
            @Param("password") String password);


}

