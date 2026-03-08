import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Calendar, ClipboardList } from "lucide-react";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardCalendar from "@/components/dashboard/DashboardCalendar";
import DashboardMeetings from "@/components/dashboard/DashboardMeetings";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-12">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="w-4 h-4" /> Home
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Calendar
            </TabsTrigger>
            <TabsTrigger value="meetings" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" /> Meeting Logs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <DashboardHome />
          </TabsContent>
          <TabsContent value="calendar">
            <DashboardCalendar />
          </TabsContent>
          <TabsContent value="meetings">
            <DashboardMeetings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
