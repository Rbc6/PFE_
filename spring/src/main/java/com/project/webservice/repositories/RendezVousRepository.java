package com.project.webservice.repositories;

import com.project.webservice.entities.DisponibiliesMedecin;
import com.project.webservice.entities.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RendezVousRepository extends JpaRepository<RendezVous , Long> {
    List<RendezVous> findRendezVousByDisponibiliesMedecin(DisponibiliesMedecin disponibiliesMedecin);

    List<RendezVous> findRendezVousByDossierId(long id);
}
