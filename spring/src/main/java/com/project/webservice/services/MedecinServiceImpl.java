package com.project.webservice.services;

import com.project.webservice.entities.Medecin;
import com.project.webservice.repositories.MedecinRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedecinServiceImpl implements IMedcinService {
    private final MedecinRepository medecinRepository;

    public MedecinServiceImpl(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }
    @Override
    public List<Medecin> getAllMedecins() {
        return medecinRepository.findAll();
    }

    @Override
    public Optional<Medecin> getMedecinById(Long id) {
        return medecinRepository.findById(id);
    }

    @Override
    public Optional<Medecin> getMedecinByCode(String code) {
        return medecinRepository.findByCode(code);
    }

    @Override
    public Medecin createMedecin(Medecin medecin) {
        return medecinRepository.save(medecin);
    }

    @Override
    public Medecin updateMedecin(Long id, Medecin medecin) {
        if (medecinRepository.existsById(id)) {
            medecin.setId(id);

            return medecinRepository.save(medecin);
        }
        return null;
    }

    @Override
    public void deleteMedecin(Long id) {
        medecinRepository.deleteById(id);
    }
}
