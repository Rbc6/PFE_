package com.project.webservice.entities;

import com.project.webservice.entities.emun.ExBio;
import com.project.webservice.entities.emun.ParaMed;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Paramedicales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String paraMed;

    public Paramedicales(String paraMed) {
        this.paraMed = paraMed;
    }
}
