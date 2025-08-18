package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.PlanService;
import com.skylabyazanlar.turkcell_ms.dataAccess.PlanDao;
import org.springframework.stereotype.Service;

@Service
public class PlanManager implements PlanService {

    private final PlanDao planDao;


    public PlanManager(PlanDao planDao) {
        this.planDao = planDao;
    }




}
