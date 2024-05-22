package com.project.webservice.controllers;

import com.project.webservice.entities.Jours;
import com.project.webservice.repositories.JoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jours")
public class JoursController {
    @Autowired
    JoursRepository joursRepository;



    @GetMapping("getAll")
    public List<Jours> getJoursMedicin(){
        return joursRepository.findAll();
    }
    @PostMapping("create")
    public Jours createJours(@RequestBody Jours jours){
        return joursRepository.save(jours);
    }
}
