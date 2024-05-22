package com.project.webservice.entities.dto;


import com.project.webservice.entities.Medecin;
import com.project.webservice.entities.Specialites;
import com.project.webservice.entities.emun.SpecialiteMedicale;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedcinResponseDTO {

    private Long id;
    private String code;
    private String name;
    private String adresse;
    private String numeroTelephone;
    private String email;

    private List<SpecialiteMedicale> specialiteMedicales = new ArrayList<>(){};

    public MedcinResponseDTO(Medecin medecin) {
        this.id = medecin.getId();
        this.code = medecin.getCode();
        this.name = medecin.getPrenom() + " " + medecin.getNom() ;
        this.adresse = medecin.getAdresse();
        this.numeroTelephone = medecin.getNumeroTelephone();
        this.email = medecin.getEmail();

        for (Specialites specialitesItem : medecin.getSpecialites()){
           this.specialiteMedicales.add(specialitesItem.getSpecialiteMedicale());
        }

    }
}
