package com.project.webservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.emun.JoursEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Jours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private JoursEnum label;


    @JsonIgnore
    @ManyToMany
    private Set<DisponibiliesMedecin> disponibiliesMedecins = new HashSet<>();

    public Jours(JoursEnum label) {
        this.label = label;
    }
}
