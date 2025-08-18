package com.skylabyazanlar.turkcell_ms.core.utilities.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
