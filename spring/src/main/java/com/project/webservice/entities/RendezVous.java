package com.project.webservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.dto.RendezVousDTO;
import com.project.webservice.entities.emun.DureeRendezVous;
import com.project.webservice.entities.emun.StatutRendezVous;
import com.project.webservice.entities.emun.TypeRendezVous;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime dateTime;

    private DureeRendezVous duree;

    private TypeRendezVous typeRendezVous;

    @JsonIgnore
    @OneToMany
    private List<Consultation> consultation;
    @JsonIgnore
    @OneToMany
    private List<FileConsultaion> consultaionList;
    @ManyToOne
    @JoinColumn(name = "dossier_id")
    private Dossier dossier;

    @ManyToOne
    @JoinColumn(name = "dis_medecin_id")
    private DisponibiliesMedecin disponibiliesMedecin;

    private String motif;

    private StatutRendezVous statut;
    @ManyToOne
    private Dispensaire dispensaire;


    @JsonIgnore
    @OneToMany
    private List<Alert> alertList;


    public RendezVous(RendezVousDTO rendezVousDTO) {
        this.id = rendezVousDTO.getId();
        this.dateTime = rendezVousDTO.getDateTime();
        this.duree = rendezVousDTO.getDuree();
        this.typeRendezVous = rendezVousDTO.getTypeRendezVous();
        this.motif = rendezVousDTO.getMotif();
        this.statut = rendezVousDTO.getStatut();
    }
}
