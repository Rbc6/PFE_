package com.project.webservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.dto.MedcinDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String code;

    private String nom;

    private String prenom;



    private String adresse;

    private String numeroTelephone;

    private String email;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "specialites_medecin",
            joinColumns = @JoinColumn(name = "medecin_id"),
            inverseJoinColumns = @JoinColumn(name = "specialites_id"))
    private Set<Specialites> specialites = new HashSet<>();





    @JsonIgnore
    @OneToOne
    private DisponibiliesMedecin disponibiliesMedecin;



    public Medecin(Medecin medecin) {
        this.nom = medecin.getNom();
        this.prenom = medecin.getPrenom();
        this.adresse = medecin.getAdresse();
        this.numeroTelephone = medecin.getNumeroTelephone();
        this.email = medecin.getEmail();
        this.specialites = medecin.getSpecialites();


    }

    public Medecin(MedcinDTO medecin , Set<Specialites> specialitesList ) {
        this.nom = medecin.getNom();
        this.prenom = medecin.getPrenom();
        this.adresse = medecin.getAdresse();
        this.numeroTelephone = medecin.getNumeroTelephone();
        this.email = medecin.getEmail();
        this.specialites = specialitesList;


    }

    @PrePersist
    public void generateCode() {
        StringBuilder sb = new StringBuilder("DOC");
        for (int i = 0; i < 8; i++) {
            sb.append(ThreadLocalRandom.current().nextInt(0, 10));
        }
        this.code = sb.toString();
    }

}
