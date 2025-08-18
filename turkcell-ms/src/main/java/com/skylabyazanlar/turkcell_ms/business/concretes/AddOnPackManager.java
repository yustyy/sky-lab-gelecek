package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.AddOnPackService;
import com.skylabyazanlar.turkcell_ms.dataAccess.AddOnPackDao;
import org.springframework.stereotype.Service;

@Service
public class AddOnPackManager implements AddOnPackService {

    private final AddOnPackDao addOnPackDao;

    public AddOnPackManager(AddOnPackDao addOnPackDao) {
        this.addOnPackDao = addOnPackDao;
    }
}
