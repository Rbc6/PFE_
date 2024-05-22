package com.project.webservice.services;

import com.project.webservice.entities.Dossier;
import com.project.webservice.entities.dto.DossierDTO;

import java.util.List;
import java.util.Optional;


public interface IDossierService {
    List<Dossier> getAllDossiers();

    Optional<Dossier> getDossierById(long id);

    Optional<Dossier> getDossierByNumero(long numero);

    Dossier createDossier(DossierDTO dossier);

    Dossier updateDossier(long id, DossierDTO dossier);

    void deleteDossier(long id);
}
