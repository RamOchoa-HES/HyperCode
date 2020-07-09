package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccessServiceRepository extends JpaRepository<AccessService, Integer> {

    AccessService findAccessServiceBySemesterContaining(String semester);

    List<AccessService> findAllByYearEquals(int year);
}

