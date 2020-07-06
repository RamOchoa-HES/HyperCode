package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.ERCMarketing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ERCMarketingRepository extends JpaRepository<ERCMarketing, Integer> {

    ERCMarketing findERCMarketingBySemesterContaining(String semester);

    List<ERCMarketing> findAllByYearEquals(int year);
}
