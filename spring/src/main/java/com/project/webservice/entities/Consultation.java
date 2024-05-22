package com.project.webservice.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String description ;

    private LocalDate rendezVousProchain ;

    @ManyToOne
    private RendezVous rendezVous;

    private String medicament ;



}
