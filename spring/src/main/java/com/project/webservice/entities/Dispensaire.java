package com.project.webservice.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Dispensaire {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name ;

    private String adresse;

    @JsonIgnore
    @OneToMany
    private List<Alert> alertList;

    @JsonIgnore
    @OneToMany
    private List<Dispensaire> dispensaireList;
    @JsonIgnore
    @OneToMany
    private List<RendezVous> rendezVousList;
}
