package com.skylabyazanlar.turkcell_ms.business.abstracts;

import com.skylabyazanlar.turkcell_ms.entities.User;

import java.util.UUID;

public interface UserService {
    User getUserById(UUID userId);

    User saveUser(User user);
}
