package com.project.webservice.entities.dto;

import com.project.webservice.entities.emun.SpecialiteMedicale;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedcinDTO {



    private String nom;

    private String prenom;



    private String adresse;

    private String numeroTelephone;

    private String email;

    private List<SpecialiteMedicale> specialiteMedicales;


}
