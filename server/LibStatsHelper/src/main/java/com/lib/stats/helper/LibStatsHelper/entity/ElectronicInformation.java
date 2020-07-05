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
@Table(name = "ELECTRONIC_INFORMATION_TBL")
public class ElectronicInformation {

    @Id
    @GeneratedValue
    private int id;

    private int year;
    private String semester;
    private int uniquePageViewsInASession;
    private int uniqueUserSessions;
    private int bibliographicDatabasesFullText;
    private int bibliographicDatabasesSearches;
    private int fullTextDatabasesFullText;
    private int fullTextDatabasesSearches;
    private int edsSearches;
    private int edsSessions;
    private int edsTotalFullText;
    private int edsAbstract;
    private int ebooksUsed;
    private int streamVideosViewed;
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
