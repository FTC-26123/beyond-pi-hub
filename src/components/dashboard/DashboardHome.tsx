import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Target, Plus, Trash2, ClipboardList } from "lucide-react";

interface Goal {
  id: string;
  text: string;
  done: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  member: string;
  finish_by: string | null;
  done: boolean;
}

const DashboardHome = () => {
  const { user } = useAuth();

  // Goals state
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState("");

  // Tasks state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", member: "", finish_by: "" });
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Fetch goals
  const fetchGoals = async () => {
    const { data } = await supabase
      .from("season_goals")
      .select("*")
      .order("created_at", { ascending: true });
    if (data) setGoals(data);
  };

  // Fetch tasks
  const fetchTasks = async () => {
    const { data } = await supabase
      .from("individual_tasks")
      .select("*")
      .order("created_at", { ascending: true });
    if (data) setTasks(data);
  };

  useEffect(() => {
    fetchGoals();
    fetchTasks();

    // Realtime subscriptions
    const goalsChannel = supabase
      .channel("season_goals_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "season_goals" }, () => {
        fetchGoals();
      })
      .subscribe();

    const tasksChannel = supabase
      .channel("individual_tasks_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "individual_tasks" }, () => {
        fetchTasks();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(goalsChannel);
      supabase.removeChannel(tasksChannel);
    };
  }, []);

  // Goal actions
  const addGoal = async () => {
    const trimmed = newGoal.trim();
    if (!trimmed || !user) return;
    await supabase.from("season_goals").insert({ text: trimmed, created_by: user.id });
    setNewGoal("");
  };

  const toggleGoal = async (goal: Goal) => {
    await supabase.from("season_goals").update({ done: !goal.done }).eq("id", goal.id);
  };

  const removeGoal = async (id: string) => {
    await supabase.from("season_goals").delete().eq("id", id);
  };

  // Task actions
  const addTask = async () => {
    if (!newTask.title.trim() || !user) return;
    await supabase.from("individual_tasks").insert({
      title: newTask.title.trim(),
      description: newTask.description.trim(),
      member: newTask.member.trim(),
      finish_by: newTask.finish_by || null,
      created_by: user.id,
    });
    setNewTask({ title: "", description: "", member: "", finish_by: "" });
    setShowTaskForm(false);
  };

  const toggleTask = async (task: Task) => {
    await supabase.from("individual_tasks").update({ done: !task.done }).eq("id", task.id);
  };

  const removeTask = async (id: string) => {
    await supabase.from("individual_tasks").delete().eq("id", id);
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
            <div className="w-full h-2 rounded-full bg-muted/40">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${goals.length ? (completedCount / goals.length) * 100 : 0}%` }}
              />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); addGoal(); }} className="flex gap-2">
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

            <ul className="space-y-2">
              {goals.map((goal) => (
                <li key={goal.id} className="flex items-center gap-3">
                  <Checkbox
                    id={`goal-${goal.id}`}
                    checked={goal.done}
                    onCheckedChange={() => toggleGoal(goal)}
                  />
                  <label
                    htmlFor={`goal-${goal.id}`}
                    className={`text-sm cursor-pointer select-none flex-1 ${
                      goal.done ? "line-through text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {goal.text}
                  </label>
                  <button
                    type="button"
                    onClick={() => removeGoal(goal.id)}
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

      {/* Individual Tasks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Individual Tasks</CardTitle>
          </div>
          <Button size="sm" onClick={() => setShowTaskForm(!showTaskForm)} className="gap-1">
            <Plus className="w-4 h-4" /> Add Task
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {showTaskForm && (
            <form
              onSubmit={(e) => { e.preventDefault(); addTask(); }}
              className="grid gap-3 sm:grid-cols-2 p-4 rounded-lg border border-border bg-muted/20"
            >
              <Input
                placeholder="Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                required
              />
              <Input
                placeholder="Member"
                value={newTask.member}
                onChange={(e) => setNewTask({ ...newTask, member: e.target.value })}
              />
              <Input
                placeholder="Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
              <Input
                type="date"
                value={newTask.finish_by}
                onChange={(e) => setNewTask({ ...newTask, finish_by: e.target.value })}
              />
              <div className="sm:col-span-2 flex gap-2">
                <Button type="submit" size="sm">Save</Button>
                <Button type="button" size="sm" variant="outline" onClick={() => setShowTaskForm(false)}>Cancel</Button>
              </div>
            </form>
          )}

          {tasks.length === 0 && !showTaskForm ? (
            <p className="text-sm text-muted-foreground text-center py-4">No tasks yet. Click "Add Task" to get started.</p>
          ) : tasks.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-3 w-8"></th>
                    <th className="pb-2 pr-3 font-medium text-muted-foreground">Title</th>
                    <th className="pb-2 pr-3 font-medium text-muted-foreground">Description</th>
                    <th className="pb-2 pr-3 font-medium text-muted-foreground">Member</th>
                    <th className="pb-2 pr-3 font-medium text-muted-foreground">Finish By</th>
                    <th className="pb-2 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b border-border/50 last:border-0">
                      <td className="py-2 pr-3">
                        <Checkbox checked={task.done} onCheckedChange={() => toggleTask(task)} />
                      </td>
                      <td className={`py-2 pr-3 ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {task.title}
                      </td>
                      <td className={`py-2 pr-3 ${task.done ? "line-through text-muted-foreground" : "text-muted-foreground"}`}>
                        {task.description || "—"}
                      </td>
                      <td className={`py-2 pr-3 ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {task.member || "—"}
                      </td>
                      <td className={`py-2 pr-3 ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {task.finish_by || "—"}
                      </td>
                      <td className="py-2">
                        <button
                          type="button"
                          onClick={() => removeTask(task.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
