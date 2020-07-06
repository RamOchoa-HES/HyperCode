package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.InterLibraryLoan;
import com.lib.stats.helper.LibStatsHelper.service.InterLibraryLoanService;
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
@WebMvcTest(InterLibraryLoanController.class)
public class InterLibraryLoanControllerTest {

    @MockBean
    private InterLibraryLoanService service;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllInterLibraryLoan() throws Exception {

        InterLibraryLoan interLibraryLoan = new InterLibraryLoan();
        interLibraryLoan.setId(11);
        interLibraryLoan.setYear(2020);
        interLibraryLoan.setSemester("Summer");

        List<InterLibraryLoan> interLibraryLoans = Arrays.asList(interLibraryLoan);

        when(service.getAllInterLibrayLoans()).thenReturn(interLibraryLoans);

        this.mockMvc.perform(get("/api/interLibraryLoans"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id")
                        .value(11))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].year")
                        .value(2020))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].semester")
                        .value("Summer"));
    }
}
