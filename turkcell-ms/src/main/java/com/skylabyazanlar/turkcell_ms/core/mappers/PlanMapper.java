package com.skylabyazanlar.turkcell_ms.core.mappers;

import com.skylabyazanlar.turkcell_ms.core.dtos.plan.response.PlanDto;
import com.skylabyazanlar.turkcell_ms.entities.Plan;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlanMapper {

    public PlanDto toPlanDto(Plan plan){

        PlanDto planDto = new PlanDto();
        planDto.setId(plan.getId());
        planDto.setName(plan.getName());
        planDto.setType(plan.getType());
        planDto.setMonthlyPrice(plan.getMonthlyPrice());
        planDto.setQuotaData(plan.getQuotaData());
        planDto.setQuotaMinute(plan.getQuotaMinute());
        planDto.setQuotaSms(plan.getQuotaSms());
        planDto.setOverageData(plan.getOverageData());
        planDto.setOverageMinute(plan.getOverageMinute());
        planDto.setOverageSms(plan.getOverageSms());
        return planDto;

    }

    public List<PlanDto> toPlanDtoList(List<Plan> plans){
        return plans.stream()
                .map(this::toPlanDto)
                .toList();
    }


}
