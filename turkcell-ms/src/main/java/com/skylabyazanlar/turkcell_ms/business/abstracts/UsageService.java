package com.skylabyazanlar.turkcell_ms.business.abstracts;

import com.skylabyazanlar.turkcell_ms.core.dtos.usage.response.UsageDto;
import com.skylabyazanlar.turkcell_ms.entities.Usage;

import java.util.List;
import java.util.UUID;

public interface UsageService {

    List<UsageDto> getUsagesByUserIdAndDays(UUID userId, int days);

}
