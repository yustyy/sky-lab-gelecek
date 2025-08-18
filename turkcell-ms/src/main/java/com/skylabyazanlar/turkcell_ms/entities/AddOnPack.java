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
@Table(name = "add_on_packs")
public class AddOnPack {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "extra_data")
    private Float extraData;

    @Column(name = "extra_minute")
    private int extraMinute;

    @Column(name = "extra_sms")
    private int extraSms;

    @Column(name = "price")
    private Float price;

}
