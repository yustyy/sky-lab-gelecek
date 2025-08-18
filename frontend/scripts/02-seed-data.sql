-- Seed data for Turkcell Smart Tariff System

-- Insert plans
INSERT INTO plans (id, name, type, monthly_price, quota_data, quota_minute, quota_sms, overage_data, overage_minute, overage_sms) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'GNÇ 10GB', 'POSTPAID', 230.00, 10.0, 500, 100, 25.00, 0.50, 0.20),
('550e8400-e29b-41d4-a716-446655440002', 'Platinum 30GB', 'POSTPAID', 520.00, 30.0, 2000, 1000, 20.00, 0.30, 0.10),
('550e8400-e29b-41d4-a716-446655440003', 'Bireysel 20GB', 'POSTPAID', 350.00, 20.0, 1000, 500, 22.00, 0.40, 0.15),
('550e8400-e29b-41d4-a716-446655440004', 'Faturasız 8GB', 'PREPAID', 180.00, 8.0, 400, 100, 28.00, 0.60, 0.25),
('550e8400-e29b-41d4-a716-446655440005', 'Faturasız 15GB', 'PREPAID', 260.00, 15.0, 700, 200, 24.00, 0.50, 0.20);

-- Insert add-on packs
INSERT INTO add_on_packs (id, name, type, extra_data, extra_minute, extra_sms, price) VALUES
('660e8400-e29b-41d4-a716-446655440101', 'Ek 5GB', 'DATA', 5.0, 0, 0, 75.00),
('660e8400-e29b-41d4-a716-446655440102', 'Ek 100DK', 'MINUTE', 0.0, 100, 0, 35.00),
('660e8400-e29b-41d4-a716-446655440103', 'Ek 250SMS', 'SMS', 0.0, 0, 250, 25.00),
('660e8400-e29b-41d4-a716-446655440104', 'Ek 10GB', 'DATA', 10.0, 0, 0, 120.00),
('660e8400-e29b-41d4-a716-446655440105', 'Ek 200DK', 'MINUTE', 0.0, 200, 0, 60.00);

-- Insert users
INSERT INTO users (id, first_name, last_name, email, username, phone_number, birthday, current_plan_id, type) VALUES
('770e8400-e29b-41d4-a716-446655441001', 'Ahmet', 'Yılmaz', 'ahmet.yilmaz@email.com', 'ahmetyilmaz', '5551234567', '1990-05-15', '550e8400-e29b-41d4-a716-446655440004', 'PREPAID'),
('770e8400-e29b-41d4-a716-446655441002', 'Aylin', 'Demir', 'aylin.demir@email.com', 'aylindemir', '5559876543', '1985-08-22', '550e8400-e29b-41d4-a716-446655440001', 'POSTPAID'),
('770e8400-e29b-41d4-a716-446655441003', 'Mehmet', 'Kaya', 'mehmet.kaya@email.com', 'mehmetkaya', '5555555555', '1992-12-10', '550e8400-e29b-41d4-a716-446655440002', 'POSTPAID'),
('770e8400-e29b-41d4-a716-446655441004', 'Zeynep', 'Özkan', 'zeynep.ozkan@email.com', 'zeynepozkan', '5557777777', '1988-03-18', '550e8400-e29b-41d4-a716-446655440003', 'POSTPAID'),
('770e8400-e29b-41d4-a716-446655441005', 'Can', 'Arslan', 'can.arslan@email.com', 'canarslan', '5558888888', '1995-11-05', '550e8400-e29b-41d4-a716-446655440005', 'PREPAID');

-- Insert usage data (current month)
INSERT INTO usages (id, user_id, data_usage, minute_usage, sms_usage, start_date_time, end_date_time, plan_id) VALUES
('880e8400-e29b-41d4-a716-446655442001', '770e8400-e29b-41d4-a716-446655441001', 5.2, 287, 45, '2025-01-01 00:00:00', '2025-01-31 23:59:59', '550e8400-e29b-41d4-a716-446655440004'),
('880e8400-e29b-41d4-a716-446655442002', '770e8400-e29b-41d4-a716-446655441002', 8.5, 420, 78, '2025-01-01 00:00:00', '2025-01-31 23:59:59', '550e8400-e29b-41d4-a716-446655440001'),
('880e8400-e29b-41d4-a716-446655442003', '770e8400-e29b-41d4-a716-446655441003', 25.2, 1850, 156, '2025-01-01 00:00:00', '2025-01-31 23:59:59', '550e8400-e29b-41d4-a716-446655440002'),
('880e8400-e29b-41d4-a716-446655442004', '770e8400-e29b-41d4-a716-446655441004', 18.7, 890, 234, '2025-01-01 00:00:00', '2025-01-31 23:59:59', '550e8400-e29b-41d4-a716-446655440003'),
('880e8400-e29b-41d4-a716-446655442005', '770e8400-e29b-41d4-a716-446655441005', 12.3, 567, 89, '2025-01-01 00:00:00', '2025-01-31 23:59:59', '550e8400-e29b-41d4-a716-446655440005');

-- Insert detailed usage data (last 30 days sample)
INSERT INTO detailed_usages (user_id, usage_id, data_usage, minute_usage, sms_usage, roaming_data, usage_date_time) VALUES
-- Ahmet Yılmaz usage
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 450, 12, 1, 0, '2025-01-15 10:30:00'),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 980, 25, 0, 0, '2025-01-16 14:20:00'),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 1520, 35, 2, 0, '2025-01-17 09:15:00'),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 2100, 45, 3, 0, '2025-01-18 16:45:00'),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 1800, 38, 1, 120, '2025-01-19 11:30:00'),

-- Aylin Demir usage
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 1200, 45, 5, 0, '2025-01-15 08:00:00'),
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 890, 32, 3, 0, '2025-01-16 12:30:00'),
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 1450, 58, 8, 0, '2025-01-17 15:20:00'),
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 1100, 41, 4, 0, '2025-01-18 10:45:00'),
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 1350, 52, 6, 0, '2025-01-19 13:15:00');

-- Insert alerts
INSERT INTO alerts (user_id, usage_id, subject, body, alert_type, severity, sent_at, is_read) VALUES
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 'İnternet Kotası Uyarısı', 'İnternet kotanızın %85''i tükendi. Ay sonuna 12 gün kaldı.', 'QUOTA_WARNING', 'HIGH', '2025-01-19 14:30:00', FALSE),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 'Anomali Tespit Edildi', 'Bugünkü internet kullanımınız son 14 günün 2 katından fazla.', 'ANOMALY', 'MEDIUM', '2025-01-19 16:45:00', FALSE),
('770e8400-e29b-41d4-a716-446655441001', '880e8400-e29b-41d4-a716-446655442001', 'Tasarruf Fırsatı', 'Bireysel 20GB paketine geçerek aylık ₺85 tasarruf edebilirsiniz.', 'RECOMMENDATION', 'LOW', '2025-01-18 10:00:00', TRUE),
('770e8400-e29b-41d4-a716-446655441002', '880e8400-e29b-41d4-a716-446655442002', 'Konuşma Kotası', 'Konuşma kotanızın %70''i tükendi.', 'QUOTA_WARNING', 'MEDIUM', '2025-01-18 12:00:00', TRUE),
('770e8400-e29b-41d4-a716-446655441003', '880e8400-e29b-41d4-a716-446655442003', 'Roaming Uyarısı', 'Roaming kullanımı tespit edildi. Ek ücretler uygulanabilir.', 'ROAMING_WARNING', 'HIGH', '2025-01-19 09:30:00', FALSE);

-- Insert user add-on packs
INSERT INTO user_add_on_packs (user_id, add_on_pack_id, activated_at, expires_at, is_active) VALUES
('770e8400-e29b-41d4-a716-446655441001', '660e8400-e29b-41d4-a716-446655440101', '2025-01-10 10:00:00', '2025-02-10 10:00:00', TRUE),
('770e8400-e29b-41d4-a716-446655441002', '660e8400-e29b-41d4-a716-446655440102', '2025-01-05 15:30:00', '2025-02-05 15:30:00', TRUE);
