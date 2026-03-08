import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DashboardCalendar = () => {
  const [calendarUrl, setCalendarUrl] = useState(() => {
    return localStorage.getItem("bp_google_calendar_url") || "";
  });
  const [inputUrl, setInputUrl] = useState(calendarUrl);

  const saveUrl = () => {
    setCalendarUrl(inputUrl);
    localStorage.setItem("bp_google_calendar_url", inputUrl);
  };

  // Convert sharing URL to embeddable URL
  const getEmbedUrl = (url: string) => {
    // Handle direct calendar ID or email
    if (!url.includes("http")) {
      return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(url)}&ctz=America/New_York`;
    }
    // Handle embed URLs directly
    if (url.includes("calendar.google.com/calendar/embed")) {
      return url;
    }
    // Handle public URL format
    if (url.includes("calendar.google.com/calendar/u/")) {
      const match = url.match(/calendar\/u\/\d+\?cid=([^&]+)/);
      if (match) {
        return `https://calendar.google.com/calendar/embed?src=${decodeURIComponent(match[1])}&ctz=America/New_York`;
      }
    }
    return url;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Team Calendar</h2>
        <p className="text-muted-foreground mt-1">View the team's Google Calendar schedule</p>
      </div>

      {!calendarUrl ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Connect Google Calendar</CardTitle>
            <CardDescription>
              Paste your Google Calendar embed URL or calendar ID to display it here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calUrl">Calendar URL or ID</Label>
              <Input
                id="calUrl"
                placeholder="e.g. your-calendar@group.calendar.google.com"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={saveUrl} disabled={!inputUrl.trim()}>
                Save Calendar
              </Button>
              <a
                href="https://support.google.com/calendar/answer/37083"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                How to get your calendar URL <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing your linked Google Calendar</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCalendarUrl("");
                localStorage.removeItem("bp_google_calendar_url");
              }}
            >
              Change Calendar
            </Button>
          </div>
          <Card className="overflow-hidden">
            <iframe
              src={getEmbedUrl(calendarUrl)}
              className="w-full border-0"
              style={{ height: "600px" }}
              title="Google Calendar"
            />
          </Card>
        </div>
      )}
    </div>
  );
};

export default DashboardCalendar;
