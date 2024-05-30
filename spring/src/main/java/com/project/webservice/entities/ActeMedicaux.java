package com.project.webservice.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.webservice.entities.emun.ActeMed;
import com.project.webservice.entities.emun.SpecialiteMedicale;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ActeMedicaux {



        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        private String ActeMedical;

        public ActeMedicaux(String ActeMedical){
            this.ActeMedical = ActeMedical;
        }


    }


