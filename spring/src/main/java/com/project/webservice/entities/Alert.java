package com.project.webservice.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Alert {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;



    @ManyToOne
    private Dispensaire dispensaire ;

    @ManyToOne
    private RendezVous rendezVous;


    private LocalDateTime localDateTime;


}
