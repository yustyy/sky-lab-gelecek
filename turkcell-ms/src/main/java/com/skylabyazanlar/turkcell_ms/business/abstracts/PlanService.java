package com.skylabyazanlar.turkcell_ms.business.abstracts;

import com.skylabyazanlar.turkcell_ms.core.dtos.plan.request.ChangePlanRequestDto;
import com.skylabyazanlar.turkcell_ms.entities.Plan;

import java.util.List;

public interface PlanService {
    List<Plan> getAllPlans();

    void changePlan(ChangePlanRequestDto changePlanRequestDto);

}
