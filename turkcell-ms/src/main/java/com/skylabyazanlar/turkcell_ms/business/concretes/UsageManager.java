package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.UsageService;
import com.skylabyazanlar.turkcell_ms.dataAccess.UsageDao;
import org.springframework.stereotype.Service;

@Service
public class UsageManager implements UsageService {

    private final UsageDao usageDao;

    public UsageManager(UsageDao usageDao) {
        this.usageDao = usageDao;
    }




}
