package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.UserService;
import com.skylabyazanlar.turkcell_ms.dataAccess.UserDao;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {


    private final UserDao userDao;


    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }




}
