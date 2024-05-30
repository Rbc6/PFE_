package com.project.webservice.controllers;


import com.project.webservice.entities.Alert;
import com.project.webservice.repositories.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/alert")
public class AlertController {

    @Autowired
    AlertRepository alertRepository;

    @GetMapping
    public List<Alert> getAll(){
        return alertRepository.findAll();
    }

    @DeleteMapping(path = "/delete/{id}")
    public void delete(@PathVariable Long id){
        alertRepository.deleteById(id);
    }
}
