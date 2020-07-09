package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.ResearchInstruction;
import com.lib.stats.helper.LibStatsHelper.service.ResearchInstructionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ResearchInstructionController {

    @Autowired
    ResearchInstructionService service;

    @GetMapping("/researchInstructions")
    public List<ResearchInstruction> getAllResearchInstructions(){
        return service.getAllResearchInstructions();
    }

    @PostMapping("/researchInstructions")
    public ResearchInstruction createResearchInstruction(@RequestBody ResearchInstruction researchInstruction){
        return service.createResearchInstruction(researchInstruction);
    }
}
