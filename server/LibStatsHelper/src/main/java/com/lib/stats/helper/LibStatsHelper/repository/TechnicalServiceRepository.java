package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.TechnicalService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TechnicalServiceRepository  extends JpaRepository<TechnicalService, Integer> {

    TechnicalService findTechnicalServiceBySemesterContaining(String semester);

    List<TechnicalService> findAllByYearEquals(int year);
}
