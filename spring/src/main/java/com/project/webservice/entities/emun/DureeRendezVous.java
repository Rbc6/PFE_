package com.project.webservice.entities.emun;

public enum  DureeRendezVous {
    DUREE_15(15),
    DUREE_30(30),
    DUREE_45(45),
    DUREE_60(60);

    private final int minutes;

    DureeRendezVous(int minutes) {
        this.minutes = minutes;
    }

    public int getMinutes() {
        return minutes;
    }
}
