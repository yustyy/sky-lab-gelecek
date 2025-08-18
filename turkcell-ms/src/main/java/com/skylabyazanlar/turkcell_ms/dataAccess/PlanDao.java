package com.skylabyazanlar.turkcell_ms.dataAccess;

import com.skylabyazanlar.turkcell_ms.entities.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PlanDao extends JpaRepository<Plan, UUID> {
}
