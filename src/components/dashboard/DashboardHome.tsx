import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Target, Plus, Trash2, ClipboardList } from "lucide-react";


const DEFAULT_GOALS = [
  "Complete robot design & CAD",
  "Build and test drivetrain",
  "Program autonomous routines",
  "Finalize intake mechanism",
  "Driver practice sessions (10+)",
  "Engineering notebook up to date",
  "Outreach event completed",
  "Qualify for state championship",
];

interface Goal {
  text: string;
  done: boolean;
}

const DashboardHome = () => {
  const { user } = useAuth();
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem("bp_season_goals_v2");
    if (saved) return JSON.parse(saved);
    return DEFAULT_GOALS.map((text) => ({ text, done: false }));
  });
  const [newGoal, setNewGoal] = useState("");

  useEffect(() => {
    localStorage.setItem("bp_season_goals_v2", JSON.stringify(goals));
  }, [goals]);

  const toggle = (i: number) => {
    setGoals((prev) => prev.map((g, idx) => (idx === i ? { ...g, done: !g.done } : g)));
  };

  const addGoal = () => {
    const trimmed = newGoal.trim();
    if (!trimmed) return;
    setGoals((prev) => [...prev, { text: trimmed, done: false }]);
    setNewGoal("");
  };

  const removeGoal = (i: number) => {
    setGoals((prev) => prev.filter((_, idx) => idx !== i));
  };

  const completedCount = goals.filter((g) => g.done).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Welcome back, {user?.user_metadata?.display_name || user?.email?.split("@")[0]}!
        </h1>
        <p className="text-muted-foreground mt-2">Beyond Pi #26123 — Member Dashboard</p>
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

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Season Goals</CardTitle>
            </div>
            <span className="text-sm text-muted-foreground">
              {completedCount}/{goals.length} done
            </span>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-muted/40">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${goals.length ? (completedCount / goals.length) * 100 : 0}%` }}
              />
            </div>

            {/* Add goal */}
            <form
              onSubmit={(e) => { e.preventDefault(); addGoal(); }}
              className="flex gap-2"
            >
              <Input
                placeholder="Add a new goal..."
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm" disabled={!newGoal.trim()} className="gap-1">
                <Plus className="w-4 h-4" /> Add
              </Button>
            </form>

            {/* Goals list */}
            <ul className="space-y-2">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <Checkbox
                    id={`goal-${i}`}
                    checked={goal.done}
                    onCheckedChange={() => toggle(i)}
                  />
                  <label
                    htmlFor={`goal-${i}`}
                    className={`text-sm cursor-pointer select-none flex-1 ${
                      goal.done ? "line-through text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {goal.text}
                  </label>
                  <button
                    type="button"
                    onClick={() => removeGoal(i)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
