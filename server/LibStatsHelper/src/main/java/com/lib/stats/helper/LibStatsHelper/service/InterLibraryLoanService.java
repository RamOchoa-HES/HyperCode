package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.InterLibraryLoan;
import com.lib.stats.helper.LibStatsHelper.repository.InterLibraryLoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterLibraryLoanService {

    @Autowired
    InterLibraryLoanRepository repository;

    public List<InterLibraryLoan> getAllInterLibrayLoans(){
        return repository.findAll();
    }

    public InterLibraryLoan createInterLibraryLoan(InterLibraryLoan interLibraryLoan){
        return repository.save(interLibraryLoan);
    }
}
