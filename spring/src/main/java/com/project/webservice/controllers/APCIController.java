package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.Apcis;
import com.project.webservice.repositories.AllergiesRepository;
import com.project.webservice.repositories.ApcisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/Apcis")
public class APCIController {
    @Autowired
    ApcisRepository apcisRepository;

    @GetMapping("/getAll")
    public List<Apcis> getAllApcis() {
        return apcisRepository.findAll();
    }
    @PostMapping("/create")
    public Apcis createApci(@RequestBody Apcis apcis){
        return apcisRepository.save(apcis);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        apcisRepository.deleteById(id);
    }
}
