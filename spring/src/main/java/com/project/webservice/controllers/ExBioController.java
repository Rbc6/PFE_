package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.ExamenBiologique;
import com.project.webservice.repositories.AllergiesRepository;
import com.project.webservice.repositories.ExBioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/bio")
public class ExBioController {
    @Autowired
    ExBioRepository exBioRepository;

    @GetMapping("/getAll")
    public List<ExamenBiologique> getAllExamenBio() {
        return exBioRepository.findAll();
    }
    @PostMapping("/create")
    public ExamenBiologique createExamenBio(@RequestBody ExamenBiologique examenBiologique){
        return exBioRepository.save(examenBiologique);
    }
    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        exBioRepository.deleteById(id);
    }
}
