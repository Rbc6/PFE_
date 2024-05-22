package com.project.webservice.controllers;


import com.project.webservice.entities.Dossier;
import com.project.webservice.entities.dto.DossierDTO;
import com.project.webservice.services.IDossierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("dossiers")
public class DossierController {

    final
    IDossierService dossierService ;


    public DossierController(IDossierService dossierService) {
        this.dossierService = dossierService;
    }

    @GetMapping
    public ResponseEntity<List<Dossier>> getAllDossiers() {
        List<Dossier> dossiers = dossierService.getAllDossiers();
        return ResponseEntity.ok(dossiers);
    }

    @GetMapping("/etDossierById/{id}")
    public ResponseEntity<Dossier> getDossierById(@PathVariable long id) {
        Optional<Dossier> dossier = dossierService.getDossierById(id);
        return dossier.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping("/getDossierByNumero/{numero}")
    public ResponseEntity<Dossier> getDossierByNumero(@PathVariable long numero) {
        Optional<Dossier> dossier = dossierService.getDossierByNumero(numero);
        return dossier.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Dossier> createDossier(@RequestBody DossierDTO dossier) {
        Dossier createdDossier = dossierService.createDossier(dossier);
        return new ResponseEntity<>(createdDossier, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dossier> updateDossier(@PathVariable long id, @RequestBody DossierDTO dossier) {
        Dossier updatedDossier = dossierService.updateDossier(id, dossier);
        return updatedDossier != null ? ResponseEntity.ok(updatedDossier) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDossier(@PathVariable long id) {
        dossierService.deleteDossier(id);
        return ResponseEntity.noContent().build();
    }

}
