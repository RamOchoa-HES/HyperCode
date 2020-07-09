package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.InterLibraryLoan;
import com.lib.stats.helper.LibStatsHelper.service.InterLibraryLoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class InterLibraryLoanController {

    @Autowired
    InterLibraryLoanService service;

    @GetMapping("/interLibraryLoans")
    public List<InterLibraryLoan> getAllInterLibraryLoan(){
        return service.getAllInterLibrayLoans();
    }

    @PostMapping("/interLibraryLoans")
    public InterLibraryLoan createInterLibraryLoan(@RequestBody InterLibraryLoan interLibraryLoan){
        return service.createInterLibraryLoan(interLibraryLoan);
    }
}
