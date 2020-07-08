package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.ElectronicInformation;
import com.lib.stats.helper.LibStatsHelper.service.ElectronicInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ElectronicInformationController {

    @Autowired
    ElectronicInformationService service;

    @GetMapping("/electronicInformationServices")
    public List<ElectronicInformation> getAllElectronicInformationService(){
        return service.getAllElectronicInformation();
    }

    @PostMapping("/electronicInformationServices")
    public ElectronicInformation createElectronicInformation(@RequestBody ElectronicInformation electronicInformation){
        return service.createElectronicInformation(electronicInformation);
    }
}
