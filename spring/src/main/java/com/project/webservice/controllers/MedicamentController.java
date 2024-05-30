package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.Medicaments;
import com.project.webservice.repositories.AllergiesRepository;
import com.project.webservice.repositories.MedicamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/Medicaments")
public class MedicamentController {
    @Autowired
    MedicamentRepository medicamentRepository;

    @GetMapping("/getAll")
    public List<Medicaments> getAllAllergies() {
        return medicamentRepository.findAll();
    }
    @PostMapping("/create")
    public Medicaments createAllergy(@RequestBody Medicaments medicaments){
        return medicamentRepository.save(medicaments);
    }
    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        medicamentRepository.deleteById(id);
    }
}
