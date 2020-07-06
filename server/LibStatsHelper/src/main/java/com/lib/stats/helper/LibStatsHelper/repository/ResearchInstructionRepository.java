package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.ResearchInstruction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResearchInstructionRepository extends JpaRepository<ResearchInstruction, Integer> {

    ResearchInstruction findResearchInstructionBySemesterContaining(String semester);

    List<ResearchInstruction> findAllByYearEquals(int year);
}
