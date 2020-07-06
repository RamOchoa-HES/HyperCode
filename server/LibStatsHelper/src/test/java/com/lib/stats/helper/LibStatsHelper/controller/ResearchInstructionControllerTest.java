package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.ResearchInstruction;
import com.lib.stats.helper.LibStatsHelper.service.ResearchInstructionService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ResearchInstructionController.class)
public class ResearchInstructionControllerTest {

    @MockBean
    private ResearchInstructionService service;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllResearchInstruction() throws Exception {

        ResearchInstruction researchInstruction = new ResearchInstruction();
        researchInstruction.setId(11);
        researchInstruction.setYear(2020);
        researchInstruction.setSemester("Summer");

        List<ResearchInstruction> researchInstructionList = Arrays.asList(researchInstruction);

        when(service.getAllResearchInstructions()).thenReturn(researchInstructionList);

        this.mockMvc.perform(get("/api/researchInstructions"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].semester")
                        .value("Summer"));
    }
}
