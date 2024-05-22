package com.project.webservice.entities.dto;

import com.project.webservice.entities.DisponibiliesMedecin;
import com.project.webservice.entities.Jours;
import com.project.webservice.entities.Specialites;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisponibilititsResponseDTOV2 {
    private long id ;
    private String name;
    private String adresse;
    private String numeroTelephone;
    private String email;

    private StringBuilder specialiteMedicales = new StringBuilder();

    private StringBuilder joursEnums = new StringBuilder();

    public DisponibilititsResponseDTOV2(DisponibiliesMedecin disponibiliesMedecin) {
        this.id = disponibiliesMedecin.getId();
        this.name = disponibiliesMedecin.getMedecin().getPrenom() + " " + disponibiliesMedecin.getMedecin().getNom();
        this.adresse = disponibiliesMedecin.getMedecin().getAdresse();
        this.numeroTelephone = disponibiliesMedecin.getMedecin().getNumeroTelephone();
        this.email = disponibiliesMedecin.getMedecin().getEmail();
        for (Specialites specialitesItem : disponibiliesMedecin.getMedecin().getSpecialites()){
            this.specialiteMedicales.append(" "+specialitesItem.getSpecialiteMedicale()) ;
        }

        for (Jours item : disponibiliesMedecin.getJours()){
            this.joursEnums.append(" "+item.getLabel());
        }


    }
}
