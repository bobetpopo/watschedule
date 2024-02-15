package com.bobetpopo.watschedule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class WatscheduleApplication {

	public static void main(String[] args) {
		SpringApplication.run(WatscheduleApplication.class, args);
	}

}
