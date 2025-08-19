package com.skylabyazanlar.gateway_ms.core.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()

                .route("alert-ms", r -> r.path("/api/alerts/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://alert-service"))

                .route("turkcell-ms", r -> r.path("/api/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://turkcell-service"))

                .build();
    }


}
