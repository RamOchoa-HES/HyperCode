package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.TechnicalService;
import com.lib.stats.helper.LibStatsHelper.service.TechnicalServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TechnicalServiceController {

    @Autowired
    TechnicalServiceService service;

    @GetMapping("/technicalServices")
    public List<TechnicalService> getAllTechnicalServices(){
        return service.getAllTechnicalServices();
    }

    @PostMapping("/technicalServices")
    public TechnicalService createTechnicalService(@RequestBody TechnicalService technicalService){
        return service.createTechnicalService(technicalService);
    }
}
