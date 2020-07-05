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
@Table(name = "EDUCATION_SERVICE_TBL")
public class EducationService {
    @Id
    @GeneratedValue
    private int id;
    private int year;
    private String semester;
    private int numberOfPrograms;
    private int numberInAttendance;
    private int feedbackWallResponses;
    private int facebookFollowers;
    private int instagramFollowers;
    private int patreonMonth1;
    private String patreonMonth1Name;
    private int patreonMonth2;
    private String patreonMonth2Name;
    private int patreonMonth3;
    private String patreonMonth3Name;
    private int patreonMonth4;
    private String patreonMonth4Name;
}

