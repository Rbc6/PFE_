package com.project.webservice.repositories;

import com.project.webservice.entities.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DossierRepository extends JpaRepository<Dossier , Long> {

    Optional<Dossier> findByNumero(long numero);
}
