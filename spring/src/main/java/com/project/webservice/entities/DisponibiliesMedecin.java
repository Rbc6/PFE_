package com.project.webservice.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class DisponibiliesMedecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    @OneToOne
    private Medecin medecin;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "jours_disponibiliesMedecin",
            joinColumns = @JoinColumn(name = "disponibiliesMedecin_id"),
            inverseJoinColumns = @JoinColumn(name = "jours_id"))
    private Set<Jours> jours = new HashSet<>();
    @JsonIgnore
    @OneToMany
    private List<RendezVous> rendezVousList;


    public DisponibiliesMedecin convert(Optional<DisponibiliesMedecin> optionalDisMedcin) {
        return optionalDisMedcin.orElse(null);
    }

    public void addJours(Set<Jours> jours) {
        this.jours.addAll(jours);
    }

    public DisponibiliesMedecin(String description, Medecin medecin, Set<Jours> jours) {

        this.description = description;
        this.medecin = medecin;
        this.jours = jours;
    }
}
