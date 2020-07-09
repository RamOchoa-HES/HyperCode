package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<ReginaUser, Integer> {

    ReginaUser findUserByUsername(String username);
}
