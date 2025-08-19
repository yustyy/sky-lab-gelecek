package com.skylabyazanlar.turkcell_ms.core.mappers;

import com.skylabyazanlar.turkcell_ms.core.dtos.user.response.UserDto;
import com.skylabyazanlar.turkcell_ms.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {


    public UserDto toUserDto(User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setBirthdate(user.getBirthdate());
        userDto.setType(user.getType());

        return userDto;
    }


}
