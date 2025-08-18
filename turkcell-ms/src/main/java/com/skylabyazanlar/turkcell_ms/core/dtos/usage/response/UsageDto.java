package com.skylabyazanlar.turkcell_ms.core.dtos.usage.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsageDto {


    private UUID id;

    private UUID userId;

    private LocalDate date;

    private Float usedData;

    private int usedMinute;

    private int usedSms;

    private Float usedRoamingData;

}
