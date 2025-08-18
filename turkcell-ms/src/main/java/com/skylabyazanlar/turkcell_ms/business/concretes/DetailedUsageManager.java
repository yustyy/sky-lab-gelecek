package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.DetailedUsageService;
import com.skylabyazanlar.turkcell_ms.dataAccess.DetailedUsageDao;
import org.springframework.stereotype.Service;

@Service
public class DetailedUsageManager implements DetailedUsageService {

    private final DetailedUsageDao detailedUsageDao;


    public DetailedUsageManager(DetailedUsageDao detailedUsageDao) {
        this.detailedUsageDao = detailedUsageDao;
    }




}
