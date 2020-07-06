package com.lib.stats.helper.LibStatsHelper;

import com.lib.stats.helper.LibStatsHelper.entity.AccessService;
import com.lib.stats.helper.LibStatsHelper.repository.AccessServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibStatsHelperApplication implements CommandLineRunner {

	@Autowired
	private AccessServiceRepository accessServiceRepository;

	public static void main(String[] args) {
		SpringApplication.run(LibStatsHelperApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		AccessService accessService = new AccessService();
		accessService.setId(11);
		accessService.setYear(2020);
		accessService.setSemester("Summer");

		accessServiceRepository.save(accessService);
	}
}
