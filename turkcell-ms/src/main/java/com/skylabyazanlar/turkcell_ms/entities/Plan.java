package com.skylabyazanlar.turkcell_ms.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "plans")
public class Plan {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    private PlanType type;

    @Column(name = "monthly_price")
    private Float monthlyPrice;

    @Column(name = "quota_data")
    private Float quotaData;

    @Column(name = "quota_minute")
    private Float quotaMinute;

    @Column(name = "quota_sms")
    private Float quotaSms;

    @Column(name = "overage_data")
    private Float overageData;

    @Column(name = "overage_minute")
    private int overageMinute;

    @Column(name = "overage_sms")
    private int overageSms;


}
