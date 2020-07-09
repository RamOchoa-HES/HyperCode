package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.EducationService;
import com.lib.stats.helper.LibStatsHelper.service.EducationServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EducationServiceController {

    @Autowired
    private EducationServiceService service;

    @GetMapping("/educationServices")
    public List<EducationService> getAllEducationService(){
        return service.getAllEducationServices();
    }

    @PostMapping("/educationServices")
    public EducationService createEducationService(@RequestBody EducationService educationService){
        return service.createEducationService(educationService);
    }
}
