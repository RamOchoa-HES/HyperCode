package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.service.AccessServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
    public AccessService findProductById(@PathVariable int id) {
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

    @DeleteMapping("/delete/{id}")
    public String deleteAccessService(@PathVariable int id) {
        return service.deleteAccessService(id);
    }

}
