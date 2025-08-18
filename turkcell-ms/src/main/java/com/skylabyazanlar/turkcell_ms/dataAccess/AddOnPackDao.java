package com.skylabyazanlar.turkcell_ms.dataAccess;

import com.skylabyazanlar.turkcell_ms.entities.AddOnPack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AddOnPackDao extends JpaRepository<AddOnPack, UUID> {
}
