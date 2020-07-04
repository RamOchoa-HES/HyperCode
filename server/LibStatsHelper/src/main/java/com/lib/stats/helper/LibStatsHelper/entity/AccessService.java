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
@Table(name = "ACCESS_SERVICES_TBL")
public class AccessService {
    @Id
    @GeneratedValue
    private int id;
    private int year;
    private String semester;
    private int physicalItem;
    private int groupStudyRoom;
    private int numberOfCourseReserves;
    private int numberOfItemReserves;
    private String patronMonth1;
    private int patronMonthCount1;
    private String patronMonth2;
    private int patronMonthCount2;
    private String patronMonth3;
    private int patronMonthCount3;
    private String patronMonth4;
    private int patronMonthCount4;
}
