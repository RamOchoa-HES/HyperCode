package com.lib.stats.helper.LibStatsHelper.entity.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER_TBL")
public class ReginaUser {

    @Id
    @GeneratedValue
    private int userId;

    private String username;

    private String password;

    @OneToOne(targetEntity = com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaRole.class)
    @JoinColumn(name = "role_id")
    private ReginaRole role;

    private String email;

    private String firstName;

    private String lastName;

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }
}
