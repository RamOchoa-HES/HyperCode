package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.TechnicalService;
import com.lib.stats.helper.LibStatsHelper.repository.TechnicalServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnicalServiceService {

    @Autowired
    TechnicalServiceRepository repository;

    public List<TechnicalService> getAllTechnicalServices(){
        return repository.findAll();
    }

    public TechnicalService createTechnicalService(TechnicalService technicalService){
        return repository.save(technicalService);
    }
}
