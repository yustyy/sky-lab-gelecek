package com.skylabyazanlar.turkcell_ms.core.dtos.plan.response;

import com.skylabyazanlar.turkcell_ms.entities.PlanType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlanDto {

    private UUID id;

    private String name;

    private PlanType type;

    private Float monthlyPrice;

    private Float quotaData;

    private int quotaMinute;

    private int quotaSms;

    private Float overageData;

    private Float overageMinute;

    private Float overageSms;

}
