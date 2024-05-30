package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.repositories.AllergiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/Allergies")
public class AllergieController {
    @Autowired
    AllergiesRepository allergiesRepository;

    @GetMapping("/getAll")
    public List<Allergies> getAllAllergies() {
        return allergiesRepository.findAll();
    }
    @PostMapping("/create")
    public Allergies createAllergy(@RequestBody Allergies allergies){
        return allergiesRepository.save(allergies);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        allergiesRepository.deleteById(id);
    }
}


