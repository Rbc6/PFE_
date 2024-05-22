package com.project.webservice.controllers;

import com.project.webservice.entities.*;
import com.project.webservice.entities.dto.MedcinDTO;
import com.project.webservice.entities.dto.MedcinResponseDTO;
import com.project.webservice.entities.dto.SpecialtyCount;
import com.project.webservice.entities.emun.SpecialiteMedicale;
import com.project.webservice.repositories.*;
import com.project.webservice.services.IMedcinService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin("*")
@RestController
@RequestMapping("/medecins")
public class MedecinController {
    private final IMedcinService medecinService;
    @Autowired
    MedecinRepository medecinRepository;
    @Autowired
    DisponibilisiesMedecinRepository disponibilisiesMedecinRepository;
    private final  SpecialitiesRepository specialitiesRepository;
    @Autowired
    RendezVousRepository rendezVousRepository;
    public MedecinController(IMedcinService medecinService,  SpecialitiesRepository specialitiesRepository) {
        this.medecinService = medecinService;

        this.specialitiesRepository = specialitiesRepository;
    }

    @GetMapping("getAll")
    public ResponseEntity<List<Medecin>> getAllMedecins() {
        List<Medecin> medecins = medecinService.getAllMedecins();
        return ResponseEntity.ok(medecins);
    }
    @GetMapping("getAllV2")
    public List<MedcinResponseDTO> getAllMedecinsV2(){
        List<Medecin> medecins = medecinService.getAllMedecins();
        List<MedcinResponseDTO> medcinResponseDTOList = new ArrayList<>(){};
        for (Medecin medecin : medecins){
            medcinResponseDTOList.add(new MedcinResponseDTO(medecin));
        }
        return medcinResponseDTOList;
    }

    @GetMapping("/getMedecinById/{id}")
    public ResponseEntity<Medecin> getMedecinById(@PathVariable Long id) {
        Optional<Medecin> medecin = medecinService.getMedecinById(id);
        return medecin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getMedecinByIdV2/{id}")
    public ResponseEntity<?> getMedecinByIdV2(@PathVariable Long id) {
        Medecin medecin = medecinService.getMedecinById(id).orElse(null);
        if(medecin == null){
            return ResponseEntity.badRequest().body("Medecin non trouvé");
        }else{
            return ResponseEntity.ok(new MedcinResponseDTO(medecin));
        }

    }

    @GetMapping("/getMedecinByCode/{code}")
    public ResponseEntity<Medecin> getMedecinByCode(@PathVariable String code) {
        Optional<Medecin> medecin = medecinService.getMedecinByCode(code);
        return medecin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("create")
    public ResponseEntity<Medecin> createMedecin(@RequestBody Medecin medecin) {
        Medecin createdMedecin = medecinService.createMedecin(new Medecin(medecin));
        return new ResponseEntity<>(createdMedecin, HttpStatus.CREATED);
    }

    @PostMapping("createV2")
    public ResponseEntity<Medecin> createMedecinV2(@RequestBody MedcinDTO medcinDTO) {

        Set<Specialites> specialiteList = new HashSet<>();
        for (SpecialiteMedicale specialiteMedicale : medcinDTO.getSpecialiteMedicales()){

            Specialites specialites = specialitiesRepository.findBySpecialiteMedicale(specialiteMedicale);

            specialiteList.add(specialites);
        }
        Medecin medecin = new Medecin(medcinDTO , specialiteList );
        Medecin createdMedecin = medecinService.createMedecin(new Medecin(medecin));
        return new ResponseEntity<>(createdMedecin, HttpStatus.CREATED);


    }



    @PutMapping("/update/{id}")
    public ResponseEntity<Medecin> updateMedecin(@PathVariable Long id, @RequestBody Medecin medecin) {
        Medecin medecin1 = new Medecin(medecin);
        medecin1.setCode(medecin.getCode());
        Medecin updatedMedecin = medecinService.updateMedecin(id, medecin1);
        return updatedMedecin != null ? ResponseEntity.ok(updatedMedecin) : ResponseEntity.notFound().build();
    }
    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMedecin(@PathVariable Long id) {
        Medecin medecin = medecinRepository.findById(id).orElse(null);
        DisponibiliesMedecin disponibiliesMedecin =disponibilisiesMedecinRepository.findDisponibiliesMedecinByMedecin(medecin);
         List<RendezVous> rendezVousList = rendezVousRepository.findRendezVousByDisponibiliesMedecin(disponibiliesMedecin);
         for (RendezVous item : rendezVousList){
             rendezVousRepository.deleteById(item.getId());
         }
         disponibilisiesMedecinRepository.deleteById(disponibiliesMedecin.getId());
        medecinService.deleteMedecin(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("type/specialiteMedicale")
    public SpecialiteMedicale[] getAllSep(){
        return SpecialiteMedicale.values();
    }

    @GetMapping("dash/countDoctorsBySpecialty")
    public List<Object>countDoctorsBySpecialty(){
        List<Object> transformedResponse = new ArrayList<>();
        List<Object[]> list = medecinRepository.countDoctorsBySpecialty();
        for (Object[] item : list) {
            SpecialiteMedicale specialty = (SpecialiteMedicale) item[0];
            Long count = (Long) item[1];


            transformedResponse.add(new SpecialtyCount(specialty.toString(), count));
        }
        return transformedResponse;
    }
}
