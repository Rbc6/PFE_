package com.project.webservice.entities.dto;

import com.project.webservice.entities.emun.DureeRendezVous;
import com.project.webservice.entities.emun.StatutRendezVous;
import com.project.webservice.entities.emun.TypeRendezVous;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RendezVousDTO {
    private long id;
    private LocalDateTime dateTime;
    private DureeRendezVous duree;
    private TypeRendezVous typeRendezVous;
    private long numeroDossier;
    private long idDisMedcin;
    private String motif;
    private StatutRendezVous statut;
    private long disponsaireId;


}