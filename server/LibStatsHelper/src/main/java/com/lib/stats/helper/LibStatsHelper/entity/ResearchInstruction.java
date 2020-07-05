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
@Table(name = "RESEARCH_INSTRUCTION_TBL")
public class ResearchInstruction {

    @Id
    @GeneratedValue
    private int id;

    private int year;
    private String semester;
    private int numOfLibraryInstructions;
    private int numOfStudentInstructions;
    private int directionalType;
    private int referenceType;
    private int technicalType;
    private int techLiteracyType;
    private int reginaLibraryLocation;
    private int ercLocation;
    private int learningCommonsLocation;
    private int contactedLibrarianLocation;
    private int inPersonFormat;
    private int chatTextFormat;
    private int emailFormat;
    private int phoneFormat;
    private int zoomFormat;
    private int undergraduateStudent;
    private int graduateStudent;
    private int doctoralStudent;
    private int facultyStaff;
    private int alumni;
    private int nhcUc;
    private int riseMember;
    private int unknown;
    private int onlineStudent;
    private int nonAffiliated;
    private int patreonMonth1;
    private String patreonMonth1Name;
    private int patreonMonth2;
    private String patreonMonth2Name;
    private int patreonMonth3;
    private String patreonMonth3Name;
    private int patreonMonth4;
    private String patreonMonth4Name;
    private boolean isCorrect;
}
