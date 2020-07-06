package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.EducationService;
import com.lib.stats.helper.LibStatsHelper.repository.EducationServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationServiceService {

    @Autowired
    private EducationServiceRepository repository;

    public List<EducationService> getAllEducationServices(){
        return this.repository.findAll();
    }

    public EducationService createEducationService(EducationService educationService){
        return this.repository.save(educationService);
    }
}
