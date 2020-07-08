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
public class LibStatsHelperApplication implements CommandLineRunner {

	@Autowired
	private AccessServiceRepository accessServiceRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(LibStatsHelperApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		seedAccessServices();
		seedRolesAndUsers();
	}

	private void seedAccessServices() {

		AccessService accessService = new AccessService();
		accessService.setId(1);
		accessService.setYear(2020);
		accessService.setSemester("Summer");
		accessService.setPhysicalItem(11922);
		accessService.setGroupStudyRoom(978);
		accessService.setNumberOfItemReserves(100);
		accessService.setNumberOfCourseReserves(43);

		accessServiceRepository.save(accessService);
	}

	private void seedRolesAndUsers() {

		ReginaRole adminRole = new ReginaRole();
		adminRole.setRole("ADMIN");
		roleRepository.save(adminRole);

		ReginaUser admin = new ReginaUser();
		admin.setRole(adminRole);
		admin.setUsername("reginaadmin");
		admin.setPassword("regina1805");
		userRepository.save(admin);

		ReginaRole accessServiceRole = new ReginaRole();
		accessServiceRole.setRole("ACCESS_SERVICES");
		roleRepository.save(accessServiceRole);

		ReginaUser accessUser = new ReginaUser();
		accessUser.setRole(accessServiceRole);
		accessUser.setUsername("access");
		accessUser.setPassword("regina1806");
		userRepository.save(accessUser);

		ReginaRole ercRole = new ReginaRole();
		ercRole.setRole("ERC");
		roleRepository.save(ercRole);

		ReginaUser ercUser = new ReginaUser();
		ercUser.setRole(ercRole);
		ercUser.setUsername("erc");
		ercUser.setPassword("regina1807");
		userRepository.save(ercUser);

		ReginaRole educationService = new ReginaRole();
		educationService.setRole("EDUCATION_SERVICE");
		roleRepository.save(educationService);

		ReginaUser educationUser = new ReginaUser();
		educationUser.setRole(educationService);
		educationUser.setUsername("marketing");
		educationUser.setPassword("regina1808");
		userRepository.save(educationUser);

		ReginaRole interLibrary = new ReginaRole();
		interLibrary.setRole("INTERLIBRARY");
		roleRepository.save(interLibrary);

		ReginaUser interLibraryUser = new ReginaUser();
		interLibraryUser.setRole(interLibrary);
		interLibraryUser.setUsername("interlibrary");
		interLibraryUser.setPassword("regina1809");
		userRepository.save(interLibraryUser);

		ReginaRole researchInstruction = new ReginaRole();
		researchInstruction.setRole("RESEARCH_INSTRUCTION");
		roleRepository.save(researchInstruction);

		ReginaUser researchInstructionUser = new ReginaUser();
		researchInstructionUser.setRole(researchInstruction);
		researchInstructionUser.setUsername("research");
		researchInstructionUser.setPassword("regina1810");
		userRepository.save(researchInstructionUser);

		ReginaRole technicalService = new ReginaRole();
		technicalService.setRole("TECHNICAL_SERVICE");
		roleRepository.save(technicalService);

		ReginaUser technicalServiceUser = new ReginaUser();
		technicalServiceUser.setRole(technicalService);
		technicalServiceUser.setUsername("technical");
		technicalServiceUser.setPassword("regina1811");
		userRepository.save(technicalServiceUser);

		ReginaRole electronicInfo = new ReginaRole();
		electronicInfo.setRole("ELECTRONIC_INFORMATION");
		roleRepository.save(electronicInfo);

		ReginaUser electronicInfoUser = new ReginaUser();
		electronicInfoUser.setRole(electronicInfo);
		electronicInfoUser.setUsername("electronic");
		electronicInfoUser.setPassword("regina1812");
		userRepository.save(electronicInfoUser);
	}
}
