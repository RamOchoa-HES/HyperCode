package com.lib.stats.helper.LibStatsHelper.config;

import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaUser;
import com.lib.stats.helper.LibStatsHelper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Arrays;

public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        final ReginaUser reginaUser = userRepository.findUserByUsername(s);

        return new User(reginaUser.getPassword(), reginaUser.getPassword(),
                Arrays.asList(new SimpleGrantedAuthority(reginaUser.getRole().getRole())));
    }


}
