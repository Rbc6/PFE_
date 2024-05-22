package com.project.webservice.controllers;


import com.project.webservice.entities.Dispensaire;
import com.project.webservice.repositories.DispensaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("dispensaire")
public class DispensaireController {

    @Autowired
    DispensaireRepository dispensaireRepository;

    @GetMapping
    public List<Dispensaire> getAll(){
        return dispensaireRepository.findAll();
    }



    @PostMapping
    public Dispensaire create(@RequestBody Dispensaire dispensaire){
        return dispensaireRepository.save(dispensaire);
    }
}
