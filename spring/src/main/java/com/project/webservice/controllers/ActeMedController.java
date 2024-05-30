package com.project.webservice.controllers;

import com.project.webservice.entities.ActeMedicaux;
import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.Utilisateur;
import com.project.webservice.repositories.ActeMedRepository;
import com.project.webservice.repositories.AllergiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/ActesMed")
public class ActeMedController {
    @Autowired
    ActeMedRepository acteMedRepository;

    @GetMapping("/getAll")
    public List<ActeMedicaux> getAllActes() {
        return acteMedRepository.findAll();
    }
    @PostMapping("/create")
    public ActeMedicaux createActe(@RequestBody ActeMedicaux acteMedicaux){
        return acteMedRepository.save(acteMedicaux);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        acteMedRepository.deleteById(id);
    }



}
