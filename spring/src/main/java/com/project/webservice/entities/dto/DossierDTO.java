package com.project.webservice.entities.dto;

import com.project.webservice.entities.emun.Genre;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DossierDTO {
    private long id;
    private String nom;
    private String prenom;
    private String cin;
    private long numero;
    private String adresse;
    private Genre genre;
    private LocalDate dateNaissance;
    private String email;
    private String telephone;
    private long disponsaireId;
}
