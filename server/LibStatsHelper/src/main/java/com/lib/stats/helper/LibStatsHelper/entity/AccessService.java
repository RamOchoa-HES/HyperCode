package com.lib.stats.helper.LibStatsHelper.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table

public class AccessService {
    @Id
    @GeneratedValue
    private int idacceesservice;
//    test
    private int countpatronaccessservice;
    private int countgrpstdyr;
    private int countcrsreservetms;
    private int countcrsreserves;
    private String fmonth;
    private int countfmonth;
    private String smonth;
    private int countsmonth;
    private String tmonth;
    private int counttmonth;
    private String fomonth;
    private int countfomonth;
}
