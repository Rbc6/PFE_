package com.project.webservice.entities.dto;

public class SpecialtyCount {
    private String sp;
    private Long nb;

    public SpecialtyCount(String sp, Long nb) {
        this.sp = sp;
        this.nb = nb;
    }

    public String getSp() {
        return sp;
    }

    public void setSp(String sp) {
        this.sp = sp;
    }

    public Long getNb() {
        return nb;
    }

    public void setNb(Long nb) {
        this.nb = nb;
    }
}
