package com.project.webservice.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.dto.DossierDTO;
import com.project.webservice.entities.emun.Genre;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Dossier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true)
    private long numero;

    private LocalDateTime dateCeation;

    private String nom;

    private String prenom;

    @Column(unique = true)
    private String cin;

    private String adresse;

    private String email;

    private String telephone;

    private Genre genre;

    private LocalDate dateNaissance;

    @ManyToOne
    private Dispensaire dispensaire;

    @JsonIgnore
    @OneToMany
    private List<RendezVous> rendezVousList;

    @JsonIgnore
    @OneToMany
    private List<Medecin> medecinList;

    @JsonIgnore
    @OneToMany
    private List<Image> imageList;


    @PrePersist
    public void generateNumero() {
        this.numero = ThreadLocalRandom.current().nextLong(10000000, 100000000);
        this.dateCeation = LocalDateTime.now();
    }


    public Dossier(DossierDTO dossierDTO) {
        this.id = dossierDTO.getId();
        this.nom = dossierDTO.getNom();
        this.prenom = dossierDTO.getPrenom();
        this.cin = dossierDTO.getCin();
        this.adresse = dossierDTO.getAdresse();
        this.genre = dossierDTO.getGenre();
        this.dateNaissance = dossierDTO.getDateNaissance();
        this.email = dossierDTO.getEmail();
        this.telephone = dossierDTO.getTelephone();

    }

    public Dossier convert(Optional<Dossier> optionalDossier) {
        return optionalDossier.orElse(null);
    }
}
