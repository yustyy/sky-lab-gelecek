package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.DetailedUsageService;
import com.skylabyazanlar.turkcell_ms.business.abstracts.UsageService;
import com.skylabyazanlar.turkcell_ms.core.dtos.usage.response.UsageDto;
import com.skylabyazanlar.turkcell_ms.dataAccess.UsageDao;
import com.skylabyazanlar.turkcell_ms.entities.DetailedUsage;
import com.skylabyazanlar.turkcell_ms.entities.Usage;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UsageManager implements UsageService {

    private final UsageDao usageDao;
    private final DetailedUsageService detailedUsageService;

    public UsageManager(UsageDao usageDao, DetailedUsageService detailedUsageService) {
        this.usageDao = usageDao;
        this.detailedUsageService = detailedUsageService;
    }


    @Override
    public List<UsageDto> getUsagesByUserIdAndDays(UUID userId, int days) {
        LocalDateTime startDate = LocalDateTime.now().minusDays(days);

        List<DetailedUsage> detailedUsages = detailedUsageService.getDetailedUsagesByUserIdAndStartDate(userId, startDate);

        if (detailedUsages.isEmpty()) {
            return List.of();
        }

        Map<LocalDate, List<DetailedUsage>> usagedGroupedByDate = detailedUsages.stream()
                .collect(Collectors.groupingBy(detailedUsage -> detailedUsage.getUsageDateTime().toLocalDate()));


        return usagedGroupedByDate.entrySet().stream()
                .map(entry -> {
                    LocalDate date = entry.getKey();
                    List<DetailedUsage> dailyUsages = entry.getValue();

                    float totalData = (float) dailyUsages.stream().mapToDouble(DetailedUsage::getDataUsage).sum();
                    int totalMinutes = dailyUsages.stream().mapToInt(DetailedUsage::getMinuteUsage).sum();
                    int totalSms = dailyUsages.stream().mapToInt(DetailedUsage::getSmsUsage).sum();
                    float totalRoaming = (float) dailyUsages.stream().mapToDouble(DetailedUsage::getRoamingDataUsage).sum();


                    UsageDto dto = new UsageDto();
                    dto.setId(UUID.randomUUID());
                    dto.setUserId(userId);
                    dto.setDate(date);
                    dto.setUsedData(totalData);
                    dto.setUsedMinute(totalMinutes);
                    dto.setUsedSms(totalSms);
                    dto.setUsedRoamingData(totalRoaming);

                    return dto;
                })
                .sorted((d1, d2) ->
                        d2.getDate().compareTo(d1.getDate()))
                .collect(Collectors.toList());


    }

    @Override
    public Usage save(Usage usage) {
            return usageDao.save(usage);
    }
}
