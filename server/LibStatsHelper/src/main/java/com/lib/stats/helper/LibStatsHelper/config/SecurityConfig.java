package com.lib.stats.helper.LibStatsHelper.config;

import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaRole;
import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaUser;
import com.lib.stats.helper.LibStatsHelper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetailsService userDetailsServiceBean(){
        return new CustomUserDetailsService(userRepository);
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsServiceBean()).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .authorizeRequests()
                .antMatchers("/api/accessServices/**").hasAnyAuthority("ADMIN", "ACCESS_SERVICES")
                .antMatchers("/api/ercMarketings/**").hasAnyAuthority("ADMIN", "ERC")
                .antMatchers("/api/educationServices/**").hasAnyAuthority("ADMIN", "EDUCATION_SERVICE")
                .antMatchers("/api/interLibraryLoans/**").hasAnyAuthority("ADMIN", "INTERLIBRARY")
                .antMatchers("/api/researchInstructions/**").hasAnyAuthority("ADMIN", "RESEARCH_INSTRUCTION")
                .antMatchers("/api/technicalServices/**").hasAnyAuthority("ADMIN", "TECHNICAL_SERVICE")
                .antMatchers("/api/electronicInformationServices/**").hasAnyAuthority("ADMIN", "ELECTRONIC_INFORMATION")
                .antMatchers("/api/validateLogin/**").permitAll()
                .anyRequest().authenticated()
                .and().formLogin()
                .and().httpBasic();

    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "OPTIONS", "PUT", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.addAllowedOrigin("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
