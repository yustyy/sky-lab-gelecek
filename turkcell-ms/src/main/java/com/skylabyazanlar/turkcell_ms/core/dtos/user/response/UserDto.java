package com.skylabyazanlar.turkcell_ms.core.dtos.user.response;

import com.skylabyazanlar.turkcell_ms.entities.PlanType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private UUID id;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private LocalDate birthdate;

    private PlanType type;

}
