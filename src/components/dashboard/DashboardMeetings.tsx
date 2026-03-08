import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, FileText, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface MeetingLog {
  id: string;
  meeting_date: string;
  duration_minutes: number;
  notes: string;
  created_at: string;
}

const DashboardMeetings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [logs, setLogs] = useState<MeetingLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [meetingDate, setMeetingDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const fetchLogs = async () => {
    const { data, error } = await supabase
      .from("meeting_logs")
      .select("*")
      .order("meeting_date", { ascending: false });

    if (error) {
      console.error("Error fetching logs:", error);
    } else {
      setLogs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);

    const { error } = await supabase.from("meeting_logs").insert({
      user_id: user.id,
      meeting_date: meetingDate,
      duration_minutes: parseInt(duration),
      notes: notes.trim(),
    });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Meeting logged!" });
      setMeetingDate(format(new Date(), "yyyy-MM-dd"));
      setDuration("");
      setNotes("");
      setShowForm(false);
      fetchLogs();
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("meeting_logs").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setLogs(logs.filter((l) => l.id !== id));
    }
  };

  const totalLogs = logs.length;
  const totalHours = Math.round((logs.reduce((sum, l) => sum + l.duration_minutes, 0) / 60) * 10) / 10;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Meeting Logs</h2>
          <p className="text-muted-foreground mt-1">Track your team meeting activity</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" /> Log Meeting
        </Button>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <FileText className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Total Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">{totalLogs}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Clock className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Total Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">{totalHours}</p>
          </CardContent>
        </Card>
      </div>

      {/* New log form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">New Meeting Log</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="meetingDate">Meeting Date</Label>
                  <Input
                    id="meetingDate"
                    type="date"
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    placeholder="e.g. 90"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">What was discussed?</Label>
                <Textarea
                  id="notes"
                  placeholder="Summary of the meeting..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  required
                  rows={3}
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Saving..." : "Save Log"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Logs list */}
      {loading ? (
        <p className="text-muted-foreground text-center py-8">Loading logs...</p>
      ) : logs.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No meeting logs yet. Click "Log Meeting" to add your first one.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {logs.map((log) => (
            <Card key={log.id}>
              <CardContent className="py-4 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-foreground">
                      {format(new Date(log.meeting_date + "T00:00:00"), "MMM d, yyyy")}
                    </span>
                    <span className="text-sm text-muted-foreground bg-muted/30 px-2 py-0.5 rounded">
                      {log.duration_minutes} min
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{log.notes}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-muted-foreground hover:text-destructive"
                  onClick={() => handleDelete(log.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardMeetings;
