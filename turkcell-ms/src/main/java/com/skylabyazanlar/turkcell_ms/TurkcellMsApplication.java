package com.skylabyazanlar.turkcell_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TurkcellMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurkcellMsApplication.class, args);
	}

}
