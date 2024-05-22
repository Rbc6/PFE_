package com.project.webservice.entities.dto;

import com.project.webservice.entities.RendezVous;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RenvezvousResponseDTO {
    private String title ;
    private String start;
    private String end ;
    private RendezVous rendezVous;

    public RenvezvousResponseDTO(RendezVous rendezVous) {
        this.title = "Numéro :"+ String.valueOf(rendezVous.getDossier().getNumero()) +" Nom : "+rendezVous.getDossier().getPrenom()+" "+rendezVous.getDossier().getNom();
        this.start = rendezVous.getDateTime().toString();
        this.end = rendezVous.getDateTime().plusMinutes(15).toString();
        this.rendezVous = rendezVous;
    }
}
