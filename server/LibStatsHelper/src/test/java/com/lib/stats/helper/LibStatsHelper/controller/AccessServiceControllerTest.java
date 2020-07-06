package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.service.AccessServiceService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AccessServiceController.class)
public class AccessServiceControllerTest {

    @MockBean
    private AccessServiceService service;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAccessServices() throws Exception {

        final AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        List<AccessService> accessServices = Arrays.asList(accessService);

        when(service.getAccessServices()).thenReturn(accessServices);

        this.mockMvc.perform(get("/api/accessServices"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].semester")
                        .value("Summer"));

    }

    @Test
    public void testGetAccessServiceById() throws Exception {

        final AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        when(service.getAccessServiceById(11)).thenReturn(accessService);

        this.mockMvc.perform(get("/api/accessServices/id/11"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$.semester")
                        .value("Summer"));

    }

    @Test
    public void testCreateAccessService() throws Exception {

        final AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        when(service.saveAccessService(any())).thenReturn(accessService);

        this.mockMvc.perform(post("/api/accessService")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"id\": 11, \"year\": 2020, \"semester\": \"Summer\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$.semester")
                        .value("Summer"));
    }

    @Test
    public void testCreateAccessServices() throws Exception {

        final AccessService accessService1 = new AccessService();
        accessService1.setId(11);
        accessService1.setYear(2020);
        accessService1.setSemester("Summer");

        final AccessService accessService2 = new AccessService();
        accessService2.setId(22);
        accessService2.setYear(1990);
        accessService2.setSemester("Fall");

        List<AccessService> accessServices = Arrays.asList(accessService1, accessService2);

        when(service.saveAccessServices(any())).thenReturn(accessServices);

        this.mockMvc.perform(post("/api/accessServices")
                .contentType(MediaType.APPLICATION_JSON)
                .content("[{\"id\": 11, \"year\": 2020, \"semester\": \"Summer\"}, {\"id\": 22, \"year\": 1990, \"semester\": \"Fall\"}]")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].semester")
                        .value("Summer"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id")
                        .value(22))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].year")
                        .value(1990))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].semester")
                        .value("Fall"));
    }

    @Test
    public void testDeleteAccessService() throws Exception {

        final AccessService accessService = new AccessService();
        accessService.setId(11);
        accessService.setYear(2020);
        accessService.setSemester("Summer");

        String deleteMessage = "Access Service Entry has been removed - entry id:" + accessService.getId();

        when(service.deleteAccessService(anyInt())).thenReturn(deleteMessage);

        this.mockMvc.perform(delete("/api/accessServices/11")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"id\": 11, \"year\": 2020, \"semester\": \"Summer\"}")
                            .accept(MediaType.APPLICATION_JSON))
                            .andExpect(status().isOk())
                            .andExpect(content().string(deleteMessage));
    }
}
