package com.lib.stats.helper.LibStatsHelper.service;

import com.lib.stats.helper.LibStatsHelper.entity.ResearchInstruction;
import com.lib.stats.helper.LibStatsHelper.repository.ResearchInstructionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResearchInstructionService {

    @Autowired
    ResearchInstructionRepository repository;

    public List<ResearchInstruction> getAllResearchInstructions(){
        return repository.findAll();
    }

    public ResearchInstruction createResearchInstruction(ResearchInstruction researchInstruction){
        return repository.save(researchInstruction);
    }
}
