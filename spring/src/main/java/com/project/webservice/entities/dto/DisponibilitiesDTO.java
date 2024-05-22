package com.project.webservice.entities.dto;

import com.project.webservice.entities.emun.JoursEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisponibilitiesDTO {

    private long idMedcin ;
    private List<JoursEnum> joursEnums = new ArrayList<>(){};
}
