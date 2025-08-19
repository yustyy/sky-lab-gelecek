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

                .route("turkcell-ms", r -> r.path("/api/**")
                        .filters(f -> f.rewritePath("/api/users/(?<segment>.*)", "/users/${segment}"))
                        .uri("lb://turkcell-service"))

                .route("alert-ms", r -> r.path("/api/alerts/**")
                        .filters(f -> f.rewritePath("/api/events/(?<segment>.*)", "/events/${segment}"))
                        .uri("lb://alerts-service"))

                .build();
    }


}
