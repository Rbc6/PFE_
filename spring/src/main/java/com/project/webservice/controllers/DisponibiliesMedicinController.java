package com.project.webservice.controllers;

import com.project.webservice.entities.DisponibiliesMedecin;

import com.project.webservice.entities.Jours;
import com.project.webservice.entities.Medecin;
import com.project.webservice.entities.Specialites;
import com.project.webservice.entities.dto.DisponibilitiesDTO;
import com.project.webservice.entities.dto.DisponibilititsResponseDTO;
import com.project.webservice.entities.dto.DisponibilititsResponseDTOV2;
import com.project.webservice.entities.emun.JoursEnum;
import com.project.webservice.repositories.DisponibilisiesMedecinRepository;

import com.project.webservice.repositories.JoursRepository;
import com.project.webservice.repositories.MedecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/disponibiliesMedicin")
public class DisponibiliesMedicinController {

    @Autowired
    DisponibilisiesMedecinRepository disponibilisiesMedecinRepository;

    @Autowired
    JoursRepository joursRepository;
    @Autowired
    MedecinRepository medecinRepository;


    @GetMapping("getAll")
    public List<DisponibiliesMedecin> getAllDisponibiliesMedicin() {
        return disponibilisiesMedecinRepository.findAll();
    }

    @GetMapping("getAllV2")
    public List<DisponibilititsResponseDTO> getAllDisponibiliesMedicinV2() {
        List<DisponibiliesMedecin> disponibiliesMedecin = disponibilisiesMedecinRepository.findAll();
        List<DisponibilititsResponseDTO> disponibilititsResponseDTOS = new ArrayList<>() {
        };
        for (DisponibiliesMedecin item : disponibiliesMedecin) {
            disponibilititsResponseDTOS.add(new DisponibilititsResponseDTO(item));
        }
        return disponibilititsResponseDTOS;
    }

    @GetMapping("getAllV3")
    public List<DisponibilititsResponseDTOV2> getAllDisponibiliesMedicinV3() {
        List<DisponibiliesMedecin> disponibiliesMedecin = disponibilisiesMedecinRepository.findAll();
        List<DisponibilititsResponseDTOV2> disponibilititsResponseDTOS = new ArrayList<>() {
        };
        for (DisponibiliesMedecin item : disponibiliesMedecin) {
            disponibilititsResponseDTOS.add(new DisponibilititsResponseDTOV2(item));
        }
        return disponibilititsResponseDTOS;
    }


    @PostMapping("create")
    public DisponibiliesMedecin createDisponibiliesMedecin(@RequestBody DisponibiliesMedecin disponibiliesMedecin) {
        return disponibilisiesMedecinRepository.save(disponibiliesMedecin);
    }

    @PostMapping("createV2")
    public ResponseEntity<?> createDisponibiliesMedecinV2(@RequestBody DisponibilitiesDTO disponibilitiesDTO) {
        Medecin medecin = medecinRepository.findById(disponibilitiesDTO.getIdMedcin()).orElse(null);
        if (medecin == null) {
            return ResponseEntity.badRequest().body("Medcin non trouvé");
        }
        Set<Jours> joursSet = new HashSet<>();
        for (JoursEnum joursEnum : disponibilitiesDTO.getJoursEnums()) {

            Jours jours = joursRepository.findByLabel(joursEnum);

            joursSet.add(jours);
        }
        String description = medecin.getPrenom() + " " + medecin.getNom() + " -Les spécilités :";
        for (Specialites specialiteMedicale : medecin.getSpecialites()) {
            description = description + " " + specialiteMedicale.getSpecialiteMedicale();
        }

        DisponibiliesMedecin disponibiliesMedecin = disponibilisiesMedecinRepository.save(new DisponibiliesMedecin(description, medecin, joursSet));
        return ResponseEntity.ok(disponibiliesMedecin);
    }


    public Boolean verifyJours(Set<Jours> jours, JoursEnum joursEnum) {
        for (Jours item : jours) {
            if (item.getLabel().equals(joursEnum)) {
                return true;
            }
        }
        return false;
    }

    @PostMapping("affectJoursToMedcin/{idMedcin}")
    public ResponseEntity<?> affectJoursToDoctor(@PathVariable long idMedcin, @RequestBody List<JoursEnum> joursEnums) {
        Medecin medecin = medecinRepository.findById(idMedcin).orElse(null);
        DisponibiliesMedecin disponibiliesMedecin = disponibilisiesMedecinRepository.findDisponibiliesMedecinByMedecin(medecin);
        if (medecin == null) {
            ResponseEntity.badRequest().body("Medcin non trouvé");
        } else {


            Set<Jours> joursList = new HashSet<>();
            for (JoursEnum joursEnum : joursEnums) {
                if (verifyJours(disponibiliesMedecin.getJours(), joursEnum)) {
                    continue;
                }
                Jours jours = joursRepository.findByLabel(joursEnum);
                joursList.add(jours);
            }
            disponibiliesMedecin.addJours(joursList);

        }
        DisponibiliesMedecin disponibiliesMedecinUpdated = disponibilisiesMedecinRepository.save(disponibiliesMedecin);
        return ResponseEntity.ok(disponibiliesMedecinUpdated);


    }

    @PostMapping("removeJoursToMedcin/{idMedcin}")
    public ResponseEntity<?> removeJoursToDoctor(@PathVariable long idMedcin, @RequestBody List<JoursEnum> joursEnums) {
        Medecin medecin = medecinRepository.findById(idMedcin).orElse(null);
        DisponibiliesMedecin disponibiliesMedecin = disponibilisiesMedecinRepository.findDisponibiliesMedecinByMedecin(medecin);
        if (medecin == null) {
            ResponseEntity.badRequest().body("Medcin non trouvé");
        } else {


            for (JoursEnum joursEnum : joursEnums) {
                if (verifyJours(disponibiliesMedecin.getJours(), joursEnum)) {
                    Jours jours = joursRepository.findByLabel(joursEnum);
                    disponibiliesMedecin.getJours().remove(jours);
                }

            }


        }
        DisponibiliesMedecin disponibiliesMedecinUpdated = disponibilisiesMedecinRepository.save(disponibiliesMedecin);
        return ResponseEntity.ok(disponibiliesMedecinUpdated);


    }

    @GetMapping("findDispoByMedcin/{id}")
    public DisponibiliesMedecin findDispoByMedcin(@PathVariable long id) {
        Medecin medecin = medecinRepository.findById(id).orElse(null);

        return disponibilisiesMedecinRepository.findDisponibiliesMedecinByMedecin(medecin);

    }


}
