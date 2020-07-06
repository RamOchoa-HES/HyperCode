package com.lib.stats.helper.LibStatsHelper.repository;

import com.lib.stats.helper.LibStatsHelper.entity.InterLibraryLoan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterLibraryLoanRepository extends JpaRepository<InterLibraryLoan, Integer> {

    InterLibraryLoan findInterLibraryLoanBySemesterContaining(String semester);

    List<InterLibraryLoan> findAllByYearEquals(int year);
}
