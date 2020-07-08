package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.ERCMarketing;
import com.lib.stats.helper.LibStatsHelper.service.ERCMarketingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ERCMarketingController {

    @Autowired
    ERCMarketingService service;

    @GetMapping("/ercMarketings")
    public List<ERCMarketing> getAllERCMarketing(){
        return service.getAllERCMarketing();
    }

    @PostMapping("/ercMarketings")
    public ERCMarketing createERCMarketing(@RequestBody ERCMarketing ercMarketing){
        return service.createERCMarketing(ercMarketing);
    }
}
