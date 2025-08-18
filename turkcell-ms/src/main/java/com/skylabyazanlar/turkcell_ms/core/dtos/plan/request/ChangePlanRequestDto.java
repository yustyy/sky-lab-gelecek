package com.skylabyazanlar.turkcell_ms.core.dtos.plan.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChangePlanRequestDto {

    private UUID userId;

    private UUID newPlanId;


}
