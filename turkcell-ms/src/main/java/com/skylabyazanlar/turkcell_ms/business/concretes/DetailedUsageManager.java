package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.DetailedUsageService;
import com.skylabyazanlar.turkcell_ms.dataAccess.DetailedUsageDao;
import com.skylabyazanlar.turkcell_ms.entities.DetailedUsage;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class DetailedUsageManager implements DetailedUsageService {

    private final DetailedUsageDao detailedUsageDao;


    public DetailedUsageManager(DetailedUsageDao detailedUsageDao) {
        this.detailedUsageDao = detailedUsageDao;
    }


    @Override
    public List<DetailedUsage> getDetailedUsagesByUserIdAndStartDate(UUID userId, LocalDateTime startDate) {
        return detailedUsageDao.findByUser_IdAndUsageDateTimeAfter(userId, startDate);
    }
}
