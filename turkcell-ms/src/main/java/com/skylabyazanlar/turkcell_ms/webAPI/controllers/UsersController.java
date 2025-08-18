package com.skylabyazanlar.turkcell_ms.webAPI.controllers;

import com.skylabyazanlar.turkcell_ms.business.abstracts.UserService;
import com.skylabyazanlar.turkcell_ms.core.concretes.UserMessages;
import com.skylabyazanlar.turkcell_ms.core.dtos.user.response.UserDto;
import com.skylabyazanlar.turkcell_ms.core.mappers.UserMapper;
import com.skylabyazanlar.turkcell_ms.core.utilities.results.DataResult;
import com.skylabyazanlar.turkcell_ms.core.utilities.results.SuccessDataResult;
import com.skylabyazanlar.turkcell_ms.entities.User;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UsersController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }


    @GetMapping("/{userId}")
    public ResponseEntity<DataResult<UserDto>> getUserById(@RequestParam("userId") UUID userId, HttpServletRequest request){
        User user = userService.getUserById(userId);
        UserDto userDto = userMapper.toUserDto(user);

        return ResponseEntity.status(HttpStatus.OK).body(
                new SuccessDataResult<UserDto>(userDto, UserMessages.USER_GET_SUCCESS, HttpStatus.OK, request.getRequestURI())
        );

    }


}
