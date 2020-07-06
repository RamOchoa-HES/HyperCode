package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.ElectronicInformation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ElectronicInformationRepository extends JpaRepository<ElectronicInformation, Integer> {

    ElectronicInformation findElectronicInformationBySemesterContaining(String semester);

    List<ElectronicInformation> findAllByYearEquals(int year);
}
