package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.EducationService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationServiceRepository extends JpaRepository<EducationService, Integer> {

    EducationService findEducationServiceBySemesterContaining(String semester);

    List<EducationService> findAllByYearEquals(int year);
}
