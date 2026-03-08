-- Create meeting_logs table
CREATE TABLE public.meeting_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  meeting_date DATE NOT NULL,
  duration_minutes INTEGER NOT NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.meeting_logs ENABLE ROW LEVEL SECURITY;

-- Users can only see their own logs
CREATE POLICY "Users can view their own meeting logs"
  ON public.meeting_logs FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own meeting logs"
  ON public.meeting_logs FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own meeting logs"
  ON public.meeting_logs FOR DELETE USING (auth.uid() = user_id);