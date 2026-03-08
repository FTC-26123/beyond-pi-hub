-- Create shared season_goals table
CREATE TABLE public.season_goals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false,
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.season_goals ENABLE ROW LEVEL SECURITY;

-- All authenticated users can view all goals
CREATE POLICY "Authenticated users can view all goals"
  ON public.season_goals FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert goals"
  ON public.season_goals FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update goals"
  ON public.season_goals FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete goals"
  ON public.season_goals FOR DELETE TO authenticated USING (true);

-- Create shared individual_tasks table
CREATE TABLE public.individual_tasks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  member TEXT DEFAULT '',
  finish_by DATE,
  done BOOLEAN NOT NULL DEFAULT false,
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.individual_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view all tasks"
  ON public.individual_tasks FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert tasks"
  ON public.individual_tasks FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update tasks"
  ON public.individual_tasks FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete tasks"
  ON public.individual_tasks FOR DELETE TO authenticated USING (true);

-- Update meeting_logs: allow all authenticated users to see all logs
DROP POLICY IF EXISTS "Users can view their own meeting logs" ON public.meeting_logs;
CREATE POLICY "Authenticated users can view all meeting logs"
  ON public.meeting_logs FOR SELECT TO authenticated USING (true);

-- Enable realtime for all three tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.season_goals;
ALTER PUBLICATION supabase_realtime ADD TABLE public.individual_tasks;
ALTER PUBLICATION supabase_realtime ADD TABLE public.meeting_logs;