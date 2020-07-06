package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.EducationService;
import com.lib.stats.helper.LibStatsHelper.entity.ElectronicInformation;
import com.lib.stats.helper.LibStatsHelper.repository.ElectronicInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElectronicInformationService {

    @Autowired
    private ElectronicInformationRepository repository;

    public List<ElectronicInformation> getAllElectronicInformation(){
        return this.repository.findAll();
    }

    public ElectronicInformation createElectronicInformation(ElectronicInformation electronicInformation){
        return this.repository.save(electronicInformation);
    }
}
