package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.ERCMarketing;
import com.lib.stats.helper.LibStatsHelper.repository.ERCMarketingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ERCMarketingService {

    @Autowired
    ERCMarketingRepository repository;

    public List<ERCMarketing> getAllERCMarketing(){
        return repository.findAll();
    }

    public ERCMarketing createERCMarketing(ERCMarketing ercMarketing){
        return repository.save(ercMarketing);
    }
}
