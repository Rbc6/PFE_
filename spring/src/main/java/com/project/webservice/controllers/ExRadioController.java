package com.project.webservice.controllers;

import com.project.webservice.entities.Allergies;
import com.project.webservice.entities.ExamenRadio;
import com.project.webservice.repositories.AllergiesRepository;
import com.project.webservice.repositories.ExRadioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/radio")
public class ExRadioController {
    @Autowired
    ExRadioRepository exRadioRepository;

    @GetMapping("/getAll")
    public List<ExamenRadio> getAllRadio() {
        return exRadioRepository.findAll();
    }
    @PostMapping("/create")
    public ExamenRadio createRadio(@RequestBody ExamenRadio examenRadio){
        return exRadioRepository.save(examenRadio);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        exRadioRepository.deleteById(id);
    }
}
