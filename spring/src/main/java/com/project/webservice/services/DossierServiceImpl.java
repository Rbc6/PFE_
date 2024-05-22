package com.project.webservice.services;

import com.project.webservice.entities.Dispensaire;
import com.project.webservice.entities.Dossier;
import com.project.webservice.entities.dto.DossierDTO;
import com.project.webservice.repositories.DispensaireRepository;
import com.project.webservice.repositories.DossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DossierServiceImpl implements IDossierService {

    final
    DossierRepository dossierRepository;
    @Autowired
    DispensaireRepository dispensaireRepository;

    public DossierServiceImpl(DossierRepository dossierRepository) {
        this.dossierRepository = dossierRepository;
    }

    @Override
    public List<Dossier> getAllDossiers() {
        return dossierRepository.findAll();
    }
    @Override
    public Optional<Dossier> getDossierById(long id) {
        return dossierRepository.findById(id);
    }

    @Override
    public Optional<Dossier> getDossierByNumero(long numero) {
        return dossierRepository.findByNumero(numero);
    }

    @Override
    public Dossier createDossier(DossierDTO dossierDTO) {
        Dispensaire dispensaire = dispensaireRepository.findById(dossierDTO.getDisponsaireId()).orElse(null);
        Dossier dossier = new Dossier(dossierDTO);
        dossier.setDispensaire(dispensaire);
        return dossierRepository.save(dossier);
    }
    @Override
    public Dossier updateDossier(long id, DossierDTO dossierDTO) {
        System.out.println(dossierDTO.getNumero());
        Dossier dossier = new Dossier(dossierDTO);
        System.out.println(dossier.getAdresse());
        if (dossierRepository.existsById(id)) {
            dossier.setId(id);
            dossier.setNumero(dossierDTO.getNumero());
            return dossierRepository.save(dossier);
        }
        return null;
    }
    @Override
    public void deleteDossier(long id) {
        dossierRepository.deleteById(id);
    }
}
