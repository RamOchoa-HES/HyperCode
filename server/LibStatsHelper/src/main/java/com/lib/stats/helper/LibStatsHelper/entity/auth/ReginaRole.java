package com.lib.stats.helper.LibStatsHelper.entity.auth;

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
@Table(name = "ROLE_TBL")
public class ReginaRole {

    @Id
    @GeneratedValue
    private int roleId;

    private String role;
}
