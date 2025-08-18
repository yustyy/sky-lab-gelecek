package com.skylabyazanlar.turkcell_ms.dataAccess;

import com.skylabyazanlar.turkcell_ms.entities.DetailedUsage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface DetailedUsageDao extends JpaRepository<DetailedUsage, UUID> {

    List<DetailedUsage> findByUser_IdAndUsageDateTimeAfter(UUID userId, LocalDateTime startDate);


}
