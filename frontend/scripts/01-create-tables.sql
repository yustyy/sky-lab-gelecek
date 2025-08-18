-- Create database schema for Turkcell Smart Tariff System

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    birthday DATE,
    current_plan_id UUID,
    type VARCHAR(20) CHECK (type IN ('POSTPAID', 'PREPAID')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Plans table
CREATE TABLE IF NOT EXISTS plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('POSTPAID', 'PREPAID')) NOT NULL,
    monthly_price DECIMAL(10,2) NOT NULL,
    quota_data DECIMAL(10,2) NOT NULL, -- in GB
    quota_minute INTEGER NOT NULL,
    quota_sms INTEGER NOT NULL,
    overage_data DECIMAL(10,2) NOT NULL, -- price per GB
    overage_minute DECIMAL(10,2) NOT NULL, -- price per minute
    overage_sms DECIMAL(10,2) NOT NULL, -- price per SMS
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add-on packs table
CREATE TABLE IF NOT EXISTS add_on_packs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('DATA', 'MINUTE', 'SMS')) NOT NULL,
    extra_data DECIMAL(10,2) DEFAULT 0, -- in GB
    extra_minute INTEGER DEFAULT 0,
    extra_sms INTEGER DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Usage table (monthly aggregated)
CREATE TABLE IF NOT EXISTS usages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    data_usage DECIMAL(10,2) NOT NULL, -- in GB
    minute_usage INTEGER NOT NULL,
    sms_usage INTEGER DEFAULT 0,
    start_date_time TIMESTAMP NOT NULL,
    end_date_time TIMESTAMP NOT NULL,
    plan_id UUID REFERENCES plans(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Detailed usage table (daily logs)
CREATE TABLE IF NOT EXISTS detailed_usages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    usage_id UUID REFERENCES usages(id) ON DELETE CASCADE,
    data_usage DECIMAL(10,2) NOT NULL, -- in MB
    minute_usage INTEGER NOT NULL,
    sms_usage INTEGER DEFAULT 0,
    roaming_data DECIMAL(10,2) DEFAULT 0, -- in MB
    usage_date_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alerts table
CREATE TABLE IF NOT EXISTS alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    usage_id UUID REFERENCES usages(id),
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    alert_type VARCHAR(50) NOT NULL, -- 'QUOTA_WARNING', 'ANOMALY', 'RECOMMENDATION', etc.
    severity VARCHAR(20) CHECK (severity IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')) DEFAULT 'MEDIUM',
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP,
    external_id VARCHAR(100),
    failure_reason TEXT,
    is_read BOOLEAN DEFAULT FALSE
);

-- User add-on packs (many-to-many)
CREATE TABLE IF NOT EXISTS user_add_on_packs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    add_on_pack_id UUID NOT NULL REFERENCES add_on_packs(id) ON DELETE CASCADE,
    activated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone_number);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_detailed_usages_user_date ON detailed_usages(user_id, usage_date_time);
CREATE INDEX IF NOT EXISTS idx_usages_user_date ON usages(user_id, start_date_time);
CREATE INDEX IF NOT EXISTS idx_alerts_user_sent ON alerts(user_id, sent_at);
CREATE INDEX IF NOT EXISTS idx_alerts_unread ON alerts(user_id, is_read) WHERE is_read = FALSE;

-- Add foreign key constraint for current_plan_id
ALTER TABLE users ADD CONSTRAINT fk_users_current_plan 
    FOREIGN KEY (current_plan_id) REFERENCES plans(id);
