package com.skylabyazanlar.turkcell_ms.business.abstracts;

import com.skylabyazanlar.turkcell_ms.entities.DetailedUsage;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface DetailedUsageService {
    List<DetailedUsage> getDetailedUsagesByUserIdAndStartDate(UUID userId, LocalDateTime startDate);
}
