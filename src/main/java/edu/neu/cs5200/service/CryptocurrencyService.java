package edu.neu.cs5200.service;

import edu.neu.cs5200.models.Cryptocurrency;
import edu.neu.cs5200.repository.CryptoCurrencyRepository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CryptocurrencyService {

    @Autowired
    CryptoCurrencyRepository cryptoCurrencyRepository;

    @GetMapping("/api/cryptoCurrency")
    public List<Cryptocurrency> findAllCryptocurrencys(
            @RequestParam(name="name",required=false) String name){

        if (name!=null) {
            return (List<Cryptocurrency>) cryptoCurrencyRepository.findCryptocurrencyByName(name);
        }
        return (List<Cryptocurrency>) cryptoCurrencyRepository.findAll();
    }

    @DeleteMapping("/api/cryptoCurrency/{cryptoCurrencyId}")
    public void deleteCryptocurrencyById
            (@PathVariable("cryptoCurrencyId") int id) {
        cryptoCurrencyRepository.deleteById(id);
    }


    @DeleteMapping("/api/cryptoCurrency")
    public void deleteCryptocurrency() {
        cryptoCurrencyRepository.deleteAll();
    }

    @PutMapping("/api/cryptoCurrency/{cryptoCurrencyId}")
    public Cryptocurrency updateCryptocurrency(
            @PathVariable("cryptoCurrencyId") int id,
            @RequestBody Cryptocurrency newCryptocurrency) {
        Cryptocurrency cryptocurrency = cryptoCurrencyRepository.findById(id).orElse(null);
        if (cryptocurrency != null) {
            cryptocurrency.set(newCryptocurrency);
        }
        return cryptoCurrencyRepository.save(cryptocurrency);
    }

    @PostMapping("/api/cryptoCurrency")
    public Cryptocurrency createCryptocurrency(@RequestBody Cryptocurrency cryptoCurrency) {
        return cryptoCurrencyRepository.save(cryptoCurrency);
    }

    @GetMapping("/api/cryptoCurrency/{cryptoCurrencyId}")
    public Cryptocurrency findCryptocurrencyById(@PathVariable("cryptoCurrencyId") int cId) {

        return cryptoCurrencyRepository.findById(cId).orElse(null);
    }
}
