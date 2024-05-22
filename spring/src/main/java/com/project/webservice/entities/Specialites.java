package com.project.webservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.emun.SpecialiteMedicale;
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
public class Specialites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private SpecialiteMedicale specialiteMedicale;

    @JsonIgnore
    @ManyToMany
    private Set<Medecin> medecins = new HashSet<>();

    public Specialites(SpecialiteMedicale specialiteMedicale) {
        this.specialiteMedicale = specialiteMedicale;
    }
}
