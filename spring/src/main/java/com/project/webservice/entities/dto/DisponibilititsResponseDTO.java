package com.project.webservice.entities.dto;

import com.project.webservice.entities.DisponibiliesMedecin;
import com.project.webservice.entities.Jours;
import com.project.webservice.entities.Specialites;
import com.project.webservice.entities.emun.JoursEnum;
import com.project.webservice.entities.emun.SpecialiteMedicale;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisponibilititsResponseDTO {
    private long id ;
    private String name;
    private String adresse;
    private String numeroTelephone;
    private String email;
    private List<SpecialiteMedicale> specialiteMedicales = new ArrayList<>(){};
    private List<JoursEnum> joursEnums = new ArrayList<>(){};


    public DisponibilititsResponseDTO(DisponibiliesMedecin disponibiliesMedecin) {
        this.id = disponibiliesMedecin.getId();
        this.name = disponibiliesMedecin.getMedecin().getPrenom() + " " + disponibiliesMedecin.getMedecin().getNom();
        this.adresse = disponibiliesMedecin.getMedecin().getAdresse();
        this.numeroTelephone = disponibiliesMedecin.getMedecin().getNumeroTelephone();
        this.email = disponibiliesMedecin.getMedecin().getEmail();
        for (Specialites specialitesItem : disponibiliesMedecin.getMedecin().getSpecialites()){
            this.specialiteMedicales.add(specialitesItem.getSpecialiteMedicale());
        }

        for (Jours item : disponibiliesMedecin.getJours()){
            this.joursEnums.add(item.getLabel());
        }


    }
}
