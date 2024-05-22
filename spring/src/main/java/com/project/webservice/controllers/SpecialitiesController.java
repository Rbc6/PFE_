package com.project.webservice.controllers;

import com.project.webservice.entities.Specialites;
import com.project.webservice.repositories.SpecialitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/specialities")
public class SpecialitiesController {

    @Autowired
    SpecialitiesRepository specialitiesRepository;

    @GetMapping("getAll")
    public List<Specialites> getAllSpecialites(){
        return specialitiesRepository.findAll();
    }
    @PostMapping("create")
    public Specialites createSpecialites(@RequestBody Specialites specialites){
        return specialitiesRepository.save(specialites);

    }
}
