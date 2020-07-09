package com.lib.stats.helper.LibStatsHelper;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaRole;
import com.lib.stats.helper.LibStatsHelper.entity.auth.ReginaUser;
import com.lib.stats.helper.LibStatsHelper.repository.AccessServiceRepository;
import com.lib.stats.helper.LibStatsHelper.repository.RoleRepository;
import com.lib.stats.helper.LibStatsHelper.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibStatsHelperApplication  {

	public static void main(String[] args) {
		SpringApplication.run(LibStatsHelperApplication.class, args);
	}
}
