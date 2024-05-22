package com.project.webservice.repositories;

import com.project.webservice.entities.DisponibiliesMedecin;
import com.project.webservice.entities.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisponibilisiesMedecinRepository extends JpaRepository<DisponibiliesMedecin , Long> {
    DisponibiliesMedecin findDisponibiliesMedecinByMedecin(Medecin medecin);
}
