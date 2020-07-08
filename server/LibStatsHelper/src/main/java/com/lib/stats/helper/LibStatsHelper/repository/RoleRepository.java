package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<ReginaRole, Integer> {
}
