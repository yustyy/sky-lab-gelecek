package com.skylabyazanlar.turkcell_ms.webAPI.controllers;

import com.skylabyazanlar.turkcell_ms.business.abstracts.PlanService;
import com.skylabyazanlar.turkcell_ms.core.constants.PlanMessages;
import com.skylabyazanlar.turkcell_ms.core.dtos.plan.response.PlanDto;
import com.skylabyazanlar.turkcell_ms.core.mappers.PlanMapper;
import com.skylabyazanlar.turkcell_ms.core.utilities.results.SuccessDataResult;
import com.skylabyazanlar.turkcell_ms.entities.Plan;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
public class PlansController {

    private final PlanService planService;
    private final PlanMapper planMapper;


    public PlansController(PlanService planService, PlanMapper planMapper) {
        this.planService = planService;
        this.planMapper = planMapper;
    }



    @GetMapping("/")
    public ResponseEntity<SuccessDataResult<List<PlanDto>>> getAllPlans(HttpServletRequest request) {
        List<Plan> plans = planService.getAllPlans();

        List<PlanDto> planDtos = planMapper.toPlanDtoList(plans);

        return ResponseEntity.ok(new SuccessDataResult<>(planDtos, PlanMessages.PLANS_RETRIVED_SUCCESSFULLY, HttpStatus.OK, request.getRequestURI()));
    }
}
