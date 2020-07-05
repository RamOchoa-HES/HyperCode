package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.service.AccessServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController(value ="/api/access")
public class AccessServiceController {

    @Autowired
    private AccessServiceService accessServiceService;

    @GetMapping(value = "/")
    public ResponseEntity<List<AccessService>> getAllAccessServices(){
        return ResponseEntity.ok(accessServiceService.getAccessServices());
    }

}
