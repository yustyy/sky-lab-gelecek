package com.skylabyazanlar.turkcell_ms.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="detailed_usages")
public class DetailedUsage {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "usage_id", nullable = false)
    private Usage usage;

    @Column(name = "data_usage")
    private Float dataUsage;

    @Column(name = "minute_usage")
    private int minuteUsage;

    @Column(name = "sms_usage")
    private int smsUsage;

    @Column(name = "roaming_data_usage")
    private Float roamingDataUsage;

    @Column(name = "usage_date_time")
    private LocalDateTime usageDateTime;

}
