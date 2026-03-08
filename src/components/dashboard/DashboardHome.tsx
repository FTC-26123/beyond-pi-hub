import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Wrench, Target } from "lucide-react";

const SEASON_GOALS = [
  "Complete robot design & CAD",
  "Build and test drivetrain",
  "Program autonomous routines",
  "Finalize intake mechanism",
  "Driver practice sessions (10+)",
  "Engineering notebook up to date",
  "Outreach event completed",
  "Qualify for state championship",
];

const DashboardHome = () => {
  const { user } = useAuth();
  const [checked, setChecked] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem("bp_season_goals");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("bp_season_goals", JSON.stringify(checked));
  }, [checked]);

  const toggle = (i: number) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Welcome back, {user?.user_metadata?.display_name || user?.email?.split("@")[0]}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Beyond Pi #26123 — Member Dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <User className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 row-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Season Goals</CardTitle>
            </div>
            <span className="text-sm text-muted-foreground">
              {completedCount}/{SEASON_GOALS.length} done
            </span>
          </CardHeader>
          <CardContent>
            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-muted/40 mb-4">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${(completedCount / SEASON_GOALS.length) * 100}%` }}
              />
            </div>
            <ul className="space-y-3">
              {SEASON_GOALS.map((goal, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Checkbox
                    id={`goal-${i}`}
                    checked={!!checked[i]}
                    onCheckedChange={() => toggle(i)}
                  />
                  <label
                    htmlFor={`goal-${i}`}
                    className={`text-sm cursor-pointer select-none ${
                      checked[i] ? "line-through text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {goal}
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Wrench className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Access team resources and tools</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
