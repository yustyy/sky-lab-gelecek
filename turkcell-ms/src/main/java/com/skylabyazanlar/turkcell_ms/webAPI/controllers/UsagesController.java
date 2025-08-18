package com.skylabyazanlar.turkcell_ms.webAPI.controllers;

import com.skylabyazanlar.turkcell_ms.business.abstracts.UsageService;
import com.skylabyazanlar.turkcell_ms.core.concretes.UsageMessages;
import com.skylabyazanlar.turkcell_ms.core.dtos.usage.response.UsageDto;
import com.skylabyazanlar.turkcell_ms.core.utilities.results.SuccessDataResult;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/usages")
public class UsagesController {

    private final UsageService usageService;


    public UsagesController(UsageService usageService) {
        this.usageService = usageService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<SuccessDataResult<List<UsageDto>>> getUsagesByUserIdAndDays(@PathVariable("userId") UUID userId, @RequestParam("days") int days, HttpServletRequest request) {
        List<UsageDto> usages = usageService.getUsagesByUserIdAndDays(userId, days);

        return ResponseEntity.ok(new SuccessDataResult<>(usages, UsageMessages.USAGES_RETRIVED_SUCCESSFULLY, HttpStatus.OK, request.getRequestURI()));
    }



}
