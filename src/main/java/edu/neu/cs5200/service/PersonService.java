package edu.neu.cs5200.service;

import edu.neu.cs5200.models.Person;
import edu.neu.cs5200.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    @GetMapping("/api/person")
    public List<Person> findAllPersons(
            @RequestParam(name="username",required=false) String username,
            @RequestParam(name="password",required=false) String password) {

        if (username!=null && password!=null) {
            return (List<Person>) personRepository.findPersonByCredentials(username, password);
        }

        if (username!=null) {
            return (List<Person>) personRepository.findPersonByUsername(username);
        }
        return (List<Person>) personRepository.findAll();
    }

    @DeleteMapping("/api/person/{personId}")
    public void deletePersonById
            (@PathVariable("personId") int id) {
        personRepository.deleteById(id);
    }


    @DeleteMapping("/api/person")
    public void deletePerson() {
       personRepository.deleteAll();
    }

    @PutMapping("/api/person/{personId}")
    public Person updatePerson(
            @PathVariable("personId") int id,
            @RequestBody Person newPerson) {
        Person person = personRepository.findById(id).orElse(null);
        if (person != null) {
            person.set(newPerson);
        }
        return personRepository.save(person);
    }

    @PostMapping("/api/person")
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

    @GetMapping("/api/person/{personId}")
    public Person findPersonById(@PathVariable("personId") int pId) {
        return personRepository.findById(pId).orElse(null);
    }


}
