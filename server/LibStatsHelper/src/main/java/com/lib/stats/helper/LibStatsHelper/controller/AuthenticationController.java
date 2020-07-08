package com.lib.stats.helper.LibStatsHelper.controller;

import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaUser;
import com.lib.stats.helper.LibStatsHelper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    Logger logger = Logger.getLogger(AuthenticationController.class.getName());

    @PostMapping("/validateLogin")
    public ReginaUser validateLogIn(@RequestBody ReginaUser reginaUser){
        ReginaUser authenticated = null;
          try{
              authenticated = userRepository.findUserByUsername(reginaUser.getUsername());
          } catch(Exception ex){
              logger.warning("Unable to authenticate error= "+ ex.getMessage());
          }

        return authenticated;
    }
}
