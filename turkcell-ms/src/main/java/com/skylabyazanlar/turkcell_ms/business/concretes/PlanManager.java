package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.PlanService;
import com.skylabyazanlar.turkcell_ms.business.abstracts.UsageService;
import com.skylabyazanlar.turkcell_ms.business.abstracts.UserService;
import com.skylabyazanlar.turkcell_ms.core.constants.PlanMessages;
import com.skylabyazanlar.turkcell_ms.core.dtos.plan.request.ChangePlanRequestDto;
import com.skylabyazanlar.turkcell_ms.core.utilities.exceptions.PlanNotFoundException;
import com.skylabyazanlar.turkcell_ms.dataAccess.PlanDao;
import com.skylabyazanlar.turkcell_ms.entities.Plan;
import com.skylabyazanlar.turkcell_ms.entities.Usage;
import com.skylabyazanlar.turkcell_ms.entities.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PlanManager implements PlanService {

    private final PlanDao planDao;
    private final UserService userService;
    private final UsageService usageService;


    public PlanManager(PlanDao planDao, UserService userService, UsageService usageService) {
        this.planDao = planDao;
        this.userService = userService;
        this.usageService = usageService;
    }


    @Override
    public List<Plan> getAllPlans() {
        return planDao.findAll();
    }

    @Override
    @Transactional
    public void changePlan(ChangePlanRequestDto changePlanRequestDto) {
        Plan newPlan = planDao.findById(changePlanRequestDto.getNewPlanId())
                .orElseThrow(() -> new PlanNotFoundException(PlanMessages.PLAN_NOT_FOUND));

        User user = userService.getUserById(changePlanRequestDto.getUserId());

        LocalDateTime now = LocalDateTime.now();

        user.getUsages().stream()
                .filter(usage -> usage.getStartDateTime().isBefore(now) && usage.getEndDateTime().isAfter(now))
                .findFirst()
                .ifPresent(activeUsage -> {
                    activeUsage.setEndDateTime(now);
                    usageService.save(activeUsage);
                });

        user.setCurrentPlan(newPlan);

        Usage newUsage = new Usage();
        newUsage.setUser(user);
        newUsage.setPlan(newPlan);
        newUsage.setDataUsage(0);
        newUsage.setMinuteUsage(0);
        newUsage.setSmsUsage(0);
        newUsage.setRoamingDataUsage(0);
        newUsage.setStartDateTime(now);
        newUsage.setEndDateTime(now.plusMonths(1));

        usageService.save(newUsage);

        userService.saveUser(user);
    }
}
