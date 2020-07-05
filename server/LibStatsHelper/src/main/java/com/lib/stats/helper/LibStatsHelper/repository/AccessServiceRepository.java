package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccessServiceRepository extends JpaRepository<AccessService, Integer> {

    AccessService findAccessServiceBySemester(String semester);

    List<AccessService> findAccessServiceByYearEquals(int year);
}

