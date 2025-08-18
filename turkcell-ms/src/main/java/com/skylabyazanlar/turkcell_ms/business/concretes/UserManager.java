package com.skylabyazanlar.turkcell_ms.business.concretes;

import com.skylabyazanlar.turkcell_ms.business.abstracts.UserService;
import com.skylabyazanlar.turkcell_ms.core.concretes.UserMessages;
import com.skylabyazanlar.turkcell_ms.core.utilities.exceptions.UserNotFoundException;
import com.skylabyazanlar.turkcell_ms.dataAccess.UserDao;
import com.skylabyazanlar.turkcell_ms.entities.User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserManager implements UserService {


    private final UserDao userDao;


    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User getUserById(UUID userId) {
        return userDao.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(UserMessages.USER_NOT_FOUND));
    }
}
