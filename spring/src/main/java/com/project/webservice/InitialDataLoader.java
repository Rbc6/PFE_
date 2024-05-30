package com.project.webservice;

import com.project.webservice.entities.*;
import com.project.webservice.entities.emun.*;
import com.project.webservice.repositories.*;
import com.project.webservice.services.IUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class InitialDataLoader implements CommandLineRunner {
    final IUserService userService;
    final MedecinRepository medecinRepository;

    final JoursRepository joursRepository;

    final SpecialitiesRepository specialitiesRepository;
    final AllergiesRepository allergiesRepository;
    final ApcisRepository apcisRepository;
    final ExRadioRepository exRadioRepository;
    final ExBioRepository exBioRepository;
    final ParaMedRepository paraMedRepository;
    final MedicamentRepository medicamentRepository;
    final ActeMedRepository acteMedRepository;

    public InitialDataLoader(IUserService userService, MedecinRepository medecinRepository, JoursRepository joursRepository, SpecialitiesRepository specialitiesRepository, AllergiesRepository allergiesRepository, ApcisRepository apcisRepository, ExRadioRepository exRadioRepository, ExBioRepository exBioRepository, ParaMedRepository paraMedRepository, MedicamentRepository medicamentRepository, ActeMedRepository acteMedRepository) {
        this.userService = userService;
        this.medecinRepository = medecinRepository;
        this.joursRepository = joursRepository;
        this.specialitiesRepository = specialitiesRepository;
        this.allergiesRepository = allergiesRepository;
        this.apcisRepository = apcisRepository;
        this.exRadioRepository = exRadioRepository;
        this.exBioRepository = exBioRepository;
        this.paraMedRepository = paraMedRepository;
        this.medicamentRepository = medicamentRepository;
        this.acteMedRepository = acteMedRepository;
    }

    @Override
    public void run(String... args) throws Exception {
// Ajout premier administrateur
        if (userService.findByUserName("admin").isPresent()) {
            System.out.println("L'admin existe déjà, aucune action nécessaire.");
        } else {
            Utilisateur user = new Utilisateur();
            user.setActive(true);
            user.setPassword("12369**");
            user.setUserName("admin");
            user.setFirstName("Administrateur");
            user.setLastName("Global");
            user.setEmail("admin@gmail.com");
            user.setRole(Role.ADMIN);
            user.setPhoneNumber("00000000");

            try {
                userService.createUser(user);
                System.out.println("Admin ajouté avec succès !");
            } catch (Exception e) {
                throw new Exception("Erreur lors de la création de l'administrateur.", e);
            }

        }
// Ajout des Jours
        if (joursRepository.findAll().size() == 0) {

            List<Jours> joursList = new ArrayList<>() {
            };
            joursList.add(new Jours(JoursEnum.LUNDI));
            joursList.add(new Jours(JoursEnum.MARDI));
            joursList.add(new Jours(JoursEnum.MERCREDI));
            joursList.add(new Jours(JoursEnum.JEUDI));
            joursList.add(new Jours(JoursEnum.VENDREDI));
            joursList.add(new Jours(JoursEnum.SAMEDI));
            joursList.add(new Jours(JoursEnum.DIMANCHE));
            try {
                joursRepository.saveAll(joursList);
                System.out.println("les joues sont ajouté avec succès !");
            } catch (Exception e) {
                throw new Exception("Erreur lors de la création des jours.", e);
            }
        } else {

            System.out.println("les joues existent déjà, aucune action nécessaire.");
        }
// Ajout des specialités des médecins
        if (specialitiesRepository.findAll().size() == 0) {

            List<Specialites> specialitesList = new ArrayList<>() {
            };
            for (SpecialiteMedicale specialite : SpecialiteMedicale.values()) {

                specialitesList.add(new Specialites(specialite));
            }
            try {
                specialitiesRepository.saveAll(specialitesList);
                System.out.println("les specialités sont ajouté avec succès !");
            } catch (Exception e) {
                throw new Exception("Erreur lors de la création des specialités.", e);
            }
        } else {

            System.out.println("les specialités existent déjà, aucune action nécessaire.");
        }
    }
}
