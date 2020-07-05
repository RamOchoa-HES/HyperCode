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
@Table(name = "INTERLIBRARY_LOAN_TBL")
public class InterLibraryLoan {

    @Id
    @GeneratedValue
    private int id;

    private int year;
    private String semester;
    private int numOfRequestedArticlesBorrowing;
    private int numOfRequestedArticlesLending;
    private int numOfRequestedBooksBorrowing;
    private int numOfRequestedBooksLending;
    private int getItNow;
    private int docDeliveryAlreadyOwned;
    private int docDeliveryFoundFree;
    private int docDeliveryPurchased;
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
