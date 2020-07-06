package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.TechnicalService;
import com.lib.stats.helper.LibStatsHelper.service.TechnicalServiceService;
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
@WebMvcTest(TechnicalServiceController.class)
public class TechnicalServiceControllerTest {

    @MockBean
    private TechnicalServiceService service;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllTechnicalServices() throws Exception {

        TechnicalService technicalService = new TechnicalService();
        technicalService.setId(11);
        technicalService.setYear(2020);
        technicalService.setSemester("Summer");

        List<TechnicalService> technicalServiceList = Arrays.asList(technicalService);

        when(service.getAllTechnicalServices()).thenReturn(technicalServiceList);

        this.mockMvc.perform(get("/api/technicalServices"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].semester")
                        .value("Summer"));
    }
}
