package com.skylabyazanlar.alert_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AlertMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlertMsApplication.class, args);
	}

}
