-- Manual-payment release flow: after the owner confirms the bank/mobile transfer
-- has actually landed, they approve the order. Approval stamps a licence key, the
-- download URL and the verified timestamp, which unlocks the download on the
-- customer's order-status page. RLS still blocks all direct client access; only
-- the service-role server functions read/write these.
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS license_key  TEXT,
  ADD COLUMN IF NOT EXISTS download_url TEXT,
  ADD COLUMN IF NOT EXISTS verified_at  TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS admin_note   TEXT;
