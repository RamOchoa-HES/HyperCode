package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccessServiceRepository extends JpaRepository<AccessService, Integer> {
    AccessService findBySemester(String semester);
}

