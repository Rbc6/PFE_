package com.project.webservice.controllers;

import com.project.webservice.entities.*;
import com.project.webservice.entities.dto.RendezVousDTO;
import com.project.webservice.entities.dto.RenvezvousResponseDTO;
import com.project.webservice.repositories.AlertRepository;
import com.project.webservice.repositories.DispensaireRepository;
import com.project.webservice.repositories.DisponibilisiesMedecinRepository;
import com.project.webservice.repositories.RendezVousRepository;
import com.project.webservice.services.IDossierService;
import com.project.webservice.services.IMedcinService;
import com.project.webservice.services.IRendezVousService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/rendezvous")
public class RendezVousController {
    private final IRendezVousService rendezVousService;

    @Autowired
    DispensaireRepository dispensaireRepository;

    @Autowired
    AlertRepository alertRepository;

    @Autowired
    RendezVousRepository rendezVousRepository;

    private final IDossierService dossierService;

    private final IMedcinService medcinService;

    private final DisponibilisiesMedecinRepository disponibilisiesMedecinRepository;

    public RendezVousController(IRendezVousService rendezVousService, IDossierService dossierService, IMedcinService medcinService, DisponibilisiesMedecinRepository disponibilisiesMedecinRepository) {
        this.rendezVousService = rendezVousService;
        this.dossierService = dossierService;
        this.medcinService = medcinService;
        this.disponibilisiesMedecinRepository = disponibilisiesMedecinRepository;
    }

    @GetMapping
    public ResponseEntity<List<RendezVous>> getAllRendezVous() {
        List<RendezVous> rendezVousList = rendezVousService.getAllRendezVous();
        return ResponseEntity.ok(rendezVousList);
    }

    public List<RenvezvousResponseDTO> generateArrayForCalander(List<RendezVous> rendezVousList){
        List<RenvezvousResponseDTO> renvezvousResponseDTOList = new ArrayList<>(){};
        for(RendezVous rendezVous : rendezVousList){
            renvezvousResponseDTOList.add(new RenvezvousResponseDTO(rendezVous));
        }
        return renvezvousResponseDTOList;
    }
    @GetMapping("getAllRendezVousByDossier/{id}")
    public List<RendezVous> getAllRendezVousByDossier(@PathVariable long id){
        return rendezVousRepository.findRendezVousByDossierId(id);
    }

    @GetMapping("getAllV2")
    public ResponseEntity<List<RenvezvousResponseDTO>> getAllRendezVousV2() {
        List<RendezVous> rendezVousList = rendezVousService.getAllRendezVous();
        return ResponseEntity.ok(generateArrayForCalander(rendezVousList));
    }
    @GetMapping("getAllV2/byMedcin/{id}")
    public ResponseEntity<List<RenvezvousResponseDTO>> getAllRendezVousV2ByMedcin(@PathVariable long id) {
        Medecin medecin = medcinService.getMedecinById(id).orElse(null);
        if(medecin == null){
            return ResponseEntity.noContent().build();
        }
        DisponibiliesMedecin disponibiliesMedecin = disponibilisiesMedecinRepository.findDisponibiliesMedecinByMedecin(medecin);


        List<RendezVous> rendezVousList = rendezVousRepository.findRendezVousByDisponibiliesMedecin(disponibiliesMedecin);
        return ResponseEntity.ok(generateArrayForCalander(rendezVousList));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RendezVous> getRendezVousById(@PathVariable Long id) {
        Optional<RendezVous> rendezVous = rendezVousService.getRendezVousById(id);
        return rendezVous.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @Transactional
    @PostMapping
    public ResponseEntity<RendezVous> createRendezVous(@RequestBody RendezVousDTO rendezVousDTO) {
        Dispensaire dispensaire = dispensaireRepository.findById(rendezVousDTO.getDisponsaireId()).orElse(null);
        Optional<Dossier> dossier = dossierService.getDossierByNumero(rendezVousDTO.getNumeroDossier());
        Optional<DisponibiliesMedecin> disMedecin = disponibilisiesMedecinRepository.findById(rendezVousDTO.getIdDisMedcin());
        RendezVous rendezVous = new RendezVous(rendezVousDTO);
        rendezVous.setDispensaire(dispensaire);
        if(dossier.isPresent() && disMedecin.isPresent()){
            rendezVous.setDossier(new Dossier().convert(dossier));
            rendezVous.setDisponibiliesMedecin(new DisponibiliesMedecin().convert(disMedecin));
            RendezVous createdRendezVous = rendezVousService.createRendezVous(rendezVous);
            // géneration d'un alert
            if(createdRendezVous.getDispensaire().getId() != dossier.get().getDispensaire().getId()){
               Alert alert = new Alert();
               alert.setRendezVous(createdRendezVous);
               alert.setDispensaire(dispensaire);
               alert.setLocalDateTime(LocalDateTime.now());
               alertRepository.save(alert);
            }
            return new ResponseEntity<>(createdRendezVous, HttpStatus.CREATED);
        }else{
            return ResponseEntity.noContent().build();
        }


    }

    @PutMapping("update/{id}")
    public ResponseEntity<RendezVous> updateRendezVous(@PathVariable Long id, @RequestBody RendezVousDTO rendezVousDTO) {
        Optional<RendezVous> existingRendezVousOpt = rendezVousService.getRendezVousById(id);
        if (existingRendezVousOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        RendezVous existingRendezVous = existingRendezVousOpt.get();

        Dispensaire dispensaire = dispensaireRepository.findById(rendezVousDTO.getDisponsaireId()).orElse(null);
        Optional<Dossier> dossierOpt = dossierService.getDossierByNumero(rendezVousDTO.getNumeroDossier());
        Optional<DisponibiliesMedecin> disMedecinOpt = disponibilisiesMedecinRepository.findById(rendezVousDTO.getIdDisMedcin());

        if (dossierOpt.isEmpty() || disMedecinOpt.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        // Update fields
        existingRendezVous.setDateTime(rendezVousDTO.getDateTime());
        existingRendezVous.setDuree(rendezVousDTO.getDuree());
        existingRendezVous.setTypeRendezVous(rendezVousDTO.getTypeRendezVous());
        existingRendezVous.setMotif(rendezVousDTO.getMotif());
        existingRendezVous.setStatut(rendezVousDTO.getStatut());
        existingRendezVous.setDispensaire(dispensaire);
        existingRendezVous.setDossier(dossierOpt.get());
        existingRendezVous.setDisponibiliesMedecin(disMedecinOpt.get());

        RendezVous updatedRendezVous = rendezVousService.updateRendezVous(id, existingRendezVous);
        return ResponseEntity.ok(updatedRendezVous);
    }

    @Transactional
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteRendezVous(@PathVariable Long id) {
        alertRepository.deleteByRendezVousId(id);
        rendezVousService.deleteRendezVous(id);
        return ResponseEntity.noContent().build();
    }
}