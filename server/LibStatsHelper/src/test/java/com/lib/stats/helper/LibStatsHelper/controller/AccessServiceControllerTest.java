package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.service.AccessServiceService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
@AutoConfigureMockMvc
public class AccessServiceControllerTest {

    @Mock
    private AccessServiceService service;

    private MockMvc mockMvc;

    @Before
    public void setUp(){

        final AccessServiceController controller = new AccessServiceController();
        controller.setService(service);

        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAccessServices() throws Exception {

        AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        List<AccessService> accessServices = Arrays.asList(accessService);

        when(service.getAccessServices()).thenReturn(accessServices);

        this.mockMvc.perform(get("/api/accessServices"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(MockMvcResultMatchers.jsonPath("$.accessServices[0].year")
                        .value(2020));

    }

    @Test
    public void testGetAccessServiceById() throws Exception {

        AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        when(service.getAccessServiceById(11)).thenReturn(accessService);

        this.mockMvc.perform(get("/api/accessServices/id/11"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.year")
                        .value(2020));

    }

}
