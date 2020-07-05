package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.service.AccessServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/access")
public class AccessServiceController {
    @Autowired
    private AccessServiceService service;

    @PostMapping("/addAccessService")
    public AccessService addAccessService(@RequestBody AccessService accessservice) {
        return service.saveAccessService(accessservice);
    }

    @PostMapping("/addAccessServices")
    public List<AccessService> addAccessServices(@RequestBody List<AccessService> accessservices) {
        return service.saveAccessServices(accessservices);
    }

    @GetMapping("/accessservices")
    public List<AccessService> findAllAccessServices() {
        return service.getAccessServices();
    }

    @GetMapping("/accessserviceById/{id}")
    public AccessService findAccessServiceById(@PathVariable int id) {
        return service.getAccessServiceById(id);
    }

    @GetMapping("/accessservice/{semester}")
    public AccessService findAccessServiceBySemester(@PathVariable String semester) {
        return service.getAccessServiceBySemester(semester);
    }

//    @PutMapping("/update")
//    public AccessService updateAccessService(@RequestBody AccessService accessservice) {
//        return service.updateAccessService(accessservice);
//    }

    @GetMapping
    public ResponseEntity<List<AccessService>> getAllAccessServices() {
        return ResponseEntity.ok(service.getAccessServices());
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAccessService(@PathVariable int id) {
        return service.deleteAccessService(id);
    }

}
