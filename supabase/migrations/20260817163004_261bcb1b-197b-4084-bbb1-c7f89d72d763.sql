CREATE TABLE public.download_clicks (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source text NOT NULL,
  platform text NOT NULL DEFAULT 'windows',
  page_path text,
  referrer text,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT ALL ON public.download_clicks TO service_role;

ALTER TABLE public.download_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read download clicks"
ON public.download_clicks
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

GRANT SELECT ON public.download_clicks TO authenticated;

CREATE INDEX download_clicks_created_at_idx ON public.download_clicks (created_at DESC);