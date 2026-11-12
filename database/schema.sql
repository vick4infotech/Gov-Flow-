CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS records (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 title TEXT NOT NULL,
 detail TEXT NOT NULL,
 location TEXT NOT NULL,
 value NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK (value>=0),
 status TEXT NOT NULL,
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS records_status_idx ON records(status);
CREATE TABLE IF NOT EXISTS events (id BIGSERIAL PRIMARY KEY, record_id UUID REFERENCES records(id), action TEXT NOT NULL, details JSONB NOT NULL DEFAULT '{}'::jsonb, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
INSERT INTO records (title,detail,location,value,status) SELECT 'Amina Bello','Arewa Foods Ltd','Business Premises Permit',0,'Under Review' WHERE NOT EXISTS (SELECT 1 FROM records WHERE title='Amina Bello');
INSERT INTO records (title,detail,location,value,status) SELECT 'Tunde Adeyemi','GreenRoute Mobility','SME Registration Support',0,'Approved' WHERE NOT EXISTS (SELECT 1 FROM records WHERE title='Tunde Adeyemi');
INSERT INTO records (title,detail,location,value,status) SELECT 'Zainab Umar','ZeeCare Pharmacy','Business Premises Permit',0,'Submitted' WHERE NOT EXISTS (SELECT 1 FROM records WHERE title='Zainab Umar');
INSERT INTO records (title,detail,location,value,status) SELECT 'Emeka Nwosu','Nwosu Engineering','Tax Clearance Request',0,'Needs Correction' WHERE NOT EXISTS (SELECT 1 FROM records WHERE title='Emeka Nwosu');
INSERT INTO records (title,detail,location,value,status) SELECT 'Bisi Lawal','Oakline Fashion','SME Registration Support',0,'Approved' WHERE NOT EXISTS (SELECT 1 FROM records WHERE title='Bisi Lawal');

CREATE OR REPLACE FUNCTION record_status_audit() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 IF NEW.status IS DISTINCT FROM OLD.status THEN
  INSERT INTO events(record_id,action,details) VALUES(NEW.id,'status_changed',jsonb_build_object('from',OLD.status,'to',NEW.status));
 END IF;
 RETURN NEW;
END; $$;
DROP TRIGGER IF EXISTS trg_record_status_audit ON records;
CREATE TRIGGER trg_record_status_audit AFTER UPDATE OF status ON records FOR EACH ROW EXECUTE FUNCTION record_status_audit();
