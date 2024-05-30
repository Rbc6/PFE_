package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.Paramedicales;
import com.project.webservice.repositories.AllergiesRepository;
import com.project.webservice.repositories.ParaMedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/Paramedical")
public class ParaMedController {
    @Autowired
    ParaMedRepository paraMedRepository;

    @GetMapping("/getAll")
    public List<Paramedicales> getAllAllergies() {
        return paraMedRepository.findAll();
    }
    @PostMapping("/create")
    public Paramedicales createAllergy(@RequestBody Paramedicales paramedicales){
        return paraMedRepository.save(paramedicales);
    }
    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        paraMedRepository.deleteById(id);
    }
}
