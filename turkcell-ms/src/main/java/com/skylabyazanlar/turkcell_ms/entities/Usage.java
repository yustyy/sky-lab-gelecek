package com.skylabyazanlar.turkcell_ms.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usages")
public class Usage {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "data_usage")
    private Float dataUsage;

    @Column(name = "minute_usage")
    private int minuteUsage;

    @Column(name = "sms_usage")
    private int smsUsage;

    @Column(name = "roaming_data_usage")
    private Float roamingDataUsage;

    @OneToMany(mappedBy = "usage")
    private List<DetailedUsage> detailedUsages;

    @Column(name = "start_date_time")
    private LocalDateTime startDateTime;

    @Column(name = "end_date_time")
    private LocalDateTime endDateTime;

    @ManyToOne
    @JoinColumn(name = "plan_id", nullable = false)
    private Plan plan;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "usage_add_on_packs",
            joinColumns = @JoinColumn(name = "usage_id"),
            inverseJoinColumns = @JoinColumn(name = "add_on_pack_id")
    )
    private List<AddOnPack> addOnPacks;



}
